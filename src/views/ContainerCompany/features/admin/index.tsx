import { Redirect, Route } from "react-router-dom";
import styled from "styled-components";

import ConnectWallet from "../../../../components/ConnectWallet";
import { useUser } from "../../../../providers/UserProvider";
import ContainerPage from "./features/Container";
import ContainerListPage from "./features/ContainerList";
import NewContainerPage from "./features/NewContainer";

const Container = styled.div``;

function Admin(props: any) {
    const user = useUser();

    return (
        <Container>
            {user?.address ? (
                <>
                    <Route
                        path={`${props.match.path}/containers/:id`}
                        component={ContainerPage}
                    />

                    <Route
                        path={`${props.match.path}/containers/new`}
                        component={NewContainerPage}
                    />

                    <Route
                        exact
                        path={`${props.match.path}/containers`}
                        component={ContainerListPage}
                    />

                    <Route
                        exact
                        path={`${props.match.path}`}
                        render={() => (
                            <Redirect to={`${props.match.path}/containers`} />
                        )}
                    />
                </>
            ) : (
                <ConnectWallet />
            )}
        </Container>
    );
}

export default Admin;
