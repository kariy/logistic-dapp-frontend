import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import { FormSubmitHandler } from "../../../../../types/form";
import AddCheckpointForm, {
    TCheckpointFieldValues,
} from "../../../../components/Checkpoint/AddCheckpointForm";
import ItemFunction from "../../../../components/ItemFunction";

interface Props {
    match: any;
}

function AddParcelCheckpointPage({ match }: Props) {
    const contract = useContract()?.courier;
    const user = useUser();

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function ({
        data,
        reset,
    }) {
        contract.methods
            .addItemCheckpoint(
                match.params.id,
                data.status,
                data.desc,
                data.operator,
                data.locName
            )
            .send({ from: user?.address })
            .then((res: any) => reset());
    };

    return (
        <ItemFunction
            id={match.params.id}
            type="Parcel"
            title="Add parcel checkpoint"
        >
            <AddCheckpointForm onSubmit={handleSubmit} />
        </ItemFunction>
    );
}

export default AddParcelCheckpointPage;
