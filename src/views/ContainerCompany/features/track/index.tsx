import { SubmitHandler } from "react-hook-form";
import { Route, useHistory, useRouteMatch } from "react-router-dom";

import { SectionBreak } from "../../../../components/styled";
import MainPage from "../../../components/MainPage";
import TrackProgressForm from "../../../components/TrackProgressForm";
import TrackSearchForm from "../../../components/TrackSearchForm";

function Track() {
    const match = useRouteMatch();
    const history = useHistory();

    const onSubmit: SubmitHandler<{
        id: number;
    }> = function (data) {
        history.replace(`${match.url}/${data.id}`);
    };

    return (
        <MainPage title="Track & Trace">
            <TrackSearchForm
                onSubmit={onSubmit}
                placeholder="Enter container ID here"
            />
            <SectionBreak />
            <Route path={`${match.url}/:id`} component={TrackProgressForm} />
        </MainPage>
    );
}

export default Track;
