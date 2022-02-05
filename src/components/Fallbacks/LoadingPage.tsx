import FallbackPage from "./FallbackPage";
import { ClipLoader } from "../Loaders";

function LoadingPage() {
    return <FallbackPage render={() => <ClipLoader />} />;
}

export default LoadingPage;
