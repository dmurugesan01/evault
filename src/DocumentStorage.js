import web3 from './web3';
import DocumentStorage from './build/contracts/DocumentStorage.json';

const instance = new web3.eth.Contract(
  DocumentStorage.abi,
  '0xdddD57E31D1eD938F798E52923F0F1FdDf6A0aF8'
);

export default instance;
