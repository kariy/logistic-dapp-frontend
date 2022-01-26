import { Redirect, Route } from "react-router-dom";
import ConnectWalletPage from "../components/ConnectWallet";
import { useUser } from "../providers/UserProvider";

function PrivateRoute({ Component, ...rest }) {
    const user = useUser();

    return (
        <Route {...rest}>
            {user.address ? <Component /> : <ConnectWalletPage />}
        </Route>
    );
}

export default PrivateRoute;
