import { createContext, useContext } from "react";
import Web3 from "web3";

export const Web3Context = createContext<Web3 | undefined>(undefined);

export function useWeb3() {
    return useContext(Web3Context);
}
