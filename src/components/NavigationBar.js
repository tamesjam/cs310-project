import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Buttton} from 'react-bootstrap';
import Login from './Login.js';
import Home from './Home.js';
import Account from './Account.js';
import Transfer from './Transfer.js';
import Data from './Data.js';

class NavigationBar extends Component {
  render() {
    return(
      <Router>
        <div class="w3-top">
          <div class="w3-bar w3-white w3-card" id="myNavbar">
            <a href="/" class="w3-bar-item w3-button">{this.props.account.toString()}</a>
            <a href="#home" class="w3-bar-item w3-button">Balance: {Math.round((this.props.balance + Number.EPSILON) * 100) / 100} AutoBits</a>

            <div class="w3-right w3-hide-small">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/register"} class="w3-bar-item w3-button">Register</Nav.Link>
              <Nav.Link as={Link} to={"/login"} class="w3-bar-item w3-button">Login</Nav.Link>
              <Nav.Link as={Link} to={"/account"} class="w3-bar-item w3-button">Account</Nav.Link>
              <Nav.Link as={Link} to={"/transfer"} class="w3-bar-item w3-button">Transfer</Nav.Link>
              <Nav.Link as={Link} to={"/data"} class="w3-bar-item w3-button">Transactions</Nav.Link>
              <Nav.Link as={Link} to={"/contact"} class="w3-bar-item w3-button">Contact</Nav.Link>
            </Nav>
            </div>

            <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
        </div>
        <Routes>
          <Route path="/" name="Home" element={<Home /> } />
          <Route path="/login" element={<Login/> } loading={this.props.loading } />
          <Route path="/account" element={<Account list={ this.props.list } credentials_list={ this.props.credentials_list } 
            pushParts={ this.props.pushParts } pushCredentials={ this.props.pushCredentials } count={ this.props.count } loading={this.props.loading } /> } />
          <Route path="/transfer" element={<Transfer list={ this.props.list } credentials_list={ this.props.credentials_list } 
            pushParts={ this.props.pushParts } pushCredentials={ this.props.pushCredentials } count={this.props.count} loading={this.props.loading }/> } />
          <Route path="/data" element={<Data loading={this.props.loading } list={ this.props.list } credentials_list={ this.props.credentials_list } 
            owned_parts={ this.props.owned_parts } owned_credentials={ this.props.owned_credentials } owned_count={ this.props.owned_count }/> } />
        </Routes>
      </Router>
    )
  }
}

export default NavigationBar;