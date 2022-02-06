import { createContext, useContext } from "react";

type TContext = {
    container: any;
    courier: any;
};

export const ContractContext = createContext<TContext | undefined>(undefined);

type UseContractType = "Container" | "Courier";

export function useContract(type?: UseContractType) {
    const contract = useContext(ContractContext);

    if (type === undefined) return contract;

    return type === "Container" ? contract?.container : contract?.courier;
}
