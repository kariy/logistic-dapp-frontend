import { Redirect, Route, Switch } from "react-router-dom";

import FallbackPage from "./components/FallbackPage";
import AppViewPage from "./views";
import ContainerApp from "./views/ContainerCompany";
import CourierApp from "./views/CourierCompany";

function MainRouter() {
    return (
        <Switch>
            <Route path="/" exact component={AppViewPage} />

            <Route path="/container-app" component={ContainerApp} />

            <Route path="/courier-app" component={CourierApp} />

            <Route path="/404" component={FallbackPage} />

            <Redirect to="/404" />
        </Switch>
    );
}

export default MainRouter;
