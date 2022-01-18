import { ethers } from "ethers";
import { createContext, useContext } from "react";

type TWeb3Context = {
    ethereum: any;
    provider: ethers.providers.Web3Provider;
    signer: ethers.providers.JsonRpcSigner;
    getAccounts: any;
};

export const Web3Context = createContext<TWeb3Context | undefined>(undefined);

export function useWeb3() {
    return useContext(Web3Context);
}
