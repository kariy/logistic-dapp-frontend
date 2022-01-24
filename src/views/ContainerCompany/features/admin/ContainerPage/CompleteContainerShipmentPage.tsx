import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import { FormSubmitHandler } from "../../../../../types/form";
import AddCheckpointForm, {
    TCheckpointFieldValues,
} from "../../../../components/Checkpoint/AddCheckpointForm";
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
    const container = useContract()?.container;
    const user = useUser();

    useEffect(() => {
        container.methods
            .getReceiverOf(match.params.id)
            .call()
            .then((data: any) => console.log("item receiver", data));
    }, [container, match]);

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function (
        data,
        reset
    ) {
        container.methods
            .completeContainerShipment(
                match.params.id,
                data.status,
                data.desc,
                data.locName
            )
            .send({ from: user?.address })
            .then(() => console.log("complete shpiment success"))
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
                <AddCheckpointForm
                    onSubmit={handleSubmit}
                    buttonText="Complete shipment"
                />
            </FormWrapper>
        </ItemFunction>
    );
}

export default CompleteContainerShipmentPage;
