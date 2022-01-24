import { SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { SectionBreak } from "../../../../components/styled";
import MainPage from "../../../components/MainPage";
import TrackProgressForm from "../../../components/TrackProgressForm";
import TrackSearchForm from "../../../components/TrackSearchForm";

interface Props {
    match: any;
}

function Track({ match }: Props) {
    const history = useHistory();

    const onSubmit: SubmitHandler<{
        id: number;
    }> = function (data) {
        history.replace(`${match.url}/${data.id}`);
    };

    return (
        <MainPage title="Track & Trace">
            <TrackSearchForm
                defaultValue={match.params.id ? match.params.id : null}
                onSubmit={onSubmit}
                placeholder="Enter container ID here"
            />
            <SectionBreak />
            {match.params.id ? (
                <TrackProgressForm
                    itemId={match.params.id}
                    itemType="Container"
                />
            ) : null}
        </MainPage>
    );
}

export default Track;
