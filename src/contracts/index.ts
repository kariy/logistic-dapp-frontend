const courierAbi = require("./CourierCompany.json");
const containerAbi = require("./ContainerCompany.json");

export const contracts = {
    container: {
        address: "0x8f4f57f3f7d4f148Db6B7570FfeF583B822bBa14",
        abi: containerAbi,
    },
    courier: {
        address: "0xF68C11a836F99Ec9E463520b72De445A74E25011",
        abi: courierAbi,
    },
};
