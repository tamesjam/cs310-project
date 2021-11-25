import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Buttton} from 'react-bootstrap';
import React, { Component } from 'react';
import List from './List.js';
import Add from './Add.js';
import Account from './Account.js';
import './App.css';
import Transfer from './Transfer.js';
import MyList from './MyList.js';



class Data extends Component {
    render() {
        if(this.props.loading == true) {
            return (
                <div id="loader" className="text-center" style={{height: 400 + 'px; '}}>
                    <p className="text-center"> Loading...</p>
                </div>
            )
        }else {
            return (
                <div class ="content-flex">
                    <h2>Owned transactions</h2>
                    <div class="account-list">
                        <h4>Automobile Inventory: ( {this.props.owned_count} ) available</h4>
                        <MyList owned_parts={ this.props.owned_parts } owned_credentials={ this.props.owned_credentials } />                      
                    </div>
                </div>
            )
        }
    }
}

export default Data;
