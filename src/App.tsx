import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainRouter from "./MainRouter";
import MainProvider from "./providers";
import { checkWeb3 } from "./providers/Web3Provider/web3-helper";

function App() {
    return (
        <BrowserRouter>
            {checkWeb3() ? (
                <MainProvider>
                    <MainRouter />
                    <ToastContainer position="bottom-left" theme="colored" />
                </MainProvider>
            ) : (
                // https://stackoverflow.com/questions/51971449/react-warning-computedmatch-regarding-some-case-issues
                <Fragment>your browser does not support web3 lmao</Fragment>
            )}
        </BrowserRouter>
    );
}

export default App;
