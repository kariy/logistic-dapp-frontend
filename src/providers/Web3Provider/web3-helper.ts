export function checkWeb3() {
    return typeof window.ethereum !== "undefined" ? true : false;
}
