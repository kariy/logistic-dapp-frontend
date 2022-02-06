import { toast } from "react-toastify";
import { useContract } from "../../../../../providers/ContractProvider";
import { useUser } from "../../../../../providers/UserProvider";
import { FormSubmitHandler } from "../../../../../types/form";
import CheckpointForm, {
    TCheckpointFieldValues,
} from "../../../../components/Checkpoint/CheckpointForm";
import ItemFunction from "../../../../components/ItemFunction";

interface Props {
    match: any;
}

function AddContainerCheckpointPage({ match }: Props) {
    const contract = useContract("Container");
    const user = useUser();

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function ({
        data,
        reset,
    }) {
        contract.methods
            .addContainerCheckpoint(
                match.params.id,
                data.status,
                data.desc,
                data.operator,
                data.locName
            )
            .send({ from: user?.address })
            .once("transactionHash", () => {
                toast.info("Checkpoint addition is being processed");
                reset();
            })
            .once("receipt", () =>
                toast.success(
                    `New checkpoint for Container ${match.params.id} is successfully added`
                )
            );
    };

    return (
        <ItemFunction
            id={match.params.id}
            type="Container"
            title="Add a checkpoint"
        >
            <CheckpointForm onSubmit={handleSubmit} />
        </ItemFunction>
    );
}

export default AddContainerCheckpointPage;
