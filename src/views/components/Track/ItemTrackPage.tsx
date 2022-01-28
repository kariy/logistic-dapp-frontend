import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import styled from "styled-components";
import { ClipLoader } from "../../../components/Loaders";
import QueryRenderProp from "../../../components/QueryRenderProp";
import { SectionBreak } from "../../../components/styled";
import { Checkpoint } from "../../../types";
import MainPage from "../MainPage";
import TrackProgress from "./TrackProgress";
import TrackSearchForm, { TTrackFieldValues } from "./TrackSearchForm";

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    width: 100%;
`;

interface Props {
    queryFn: (id?: number) => any;
    inputPlaceholder?: string;
    initInputValue?: number;
}

function ItemTrackTrace({
    initInputValue,
    queryFn,
    inputPlaceholder = "",
}: Props) {
    const [id, setId] = useState<number | undefined>(initInputValue);

    const handleSubmit: SubmitHandler<TTrackFieldValues> = ({ id }) =>
        setId(id);

    const queryCallback = () => queryFn(id);

    return (
        <MainPage title="Track & Trace">
            <TrackSearchForm
                defaultValue={id || ""}
                onSubmit={handleSubmit}
                placeholder={inputPlaceholder}
            />
            <SectionBreak />
            {id ? (
                <ProgressWrapper>
                    <QueryRenderProp<Checkpoint[]>
                        queryFn={queryCallback}
                        queryKey={`track_${id}`}
                        render={({ data, isLoading }) =>
                            data ? (
                                <TrackProgress checkpoints={data} />
                            ) : isLoading ? (
                                <ClipLoader />
                            ) : (
                                <div>No data</div>
                            )
                        }
                    />
                </ProgressWrapper>
            ) : null}
        </MainPage>
    );
}

export default ItemTrackTrace;
