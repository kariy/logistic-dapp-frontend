import React from "react";
import FallbackPage from "./Fallbacks/FallbackPage";

class ErrorHandler extends React.Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError)
            return (
                <FallbackPage text="Something went wrong. Please reload the page." />
            );

        return this.props.children;
    }
}

export default ErrorHandler;
