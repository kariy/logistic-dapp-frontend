import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

import CourierAdminPage from "./features/admin";
import CourierTrackPage from "./features/track";

function CourierAppRouter() {
    const match = useRouteMatch();
    const user = useUser();

    return (
        <>
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
        </>
    );
}

export default CourierAppRouter;
