import web3 from './web3';
import MyContract from './build/contracts/MyContract.json';

const instance = new web3.eth.Contract(
  MyContract.abi,
  '0x1BB85500214E83307924A5bEFf8a753d58cf4377'
);

export default instance;