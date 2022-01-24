import { SubmitHandler } from "react-hook-form";

import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import AddCheckpointForm, {
    TCheckpointFieldValues,
} from "../../../../components/Checkpoint/AddCheckpointForm";
import ItemFunction from "../../../../components/ItemFunction";

function AddContainerCheckpointPage(props: any) {
    const contract = useContract()?.container;
    const user = useUser();

    const handleSubmit: SubmitHandler<TCheckpointFieldValues> = function (
        data
    ) {
        contract.methods
            .addContainerCheckpoint(
                props.match.params.id,
                data.status,
                data.desc,
                data.operator,
                data.locName
            )
            .send({ from: user?.address })
            .then((res: any) => {
                // handle response here
                console.log("res", res);
            })
            .catch(() => {});
    };

    return (
        <ItemFunction
            id={props.match.params.id}
            type="Container"
            title="Add a checkpoint"
        >
            <AddCheckpointForm onSubmit={handleSubmit} />
        </ItemFunction>
    );
}

export default AddContainerCheckpointPage;
