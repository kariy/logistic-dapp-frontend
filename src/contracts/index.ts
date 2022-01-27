const courierAbi = require("./CourierCompany.json");
const containerAbi = require("./ContainerCompany.json");

export const contracts = {
    container: {
        address: process.env.REACT_APP_CONTAINER_CONTRACT,
        abi: containerAbi,
    },
    courier: {
        address: process.env.REACT_APP_COURIER_CONTRACT,
        abi: courierAbi,
    },
};
