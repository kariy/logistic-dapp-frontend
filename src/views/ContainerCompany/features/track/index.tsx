import { useContract } from "../../../../providers/ContractProvider";

import ItemTrackTrace from "../../../components/Track/ItemTrackPage";

interface Props {
    match: any;
}

function ContainerTrackPage({ match }: Props) {
    const contract = useContract()?.container;

    const queryFn = (id?: number) =>
        contract.methods.getCheckpointsOf(id).call();

    return (
        <ItemTrackTrace
            inputPlaceholder="Enter container ID"
            initInputValue={match.params.id}
            queryFn={queryFn}
        />
    );
}

export default ContainerTrackPage;
