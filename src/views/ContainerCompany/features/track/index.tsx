import { SubmitHandler } from "react-hook-form";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import {
    PageHeader,
    PageTitle,
    SectionBreak,
} from "../../../../components/styled";

import TrackProgressForm from "../../../components/TrackProgressForm";
import TrackSearchForm from "../../../components/TrackSearchForm";

const Container = styled.div``;

function Track() {
    const match = useRouteMatch();
    const history = useHistory();

    const onSubmit: SubmitHandler<{
        id: number;
    }> = function (data) {
        history.replace(`${match.url}/${data.id}`);
    };

    return (
        <Container>
            <PageHeader>
                <PageTitle>Track & Trace</PageTitle>
            </PageHeader>
            <TrackSearchForm
                onSubmit={onSubmit}
                placeholder="Enter container ID here"
            />
            <SectionBreak />
            <Route path={`${match.url}/:id`} component={TrackProgressForm} />
        </Container>
    );
}

export default Track;
