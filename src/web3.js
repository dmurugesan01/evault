import Web3 from 'web3';
// import HDWalletProvider from '@truffle/hdwallet-provider';

// const infuraProjectId = 'e49e9024f3074929b0da753dc18724ac' ;
// const privatekey = '48822d15296bb105ebaff492fede8e05ecbb453010a0ac810784d253ea323efe'

// const provider = new HDWalletProvider({privateKeys: privatekey, providerOrUrl: `https://mainnet.infura.io/v3/${infuraProjectId}`});
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
export default web3;
