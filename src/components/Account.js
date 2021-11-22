import React, { Component } from 'react';
import List from './List.js';
import './App.css';


class Account extends Component {
    render() {
        return (
            <div class="account-style">
                <List list={ this.props.list } credentials_list={ this.props.credentials_list } 
                pushParts={ this.props.pushParts } pushCredentials={ this.props.pushCredentials } count={this.props.count}/>                      
            </div>
        )
    }
}

export default Account;
