import { Route } from "react-router-dom";

interface Props {
    match: any;
}

function ContainerRouter({ match }: Props) {
    return (
        <>
            <Route path={`${match.path}/containers/:id(\\d+)/add-checkpoint`} />

            <Route path={`${match.path}/containers/:id(\\d+)/init-shipment`} />

            <Route
                path={`${match.path}/containers/:id(\\d+)/complete-shipment`}
            />
        </>
    );
}

export default ContainerRouter;
