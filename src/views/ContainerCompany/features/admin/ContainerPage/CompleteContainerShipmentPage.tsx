import { useQuery } from "react-query";
import styled from "styled-components";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import { Container } from "../../../../../types";
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

function CompleteContainerShipmentPage({ match }: Props) {
    const contract = useContract()?.container;
    const user = useUser();

    // retrieve container's receiver
    const { data: container } = useQuery<Container>(
        "containerReceiver",
        () => contract.methods.getContainerOf(match.params.id).call(),
        { refetchOnWindowFocus: false }
    );

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function ({
        data,
        setError,
        reset,
    }) {
        console.log(
            data.operator,
            container?.destination.receiver,
            data.operator === container?.destination.receiver
        );

        if (data.operator !== container?.destination.receiver) {
            setError("operator", {
                type: "validate",
                message: "Only the receiver can complete the shipment!",
            });

            return;
        }

        contract.methods
            .completeContainerShipment(
                match.params.id,
                data.status,
                data.desc,
                data.locName
            )
            .send({ from: user?.address })
            .then(() => reset())
            .catch(() => console.log("error"));
    };

    return (
        <ItemFunction
            id={match.params.id}
            type="Container"
            title="Complete container shipment"
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

export default CompleteContainerShipmentPage;
