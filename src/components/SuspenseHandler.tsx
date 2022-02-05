import { Suspense } from "react";
import LoadingPage from "./Fallbacks/LoadingPage";

function SuspenseHandler({ children }: React.PropsWithChildren<{}>) {
    return <Suspense fallback={LoadingPage}>{children}</Suspense>;
}

export default SuspenseHandler;
