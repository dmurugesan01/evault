const HdWalletProvider = require("@truffle/hdwallet-provider");

const infuraProjectId = 'e49e9024f3074929b0da753dc18724ac' ;
const privatekey = '48822d15296bb105ebaff492fede8e05ecbb453010a0ac810784d253ea323efe'

module.exports = {
  networks: {
    mainnet:{
      provider: () => new HdWalletProvider({privateKeys: [privatekey], providerOrUrl: `https://mainnet.infura.io/v3/${infuraProjectId}`,}),
      network_id: 1,
      gas: 55000000,
      gasPrice: 100000000000
    },
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545,        // Standard Ethereum port (default: none)
      network_id: "*",   // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",  // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
