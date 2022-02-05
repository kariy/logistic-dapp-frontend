import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import { ParcelListToggleProvider } from "./ParcelListToggleProvider";

const AddContainerCheckpointPage = lazy(
    () => import("./AddContainerCheckpointPage")
);
const CompleteContainerShipmentPage = lazy(
    () => import("./CompleteContainerShipmentPage")
);
const InitContainerShipmentPage = lazy(
    () => import("./InitContainerShipmentPage")
);
const ContainerDetailsPage = lazy(() => import("./ContainerDetailsPage"));
// import AddContainerCheckpointPage from "./AddContainerCheckpointPage";
// import CompleteContainerShipmentPage from "./CompleteContainerShipmentPage";
// import InitContainerShipmentPage from "./InitContainerShipmentPage";
// import ContainerDetailsPage from "./ContainerDetailsPage";

function ContainerPage(props: any) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
}

export default ContainerPage;
