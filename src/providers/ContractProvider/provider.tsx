import { ContractContext } from ".";
import { useWeb3 } from "../Web3Provider";

const courierAddr = "0x0CDe3E1459DCD4d6915960D4b3D9CC00D065D9Ea";
const courierAbi = require("../../assets/abi/ContainerCompany.json");

const containerAddr = "0xB5563B2D510A08C0DdeB4a5F993F85D5566dBFf5";
const containerAbi = require("../../assets/abi/ContainerCompany.json");

export const ContractProvider: React.FC = function ({ children }) {
    const web3 = useWeb3();

    if (web3 === undefined) return <>{children}</>;

    return (
        <ContractContext.Provider value={web3 ? getContracts(web3) : undefined}>
            {children}
        </ContractContext.Provider>
    );
};

function getContracts(web3: any) {
    return {
        courier: new web3.eth.Contract(courierAbi, courierAddr),
        container: new web3.eth.Contract(containerAbi, containerAddr),
    };
}
