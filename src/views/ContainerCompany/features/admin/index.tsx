import { Redirect, Route } from "react-router-dom";
import styled from "styled-components";

import { useUser } from "../../../../providers/UserProvider";
import ConnectWallet from "../../../../components/ConnectWallet";
import ContainerPage from "./ContainerPage";
import ContainerListPage from "./ContainerListPage";
import NewContainerPage from "./NewContainerPage";
import ContainerRouter from "./ContainerRouter";

const Container = styled.div``;

function Admin(props: any) {
    const user = useUser();

    return (
        <Container>
            {user?.address ? (
                <>
                    <Route
                        path={`${props.match.path}/containers/:id(\\d+)`}
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

                    <ContainerRouter match={props.match} />

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
