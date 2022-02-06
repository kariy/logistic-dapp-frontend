import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Input, Label } from "../../../../../components/styled";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import { useWeb3 } from "../../../../../providers/Web3Provider";

import { Parcel } from "../../../../../types";
import { FormSubmitHandler } from "../../../../../types/form";
import CheckpointForm, {
    TCheckpointFieldValues,
} from "../../../../components/Checkpoint/CheckpointForm";
import ItemFunction from "../../../../components/ItemFunction";

const PageSection = styled.div`
    padding: 1em 2em;
    border-radius: ${(props) => props.theme.rounded.lg};

    .section__title {
        font-weight: 700;
        margin-bottom: 1.4rem;
        text-align: center;
    }
`;

const Container = styled.div`
    .form-helper-text {
        margin-bottom: 3px;
        font-style: italic;
        font-size: 0.8em;
    }
`;

const PaymentWrapper = styled(PageSection)`
    border: 1px solid ${(props) => props.theme.colors.grey};
`;

const CheckpointFormWrapper = styled(PageSection)`
    padding-bottom: 1.5em;
    margin-top: 2rem;
    margin-bottom: 20px;
    background-color: #e9e9e9;
`;

interface Props {
    match: any;
}

function CompleteParcelShipmentPage({ match }: Props) {
    const [balance, setBalance] = useState(0);

    const web3 = useWeb3();
    const user = useUser();
    const contract = useContract("Courier");

    // retrieve container's receiver
    const { data: parcel } = useQuery<Parcel>(
        "containerReceiver",
        () => contract.methods.getItemOf(match.params.id).call(),
        { refetchOnWindowFocus: false }
    );

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function ({
        data,
        reset,
    }) {
        contract.methods
            .completeItemShipment(
                match.params.id,
                data.status,
                data.desc,
                data.locName
            )
            .send({ from: user?.address, value: parcel?.price })
            .once("transactionHash", () => {
                toast.info(
                    `Shipment completion for Parcel ${match.params.id} is being processed`
                );
                reset();
            })
            .once("receipt", () =>
                toast.success(
                    `Successfully completed shipment of Parcel ${match.params.id}`
                )
            );
    };

    useEffect(() => {
        if (!user || !user.address || !web3) return;

        web3.eth
            .getBalance(user.address)
            .then((data) => setBalance(Number(web3.utils.fromWei(data))));
    }, [user, web3]);

    return (
        <ItemFunction
            title="Complete parcel shipment"
            type="Parcel"
            id={match.params.id}
        >
            <Container>
                <PaymentWrapper>
                    <div className="section__title">Payment details</div>
                    <div>
                        <Label>
                            Your account balance
                            <Input readOnly value={`${balance} ETH`} />
                        </Label>
                        <Label>
                            Parcel price
                            <Input
                                readOnly
                                value={`${
                                    web3 && parcel
                                        ? web3.utils.fromWei(
                                              String(parcel.price)
                                          )
                                        : "0"
                                } ETH`}
                            />
                        </Label>
                    </div>
                </PaymentWrapper>
                <CheckpointFormWrapper>
                    <div className="section__title">Checkpoint</div>
                    <CheckpointForm
                        onSubmit={handleSubmit}
                        buttonText="Complete shipment"
                    />
                </CheckpointFormWrapper>
                <div className="form-helper-text">
                    *Only the receiver of this parcel can complete the shipment.
                </div>
                <div className="form-helper-text">
                    *Make sure you have enough ether before performing the
                    transaction.
                </div>
            </Container>
        </ItemFunction>
    );
}

export default CompleteParcelShipmentPage;
