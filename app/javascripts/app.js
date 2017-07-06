
// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';

import proof_of_phone from '../../build/contracts/ProofOfPhone.json';
var ProofOfPhone = contract(proof_of_phone);
var token = 'c4c2bea283ba80cd8b9f6a087f7310bf';
var smartcontract_address = '0x97e7ba07792f6d37851ff587a23f69a6d44cf676';

window.submitVerifly = function()
{
	$("#submit").remove();	
	$("#content").append('<input type="text" id="code" /><label>Code</label>');
	$("#footer").append('<a href="#" onclick="activatePairPhoneAddress()" class="btn btn-primary" id="active" ="">Verify</a>');
}


window.activatePairPhoneAddress = function() {
	//ProofOfPhone.setProvider(web3.currentProvider);
	//console.log(web3.eth.accounts[0]);
	let phone = $("#phone").val();
	let code = $("#code").val();
	if (code == '123456')
	{
		try {
			ProofOfPhone.setProvider(web3.currentProvider);
			ProofOfPhone.at(smartcontract_address).then(function(contractInstance){
		
			contractInstance.newToken(phone, token,  {gas: 1400000, from: web3.eth.accounts[0]}).then(function(v){
				console.log(v);
				return false;
			});
			contractInstance.activatePair(token,  {gas: 1400000, from: web3.eth.accounts[0]}).then(function(v){
				console.log(v);
				return false;
			});
			});
		} 
		catch (err)
		{
			console.log(err);
		}
	}
	else
	{
		$("#error").append("wrong code");
	}
	
}


$( document ).ready(function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  //ProofOfPhone.setProvider(web3.currentProvider);
});
