const MyContract = artifacts.require("MyContract");

module.exports = function (deployer) {
    deployer.deploy(MyContract,{ gas: 500000000 }, "Hello, world!");
};
