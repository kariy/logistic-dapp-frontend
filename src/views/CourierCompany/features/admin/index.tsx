import { Redirect, Route } from "react-router-dom";

import { useUser } from "../../../../providers/UserProvider";
import ConnectWalletPage from "../../../../components/ConnectWallet";

import ParcelListPage from "./ParcelListPage";
import NewParcelPage from "./NewParcelPage";
import ParcelPage from "./ParcelPage";

function CourierAdminPage(props: any) {
    const user = useUser();

    return (
        <>
            {user?.address ? (
                <>
                    <Route
                        path={`${props.match.path}/parcels/:id(\\d+)`}
                        component={ParcelPage}
                    />

                    <Route
                        path={`${props.match.path}/parcels/new`}
                        component={NewParcelPage}
                    />

                    <Route
                        exact
                        path={`${props.match.path}/parcels`}
                        component={ParcelListPage}
                    />

                    <Route
                        exact
                        path={`${props.match.path}`}
                        render={() => (
                            <Redirect to={`${props.match.path}/parcels`} />
                        )}
                    />
                </>
            ) : (
                <ConnectWalletPage />
            )}
        </>
    );
}

export default CourierAdminPage;
