import styled from "styled-components";
import { useUser } from "../../providers/UserProvider";
import { useWeb3 } from "../../providers/Web3Provider";

const Button = styled.button`
    font-weight: 600;
`;

interface Props {
    className?: string;
}

export default function ConnectWalletButton({ className }: Props) {
    const web3 = useWeb3();
    const user = useUser();

    const handleOnClick = function () {
        web3?.eth.requestAccounts().then((accounts) => user?.set(accounts[0]));
    };

    return (
        <Button className={className} onClick={handleOnClick}>
            Connect wallet
            {/* <img id="button-icon" src="/icons/ethereum.png" /> */}
        </Button>
    );
}
