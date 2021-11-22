import React, { Component } from 'react';
import Web3 from 'web3';
import DappContract from '../abis/DappToken.json';
import App from './App.js'

let current_account;

// class Web3_Client extends App {
// 	constructor(props) {
// 		super(props)
// 	}
// }

export const init = async () => {
	// let provider = window.ethereum;
 //    const web3 = new Web3(provider);
 //    window.web3 = new Web3(provider);

 //    window.ethereum.on('accountsChanged', function(accounts) {
 //      current_account = accounts[0]
 //      console.log("Selected account is ", current_account);
 //    })

 //    const network_id = await web3.eth.net.getId();

 //    const dappToken = new web3.eth.Contract(DappContract.abi, "0x2052Ac7903d18343A77B9aE6a64F703026529f05");

 //    const balance = await dappToken.methods.balanceOf(super.getState("account")).call()
 //    super.setState({ balance: balance.toString() })
};
