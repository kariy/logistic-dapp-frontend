import { lazy } from "react";
import { Route } from "react-router-dom";

import SuspenseHandler from "../../../../../components/SuspenseHandler";

const AddParcelCheckpointPage = lazy(() => import("./AddParcelCheckpointPage"));
const CompleteParcelShipmentPage = lazy(
    () => import("./CompleteParcelShipmentPage")
);
const ForwardParcelPage = lazy(() => import("./ForwardParcelPage"));
const InitParcelShipmentPage = lazy(() => import("./InitParcelShipmentPage"));
const ParcelDetailsPage = lazy(() => import("./ParcelDetailsPage"));

// import AddParcelCheckpointPage from "./AddParcelCheckpointPage";
// import CompleteParcelShipmentPage from "./CompleteParcelShipmentPage";
// import ForwardParcelPage from "./ForwardParcelPage";
// import InitParcelShipmentPage from "./InitParcelShipmentPage";
// import ParcelDetailsPage from "./ParcelDetailsPage";

function ParcelPage(props: any) {
    return (
        <SuspenseHandler>
            <Route
                exact
                path={`${props.match.path}/add-checkpoint`}
                component={AddParcelCheckpointPage}
            />
            <Route
                exact
                path={`${props.match.path}/forward-to-container`}
                component={ForwardParcelPage}
            />
            <Route
                exact
                path={`${props.match.path}/init-shipment`}
                component={InitParcelShipmentPage}
            />
            <Route
                exact
                path={`${props.match.path}/complete-shipment`}
                component={CompleteParcelShipmentPage}
            />
            <Route
                exact
                path={props.match.path}
                component={ParcelDetailsPage}
            />
        </SuspenseHandler>
    );
}

export default ParcelPage;
