import hederaTokens from '../assets/tokens.json';

const tokens = [{
    symbol: 'Venom',
    decimals: 9,
    address: '0:2c3a2ff6443af741ce653ae4ef2c85c2d52a9df84944bbe14d702c3131da3f14'
  },];


// Utility function to get the decimals for a given token
export function getAmountWithDecimal(amount, tokenSymbol) {
  const token = tokens.find((t) => t.symbol === tokenSymbol);
  return token ? amount / (10 ** token.decimals) : amount;
}


// Utility function to get the address for a given token
export function getAddressForToken(tokenSymbol) {
  const token = tokens.find((t) => t.symbol === tokenSymbol);
  return token ? token.address : 1;
}

export function retrieveToken(tokenId) {

  const htoken = hederaTokens.find(t => tokenId == t.id);
  return htoken;


}

export function retrieveImage(tokenSymbol) {

  const htoken = hederaTokens.find(t => tokenSymbol == t.id);


  if (htoken && htoken.icon) {
    return 'https://www.saucerswap.finance/' + htoken.icon;
  } else {
    return false
  }


}
