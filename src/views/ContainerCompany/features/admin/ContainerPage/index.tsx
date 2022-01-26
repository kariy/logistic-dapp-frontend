import { Route } from "react-router-dom";

import AddContainerCheckpointPage from "./AddContainerCheckpointPage";
import CompleteContainerShipmentPage from "./CompleteContainerShipmentPage";
import InitContainerShipmentPage from "./InitContainerShipmentPage";
import ContainerDetailsPage from "./ContainerDetailsPage";
import { ParcelListToggleProvider } from "./ParcelListToggleProvider";

function ContainerPage(props: any) {
    return (
        <>
            <Route
                exact
                path={`${props.match.path}/add-checkpoint`}
                component={AddContainerCheckpointPage}
            />

            <Route
                exact
                path={`${props.match.path}/init-shipment`}
                component={InitContainerShipmentPage}
            />

            <Route
                exact
                path={`${props.match.path}/complete-shipment`}
                component={CompleteContainerShipmentPage}
            />

            <ParcelListToggleProvider>
                <Route
                    exact
                    path={props.match.path}
                    component={ContainerDetailsPage}
                />
            </ParcelListToggleProvider>
        </>
    );
}

export default ContainerPage;
