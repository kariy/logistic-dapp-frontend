import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.Container``;

function Track() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Container>
                <Container>track</Container>

                <Route path={`${match.path}/id`}>
                    <Container>Details</Container>
                </Route>
            </Container>
        </Switch>
    );
}

export default Track;
