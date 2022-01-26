import { Route } from "react-router-dom";

import AddParcelCheckpointPage from "./AddParcelCheckpointPage";
import CompleteParcelShipmentPage from "./CompleteParcelShipmentPage";
import InitParcelShipmentPage from "./InitParcelShipmentPage";
import ParcelDetailsPage from "./ParcelDetailsPage";

function ParcelPage(props: any) {
    return (
        <>
            <Route
                exact
                path={`${props.match.path}/add-checkpoint`}
                component={AddParcelCheckpointPage}
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
        </>
    );
}

export default ParcelPage;
