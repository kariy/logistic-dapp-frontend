import { createContext, useContext } from "react";

type TContext = {
    // createContainer: ,
    // addContainerCheckpoint: ,
    // initContainerShipment: ,
};

export const ContainerContractContext = createContext<any | undefined>(
    undefined
);

export function useContainerContract() {
    return useContext(ContainerContractContext);
}
