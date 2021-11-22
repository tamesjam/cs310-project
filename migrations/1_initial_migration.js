const Migrations = artifacts.require("Migrations");
const DappToken = artifacts.require("DappToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DappToken);
};
