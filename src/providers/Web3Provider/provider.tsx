import { ethers } from "ethers";
import { Web3Context } from ".";

declare global {
    interface Window {
        ethereum: any;
    }
}

const ethereum = window.ethereum;
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

const getAccounts = function () {
    return ethereum.request({
        method: "eth_requestAccounts",
    });
};

export const Web3Provider: React.FC = function ({ children }) {
    return (
        <Web3Context.Provider
            value={{
                ethereum: ethereum,
                provider: provider,
                signer: signer,
                getAccounts: getAccounts,
            }}
        >
            {children}
        </Web3Context.Provider>
    );
};
