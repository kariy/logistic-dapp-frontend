import styled from "styled-components";
import ConnectWalletButton from "./ConnectWalletButton";

const Container = styled.div``;

function ConnectWallet() {
    return (
        <Container>
            Connect a wallet
            <ConnectWalletButton />
        </Container>
    );
}

export default ConnectWallet;
