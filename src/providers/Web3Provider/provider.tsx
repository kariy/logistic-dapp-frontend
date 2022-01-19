import Web3 from "web3";
import { Web3Context } from ".";

declare global {
    interface Window {
        ethereum: any;
    }
}

export const Web3Provider: React.FC = function ({ children }) {
    const web3 = new Web3(Web3.givenProvider);

    return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
};
