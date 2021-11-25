import React, { Component } from 'react';
import List from './List.js';
import Add from './Add.js';
import Data from './Data.js';
import './App.css';
import Transfer from './Transfer.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Buttton} from 'react-bootstrap';



class Account extends Component {
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
                    <div class="account-style">
                        <Add pushParts={ this.props.pushParts } pushCredentials={ this.props.pushCredentials } />
                        <Nav className="mr-auto">
                          <Nav.Link as={Link} to={"/data"} class="w3-bar-item w3-button"><u>My Blockchain Data</u></Nav.Link>
                        </Nav>
                        <Routes>
                            <Route path="/data" element={<Data /> } loading={ this.props.loading } list={ this.props.list } credentials_list={ this.props.credentials_list } />
                        </Routes>
                    </div>

                    <div class="account-list">
                        <h4>Automobile Inventory: ( {this.props.count - 1} ) available</h4>
                        <List list={ this.props.list } credentials_list={ this.props.credentials_list } />                      
                    
                    </div>


                </div>
            )
        }
    }
}

export default Account;
