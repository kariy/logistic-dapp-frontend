import { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { useUser } from "../providers/UserProvider";

function PrivateRoute({ component, ...rest }) {
    const user = useUser();

    return (
        <Route
            {...rest}
            render={(props) =>
                user?.address ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/connect-wallet" }} />
                )
            }
        />
    );
}

export default PrivateRoute;
