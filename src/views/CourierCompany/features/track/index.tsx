import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";

import QueryRenderProp from "../../../../components/QueryRenderProp";
import { SectionBreak } from "../../../../components/styled";
import { useContract } from "../../../../providers/ContractProvider";
import MainPage from "../../../components/MainPage";
import TrackProgressForm from "../../../components/TrackProgressForm";
import TrackSearchForm from "../../../components/TrackSearchForm";

interface Props {
    match: any;
}

function CourierTrackPage({ match }: Props) {
    const [id, setId] = useState<number | undefined>(match.params.id);
    const courier = useContract()?.courier;

    const queryFn = useCallback(
        () => courier.methods.getCheckpointsOf(id).call(),
        [courier, id]
    );

    const onSubmit: SubmitHandler<{
        id: number;
    }> = function (data) {
        setId(data.id);
    };

    return (
        <MainPage title="Track & Trace">
            <TrackSearchForm
                defaultValue={id || ""}
                onSubmit={onSubmit}
                placeholder="Enter parcel ID here"
            />
            <SectionBreak />
            {id ? (
                <QueryRenderProp
                    queryFn={queryFn}
                    queryKey={`track_${id}`}
                    render={({ data }) => (
                        <TrackProgressForm checkpoints={data} />
                    )}
                />
            ) : null}
        </MainPage>
    );
}

export default CourierTrackPage;
