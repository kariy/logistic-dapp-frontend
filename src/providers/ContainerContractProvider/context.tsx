import { createContext, useContext } from "react";

type TContext = {
    container: any;
    courier: any;
};

export const ContractContext = createContext<TContext | undefined>(undefined);

export function useContract() {
    return useContext(ContractContext);
}
