import { ThemeProvider } from "./ThemeProvider";
import { UserProvider } from "./UserProvider";
import { Web3Provider } from "./Web3Provider";

const MainProvider: React.FC = function ({ children }) {
    return (
        <ThemeProvider>
            <Web3Provider>
                <UserProvider>{children}</UserProvider>
            </Web3Provider>
        </ThemeProvider>
    );
};

export default MainProvider;
