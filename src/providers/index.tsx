import { UserProvider } from "./UserProvider";
import { Web3Provider } from "./Web3Provider";

const MainProvider: React.FC = function ({ children }) {
    return (
        <Web3Provider>
            <UserProvider>{children}</UserProvider>
        </Web3Provider>
    );
};

export default MainProvider;
