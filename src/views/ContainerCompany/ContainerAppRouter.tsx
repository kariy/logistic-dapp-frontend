import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

import ContainerAdminPage from "./features/admin";
import ContainerTrackPage from "./features/track";

function ContainerAppRouter() {
    const match = useRouteMatch();
    const user = useUser();

    return (
        <>
            <Route
                path={`${match.path}/track/:id?`}
                component={ContainerTrackPage}
            />

            <Route
                path={`${match.path}/admin`}
                component={ContainerAdminPage}
            />

            <Route
                exact
                path={`${match.path}`}
                render={() => (
                    <Redirect
                        to={
                            user?.address
                                ? `${match.path}/admin`
                                : `${match.path}/track/`
                        }
                    />
                )}
            />
        </>
    );
}

export default ContainerAppRouter;
