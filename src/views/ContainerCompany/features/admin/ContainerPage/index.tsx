import { Route } from "react-router-dom";

import AddContainerCheckpointPage from "./AddContainerCheckpointPage";
import CompleteContainerShipmentPage from "./CompleteContainerShipmentPage";
import ContainerDetailsPage from "./ContainerDetailsPage";
import InitContainerShipmentPage from "./InitContainerShipmentPage";

function ContainerPage(props: any) {
    console.log("container", props.match);

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

            <Route
                exact
                path={props.match.path}
                component={ContainerDetailsPage}
            />
        </>
    );
}

export default ContainerPage;
