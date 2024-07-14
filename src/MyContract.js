import web3 from './web3';
import MyContract from './build/contracts/MyContract.json';

const instance = new web3.eth.Contract(
  MyContract.abi,
  '0x7721edF762e85D1f99350bc9741ca14BbDBa7996'
);

export default instance;
