import { toast } from "react-toastify";
import styled from "styled-components";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";

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

function InitContainerShipmentPage({ match }: Props) {
    const contract = useContract("Container");
    const user = useUser();

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function ({
        data,
        reset,
    }) {
        contract.methods
            .initContainerShipment(
                match.params.id,
                data.status,
                data.desc,
                data.locName
            )
            .send({ from: user?.address })
            .once("transactionHash", () => {
                toast.info(
                    `Shipment initiation for Container ${match.params.id} is being processed`
                );
                reset();
            })
            .once("receipt", () =>
                toast.success(
                    `Successfully intiated shipment of Container ${match.params.id}`
                )
            );
    };

    return (
        <ItemFunction
            id={match.params.id}
            type="Container"
            title="Initiate container shipment"
        >
            <FormWrapper>
                <div>Checkpoint</div>
                <CheckpointForm
                    onSubmit={handleSubmit}
                    buttonText="Initiate shipment"
                />
            </FormWrapper>
        </ItemFunction>
    );
}

export default InitContainerShipmentPage;
