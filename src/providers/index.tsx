import { QueryClient, QueryClientProvider } from "react-query";
import { ContractProvider } from "./ContractProvider";

import { ThemeProvider } from "./ThemeProvider";
import { UserProvider } from "./UserProvider";
import { Web3Provider } from "./Web3Provider";

const MainProvider: React.FC = function ({ children }) {
    return (
        <ThemeProvider>
            <QueryClientProvider client={new QueryClient()}>
                <Web3Provider>
                    <ContractProvider>
                        <UserProvider>{children}</UserProvider>
                    </ContractProvider>
                </Web3Provider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default MainProvider;
