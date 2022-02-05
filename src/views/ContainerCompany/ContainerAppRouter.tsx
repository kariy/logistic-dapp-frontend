import { lazy, Suspense } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

const ContainerAdminPage = lazy(() => import("./features/admin"));
const ContainerTrackPage = lazy(() => import("./features/track"));

function ContainerAppRouter() {
    const match = useRouteMatch();
    const user = useUser();

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
}

export default ContainerAppRouter;
