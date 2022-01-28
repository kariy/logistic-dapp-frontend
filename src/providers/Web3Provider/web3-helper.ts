export function checkWeb3() {
    return typeof window.ethereum !== "undefined" ? true : false;
}

export function getChainName(id: number | string) {
    switch (Number(id)) {
        default:
            return "Unknown network";
        case 1:
            return "Ethereum mainnet";
        case 3:
            return "Ropsten testnet";
        case 4:
            return "Rinkeby testnet";
        case 5:
            return "Goerli testnet";
        case 42:
            return "Kovan testnet";
        case 56:
            return "Binance Smart Chain mainnet";
        case 137:
            return "Polygon mainnet";
        case 43114:
            return "Avalanche mainnet";
    }
}
