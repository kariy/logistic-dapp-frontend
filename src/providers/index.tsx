import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "./ThemeProvider";
import { UserProvider } from "./UserProvider";
import { Web3Provider } from "./Web3Provider";

const MainProvider: React.FC = function ({ children }) {
    return (
        <ThemeProvider>
            <QueryClientProvider client={new QueryClient()}>
                <Web3Provider>
                    <UserProvider>{children}</UserProvider>
                </Web3Provider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default MainProvider;
