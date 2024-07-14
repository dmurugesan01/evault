// const HdWalletProvider = require("@truffle/hdwallet-provider");

// const infuraProjectId = 'e49e9024f3074929b0da753dc18724ac' ;
// const privatekey = '48822d15296bb105ebaff492fede8e05ecbb453010a0ac810784d253ea323efe'

module.exports = {
  networks: {
    // mainnet:{
    //   provider: () => new HdWalletProvider({privateKeys: [privatekey],providerOrUrl: `https://mainnet.infura.io/v3/${infuraProjectId}`, pollingInterval: 12000}),
    //   gas: 6721975,
    //   network_id:1,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    // },
    // goerli: {
    //       provider: () => new HdWalletProvider(privatekey, `https://goerli.infura.io/v3/${infuraProjectId}`),
    //       network_id: 5,
    //       // gas: 5500000,        // Gas limit
    //       confirmations: 2,    // # of confirmations to wait between deployments
    //       timeoutBlocks: 200,  // # of blocks before a deployment times out
    //       skipDryRun: true     // Skip dry run before migrations
    //   },
      // sepolia: {
      //       provider: () => new HdWalletProvider({privateKeys: [privatekey], providerOrUrl: `https://sepolia.infura.io/v3/${infuraProjectId}`, pollingInterval: 12000}),
      //       network_id: 11155111, // Sepolia's id
      //       // gas: 5500000,         // Gas limit
      //       confirmations: 2,     // # of confirmations to wait between deployments
      //       timeoutBlocks: 200,   // # of blocks before a deployment times out
      //       skipDryRun: true      // Skip dry run before migrations
      //   },
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
  solidityLog: {
    displayPrefix: " :"
  }
};
