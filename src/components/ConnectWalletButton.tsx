import styled from "styled-components";
import { useUser } from "../providers/UserProvider";
import { useWeb3 } from "../providers/Web3Provider";

const Container = styled.button``;

export default function ConnectWalletButton() {
    const web3 = useWeb3();
    const user = useUser();

    const handleOnClick = function () {
        web3?.getAccounts()
            .then((accounts: any) => {
                if (accounts[0]) user?.set(accounts[0]);
            })
            .catch((err: any) => console.log("Request denied", err));
    };

    return <Container onClick={handleOnClick}>connect wallet</Container>;
}
