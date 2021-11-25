import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';
import List from './List.js';
import NavigationBar from './NavigationBar.js';
// import DappToken from '../abis/DappToken.json';
var Contract = require('web3-eth-contract');
Contract.setProvider('ws://localhost:3000');

let web3;

class App extends Component {

  async componentWillMount() {
    // init();
    // let current_account;
    // let provider = window.ethereum;
    // window.web3 = new Web3(provider);

    // if(typeof window.ethereum !== 'undefined') {
    //   web3 = new Web3(provider);
    //   await window.ethereum.enable();
    // }
    this.loadBlockchainData();

  }

  async loadBlockchainData() {
      // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    web3 = new Web3(window.ethereum);
    var self = this;
    var owned_cars = 0;
    
    // Set Account
    window.ethereum.on('accountsChanged', function (accounts) {
      web3.eth.defaultAccount = accounts[0];
      console.log(web3.eth.defaultAccount);
      self.setState({ account: web3.eth.defaultAccount });

      // Set balance for this account
      // var balance = await web3.eth.getBalance(this.state.account) / 10**18;
      // this.setState({ balance: balance });
    })

    // const accounts = await web3.eth.getAccounts();
    // web3.eth.defaultAccount = accounts[0];
    // console.log(web3.eth.defaultAccount);
    // this.setState({ account: accounts[0] });

    // const accounts = await web3.eth.getAccounts();
    // web3.eth.defaultAccount = accounts[0];
    // this.setState({ account: this.state.account });


    // // Set balance for this account
    var balance = await web3.eth.getBalance(this.state.account) / 10**18;
    this.setState({ balance: balance });

    // Set the state to the smart contract we have designed - AutoBit
    var autoBit = new web3.eth.Contract(this.state.contractAbi, this.state.contractAddress);
    autoBit.options.address = this.state.contactAddress;
    this.setState({ autoBit });

    // Interacting + fetching the relevant details from the smart contract
    const total_count = await autoBit.methods.getCount().call();
    this.setState({ count: total_count });
    for(var i = 1; i <= total_count; i++) {
      const list_data = await autoBit.methods.parts_mapping(i).call();
      const credentials_data = await autoBit.methods.creds_mapping(i).call();
      const insurance_array = await autoBit.methods.getInsuranceArray(i).call();
      console.log(insurance_array);
      if(list_data.wheel_size != 0) {
        this.setState({
          list: [...this.state.list, list_data],
          credentials_list: [...this.state.credentials_list, insurance_array]
        });
        if(insurance_array.manufacturer.toString() == this.state.account) {
          this.setState({ 
            owned_parts: [...this.state.owned_parts, list_data],
            owned_credentials: [...this.state.owned_credentials, insurance_array]
          });
          this.setState({ owned_count: ++owned_cars });
        }
      }
    }

    this.setState({ loading: false });
  }

