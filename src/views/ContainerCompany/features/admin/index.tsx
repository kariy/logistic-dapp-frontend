import { Redirect, Route } from "react-router-dom";

import { useUser } from "../../../../providers/UserProvider";
import ConnectWallet from "../../../../components/ConnectWallet";

import ContainerListPage from "./ContainerListPage";
import NewContainerPage from "./NewContainerPage";
import ContainerPage from "./ContainerPage";

function Admin(props: any) {
    const user = useUser();

    return (
        <>
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
        </>
    );
}

export default Admin;
