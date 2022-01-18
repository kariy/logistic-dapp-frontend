import { useEffect, useState } from "react";
import { UserContext } from ".";
import { useWeb3 } from "../Web3Provider";

export const UserProvider: React.FC = function ({ children }) {
    const [user, setUser] = useState<string | null>(null);
    const web3 = useWeb3();

    useEffect(() => {
        web3?.ethereum.on("accountsChanged", function (accounts: any) {
            if (accounts[0]) setUser(accounts[0]);
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
