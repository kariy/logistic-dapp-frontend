import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

import Admin from "./features/admin";
import Track from "./features/track";

function ContainerAppRouter() {
    const match = useRouteMatch();
    const user = useUser();

    return (
        <>
            <Route path={`${match.path}/track/:id?`} component={Track} />

            <Route path={`${match.path}/admin`} component={Admin} />

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
