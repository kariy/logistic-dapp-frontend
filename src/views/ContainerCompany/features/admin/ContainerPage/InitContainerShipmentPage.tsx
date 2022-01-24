import { SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
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

function InitContainerShipmentPage({ match }: Props) {
    const container = useContract()?.container;
    const user = useUser();

    const handleSubmit: SubmitHandler<TCheckpointFieldValues> = function (
        data
    ) {
        console.log("init shipment", data);
        container.methods
            .initContainerShipment(
                match.params.id,
                data.status,
                data.desc,
                data.locName
            )
            .send({ from: user?.address })
            .then(() => console.log("init shpiment success"));
    };

    return (
        <ItemFunction
            id={match.params.id}
            type="Container"
            title="Initiate container shipment"
        >
            <FormWrapper>
                <div>Checkpoint</div>
                <AddCheckpointForm
                    onSubmit={handleSubmit}
                    buttonText="Initiate shipment"
                />
            </FormWrapper>
        </ItemFunction>
    );
}

export default InitContainerShipmentPage;
