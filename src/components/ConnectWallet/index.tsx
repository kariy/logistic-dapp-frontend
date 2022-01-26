import styled from "styled-components";
import ConnectWalletButton from "./ConnectWalletButton";

const Container = styled.div`
    padding-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        font-weight: 600;
        margin-bottom: 15px;
    }

    .connect-wallet__button {
        border-radius: ${(props) => props.theme.rounded.lg};
        border: 1px solid ${(props) => props.theme.colors.grey};
        padding: 0.8em 2em;
    }
`;

function ConnectWalletPage() {
    return (
        <Container>
            <ConnectWalletButton className="connect-wallet__button" />
        </Container>
    );
}

export default ConnectWalletPage;
