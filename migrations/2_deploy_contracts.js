/*var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};*/

//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var Voting = artifacts.require("./ProofOfPhone.sol");
var ProofOfPhone = artifacts.require("./ProofOfPhone.sol");
module.exports = function(deployer) {
	//deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, Voting);
  //deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {gas: 1000000});
	deployer.deploy(ProofOfPhone, {gas: 1000000});
};
/* As you can see above, the deployer expects the first argument to   be the name of the contract followed by constructor arguments. In our case, there is only one argument which is an array of
candidates. The third argument is a hash where we specify the gas required to deploy our code. The gas amount varies depending on the size of your contract. For the Voting contract, 290000 was
sufficient.
*/
