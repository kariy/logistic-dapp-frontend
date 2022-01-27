import { useQuery } from "react-query";
import styled from "styled-components";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import { Parcel } from "../../../../../types";
import { FormSubmitHandler } from "../../../../../types/form";
import CheckpointForm, {
    TCheckpointFieldValues,
} from "../../../../components/Checkpoint/CheckpointForm";
import ItemFunction from "../../../../components/ItemFunction";

const FormWrapper = styled.div`
    padding: 1rem 2rem 2rem 2rem;
    background-color: #e9e9e9;
    border-radius: ${(props) => props.theme.rounded.lg};

    & > div {
        font-weight: 700;
        margin-bottom: 1.4rem;
        text-align: center;
    }
`;

interface Props {
    match: any;
}

function CompleteParcelShipmentPage({ match }: Props) {
    const contract = useContract()?.courier;
    const user = useUser();

    // retrieve container's receiver
    const { data: parcel } = useQuery<Parcel>(
        "containerReceiver",
        () => contract.methods.getItemOf(match.params.id).call(),
        { refetchOnWindowFocus: false }
    );

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function ({
        data,
        setError,
        reset,
    }) {
        // console.log(
        //     data.operator,
        //     parcel?.destination.receiver,
        //     data.operator === parcel?.destination.receiver
        // );

        // if (data.operator !== parcel?.destination.receiver) {
        //     setError("operator", {
        //         type: "validate",
        //         message: "Only the receiver can complete the shipment!",
        //     });

        //     return;
        // }

        contract.methods
            .completeItemShipment(
                match.params.id,
                data.status,
                data.desc,
                data.locName
            )
            .send({ from: user?.address, value: parcel?.price })
            .then(() => reset())
            .catch(() => console.log("error"));
    };

    return (
        <ItemFunction
            title="Complete parcel shipment"
            type="Parcel"
            id={match.params.id}
        >
            <FormWrapper>
                <div>Checkpoint</div>
                <CheckpointForm
                    onSubmit={handleSubmit}
                    buttonText="Complete shipment"
                />
            </FormWrapper>
        </ItemFunction>
    );
}

export default CompleteParcelShipmentPage;
