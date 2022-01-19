import { ContainerContractContext } from ".";
import { useWeb3 } from "../../../../providers/Web3Provider";

const address = "0x0CDe3E1459DCD4d6915960D4b3D9CC00D065D9Ea";
const abi = require("../../../abi/ContainerCompany.json");

export const ContainerContractProvider: React.FC = function ({ children }) {
    const web3 = useWeb3();

    if (web3 === undefined) return <>{children}</>;

    const containerContract = new web3.eth.Contract(abi, address);

    return (
        <ContainerContractContext.Provider value={containerContract}>
            {children}
        </ContainerContractContext.Provider>
    );
};
