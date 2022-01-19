import { Redirect, Route } from "react-router-dom";
import ConnectWallet from "../components/ConnectWallet";
import { useUser } from "../providers/UserProvider";

function PrivateRoute({ Component, ...rest }) {
    const user = useUser();

    return (
        <Route {...rest}>
            {user.address ? <Component /> : <ConnectWallet />}
        </Route>
    );
}

export default PrivateRoute;
