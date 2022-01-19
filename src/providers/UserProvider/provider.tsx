import { useEffect, useState } from "react";
import { UserContext } from ".";
import { useWeb3 } from "../Web3Provider";

export const UserProvider: React.FC = function ({ children }) {
    const [user, setUser] = useState<string | null>(null);
    const web3 = useWeb3();

    useEffect(() => {
        web3?.eth.getAccounts().then((accounts) => {
            setUser(accounts[0] ? accounts[0] : null);
        });

        window.ethereum.on("accountsChanged", function (accounts: string[]) {
            setUser(accounts[0] ? accounts[0] : null);
        });
    }, [web3]);

    return (
        <UserContext.Provider
            value={{
                address: user,
                set: setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