  async changedAccount() {
    const ethereum = window.ethereum;
    var current_account;
    if(ethereum) {
      window.ethereum.on('accountsChanged', function(accounts) {
          console.log(accounts[0]);
          current_account = accounts[0];
      });
      console.log(current_account);
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x7a044b7743f4fEFDae4B7e03542F3808DE583D85',
      contractAbi: [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"creds_array_mapping","outputs":[{"name":"id","type":"uint256"},{"name":"manufacturer","type":"string"},{"name":"dealership","type":"string"},{"name":"customer","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"parts_mapping","outputs":[{"name":"id","type":"uint256"},{"name":"car_name","type":"string"},{"name":"door_model","type":"string"},{"name":"wheel_model","type":"string"},{"name":"wheel_size","type":"uint256"},{"name":"tyre_model","type":"string"},{"name":"tyre_size","type":"uint256"},{"name":"paint_colour","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"tax","type":"string"}],"name":"pushTaxHistory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_car_name","type":"string"},{"name":"_door_model","type":"string"},{"name":"_wheel_model","type":"string"},{"name":"_wheel_size","type":"uint256"},{"name":"_tyre_model","type":"string"},{"name":"_tyre_size","type":"uint256"},{"name":"_paint_colour","type":"string"}],"name":"pushParts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"transaction_mapping","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"incrementVehicleID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVehicleID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user_address","type":"address"}],"name":"getTransaction","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getInsuranceArray","outputs":[{"components":[{"name":"id","type":"uint256"},{"name":"manufacturer","type":"string"},{"name":"dealership","type":"string"},{"name":"customer","type":"string"},{"name":"insurance_history","type":"string[]"},{"name":"tax_history","type":"string[]"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"creds_mapping","outputs":[{"name":"id","type":"uint256"},{"name":"manufacturer","type":"string"},{"name":"dealership","type":"string"},{"name":"customer","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_manufacturer","type":"string"},{"name":"_dealer","type":"string"},{"name":"_customer","type":"string"},{"name":"_insurance_history","type":"string"},{"name":"_tax_history","type":"string"}],"name":"pushCredentials","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user_address","type":"address"},{"name":"transaction_address","type":"address"}],"name":"setTransaction","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"insurance","type":"string"}],"name":"pushInsuranceHistory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"manufacturer","type":"string"},{"indexed":false,"name":"dealership","type":"string"},{"indexed":false,"name":"customer","type":"string"},{"indexed":false,"name":"insurance_history","type":"string[]"},{"indexed":false,"name":"tax_history","type":"string[]"}],"name":"CredentialsCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"vehicle_id","type":"uint256"},{"indexed":false,"name":"_car_name","type":"string"},{"indexed":false,"name":"_door_model","type":"string"},{"indexed":false,"name":"_wheel_model","type":"string"},{"indexed":false,"name":"_wheel_size","type":"uint256"},{"indexed":false,"name":"_tyre_model","type":"string"},{"indexed":false,"name":"_tyre_size","type":"uint256"},{"indexed":false,"name":"_paint_colour","type":"string"}],"name":"PartsCreated","type":"event"}],
      contactAddress: '0x503205d060E65d8AE8096540D0905295dA9b1781',
      balance: 0,
      networkId: 5777,
      count: 0,
      loading: true,
      list: [],
      credentials_list: [],
      owned_parts: [],
      owned_credentials: [],
      owned_count: 0
    }

    this.pushParts = this.pushParts.bind(this);
    this.pushCredentials = this.pushCredentials.bind(this);
  }

  transfer(recipient, amount) {
    // this.state.dappToken.methods.transfer(recipient, amount).send({ from: this.state.account })
    web3.eth.sendTransaction({to: recipient, from: this.state.account, value: amount});
  }

  pushParts(car_name, door_model, wheel_model, wheel_size, tyre_model, tyre_size, paint_colour) {
    this.setState({ loading: true });
    this.state.autoBit.methods.pushParts(car_name, door_model, wheel_model, wheel_size, tyre_model, tyre_size, paint_colour).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false });
        console.log(receipt)
      });
  }

  pushCredentials(manufacturer, dealership, customer, insurance_history, tax_history) {
    var manufacturer = this.state.account;

    this.setState({ loading: true });
    this.state.autoBit.methods.pushCredentials(manufacturer.toString(), dealership, customer, insurance_history, tax_history).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false });
        console.log(receipt);
        window.location.reload();
      });
  }

  render() {
    return (
      <NavigationBar loading={ this.state.loading } balance={ this.state.balance } account={ this.state.account } list={ this.state.list } credentials_list={ this.state.credentials_list } 
              owned_parts = { this.state.owned_parts } owned_credentials = { this.state.owned_credentials } owned_count={ this.state.owned_count } pushParts={ this.pushParts } pushCredentials={ this.pushCredentials } count={ this.state.count } >
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto" style={{paddingTop: 8 + 'em'}}>
                  
                  { this.state.loading ? <div id="loader" className="text-center">
                    <p className="text-center"> Loading...</p>
                  </div> : 
                    <div id="content" style={{width: 500 + 'px'}}>
                      <div class="popuptext" id="myPopup" hidden>Transaction successful! ☑️</div>
                      
                    </div>
                  }
              </div>
            </main>
          </div>
        </div>
      </NavigationBar>
    );
  }
}

export default App;
