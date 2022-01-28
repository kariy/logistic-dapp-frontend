import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";
import { Web3Context } from ".";
import { getChainName } from "./web3-helper";

declare global {
    interface Window {
        ethereum: any;
    }
}

const wrongNetworkToast = (chainId: number | string) =>
    toast.warning(
        `You're on the wrong network (${getChainName(
            chainId
        )}). Please change to Ropsten testnet`,
        {
            autoClose: false,
            position: "top-left",
        }
    );

export const Web3Provider: React.FC = function ({ children }) {
    const web3 = useMemo(() => new Web3(Web3.givenProvider), []);

    useEffect(() => {
        web3.eth
            .getChainId()
            .then((id) => (id !== 3 ? wrongNetworkToast(id) : null));

        web3.eth.givenProvider.on("chainChanged", () =>
            window.location.reload()
        );
    }, [web3]);

    web3.eth.handleRevert = true;

    return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
};
