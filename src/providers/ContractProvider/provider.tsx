import { ContractContext } from ".";
import { contracts } from "../../contracts";
import { useWeb3 } from "../Web3Provider";

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
        courier: new web3.eth.Contract(
            contracts.courier.abi,
            contracts.courier.address
        ),
        container: new web3.eth.Contract(
            contracts.container.abi,
            contracts.container.address
        ),
    };
}
