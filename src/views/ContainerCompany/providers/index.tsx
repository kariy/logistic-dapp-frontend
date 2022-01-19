import React from "react";
import { ContainerContractProvider } from "./ContainerContractProvider";

const ContainerAppProvider: React.FC = function ({ children }) {
    return <ContainerContractProvider>{children}</ContainerContractProvider>;
};

export default ContainerAppProvider;
