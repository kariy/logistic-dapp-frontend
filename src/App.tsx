import { BrowserRouter } from "react-router-dom";

import MainRouter from "./MainRouter";
import MainProvider from "./providers";

function App() {
    return (
        <BrowserRouter>
            <MainProvider>
                <MainRouter />
            </MainProvider>
        </BrowserRouter>
    );
}

export default App;
