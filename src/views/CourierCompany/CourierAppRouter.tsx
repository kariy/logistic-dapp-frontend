import { lazy } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";

import SuspenseHandler from "../../components/SuspenseHandler";
import { useUser } from "../../providers/UserProvider";

const CourierAdminPage = lazy(() => import("./features/admin"));
const CourierTrackPage = lazy(() => import("./features/track"));

function CourierAppRouter() {
    const match = useRouteMatch();
    const user = useUser();

    return (
        <SuspenseHandler>
            <Route
                path={`${match.path}/track/:id?`}
                component={CourierTrackPage}
            />

            <Route path={`${match.path}/admin`} component={CourierAdminPage} />

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
        </SuspenseHandler>
    );
}

export default CourierAppRouter;
