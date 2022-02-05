import { Link } from "react-router-dom";
import FallbackPage from "./FallbackPage";

function PageNotFound() {
    return (
        <FallbackPage
            render={() => (
                <>
                    <div>Error 404 | Page not found</div>
                    <Link to="/">{`Return to app selector >`}</Link>
                </>
            )}
        />
    );
}

export default PageNotFound;
