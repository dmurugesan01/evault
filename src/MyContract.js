import web3 from './web3';
import MyContract from './build/contracts/MyContract.json';

const instance = new web3.eth.Contract(
  MyContract.abi,
  '0x5511a62DFDb3D62d05a8018767BaD9A94456B9E2'
);

export default instance;