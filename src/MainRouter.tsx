import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import LoadingPage from "./components/Fallbacks/LoadingPage";
import PageNotFound from "./components/Fallbacks/PageNotFound";

import AppViewPage from "./views";

const ContainerApp = lazy(() => import("./views/ContainerCompany"));
const CourierApp = lazy(() => import("./views/CourierCompany"));
// import ContainerApp from "./views/ContainerCompany";
// import CourierApp from "./views/CourierCompany";

function MainRouter() {
    return (
        <Switch>
            <Route path="/" exact component={AppViewPage} />

            <Suspense fallback={<LoadingPage />}>
                <Route path="/container-app" component={ContainerApp} />

                <Route path="/courier-app" component={CourierApp} />
            </Suspense>

            <Route path="/404" component={PageNotFound} />

            <Redirect to="/404" />
        </Switch>
    );
}

export default MainRouter;
