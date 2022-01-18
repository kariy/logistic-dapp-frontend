import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

function Track() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Container>
                <div>track</div>

                <Route path={`${match.path}/id`}>
                    <div>Details</div>
                </Route>
            </Container>
        </Switch>
    );
}

export default Track;
