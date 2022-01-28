import { useContract } from "../../../../providers/ContractProvider";

import ItemTrackTrace from "../../../components/Track/ItemTrackPage";

interface Props {
    match: any;
}

function ContainerTrackPage({ match }: Props) {
    const contract = useContract()?.courier;

    const queryFn = (id?: number) =>
        contract.methods.getCheckpointsOf(id).call();

    return (
        <ItemTrackTrace
            inputPlaceholder="Enter parcel ID"
            initInputValue={match.params.id}
            queryFn={queryFn}
        />
    );
}

export default ContainerTrackPage;
