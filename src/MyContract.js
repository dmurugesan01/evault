import web3 from './web3';
import MyContract from './build/contracts/MyContract.json';

const instance = new web3.eth.Contract(
  MyContract.abi,
  '0x4F7024eBf18eFF535ce4790604C6cab5c03f20FA'
);

export default instance;