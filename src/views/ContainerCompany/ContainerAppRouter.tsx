import { Route, Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from "../../auth/PrivateRoute";
import Admin from "./features/admin";
import Track from "./features/track";

function ContainerAppRouter() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/track`} component={Track} />

            <PrivateRoute path={`${match.path}/admin`} component={Admin} />
        </Switch>
    );
}

export default ContainerAppRouter;
