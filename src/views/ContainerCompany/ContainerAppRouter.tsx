import { Route, useRouteMatch } from "react-router-dom";
import Admin from "./features/admin";
import Track from "./features/track";

function ContainerAppRouter() {
    const match = useRouteMatch();

    return (
        <>
            <Route path={`${match.path}/track/`} component={Track} />

            <Route path={`${match.path}/admin`} component={Admin} />
        </>
    );
}

export default ContainerAppRouter;
