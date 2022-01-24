import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";

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

function AddContainerCheckpointPage({ match }: Props) {
    const contract = useContract()?.container;
    const user = useUser();

    const handleSubmit: FormSubmitHandler<TCheckpointFieldValues> = function (
        data,
        reset
    ) {
        contract.methods
            .addContainerCheckpoint(
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
            type="Container"
            title="Add a checkpoint"
        >
            <AddCheckpointForm onSubmit={handleSubmit} />
        </ItemFunction>
    );
}

export default AddContainerCheckpointPage;
