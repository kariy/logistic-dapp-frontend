import { Redirect, Route, Switch } from "react-router-dom";

import Fallback from "./components/Fallback";
import AppViewSelector from "./views";
import ContainerApp from "./views/ContainerCompany";

function MainRouter() {
    return (
        <Switch>
            <Route path="/" exact component={AppViewSelector} />

            <Route path="/container-app" component={ContainerApp} />

            {/* <Route path="/courier-app" component={CourierApp} /> */}

            <Route path="/404" component={Fallback} />

            <Redirect to="/404" />
        </Switch>
    );
}

export default MainRouter;
