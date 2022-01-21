import { ContractContext } from ".";
import { useWeb3 } from "../Web3Provider";

const courierAddr = "0x0CDe3E1459DCD4d6915960D4b3D9CC00D065D9Ea";
const courierAbi = require("../../../abi/ContainerCompany.json");

const containerAddr = "0x0CDe3E1459DCD4d6915960D4b3D9CC00D065D9Ea";
const containerAbi = require("../../../abi/ContainerCompany.json");

export const ContractProvider: React.FC = function ({ children }) {
    const web3 = useWeb3();

    if (web3 === undefined) return <>{children}</>;

    const courier = new web3.eth.Contract(courierAbi, courierAddr);
    const container = new web3.eth.Contract(containerAbi, containerAddr);

    return (
        <ContractContext.Provider value={{ container, courier }}>
            {children}
        </ContractContext.Provider>
    );
};
