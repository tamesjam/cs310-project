import React, { Component } from 'react';
import ListTransfer from './ListTransfer.js';
import List from './List.js';
import './App.css';


class Transfer extends Component {
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
                        <ListTransfer />
                    </div>

                    <div class="account-list">"
                        <h4>List of vehicle details: ( {this.props.count - 1} ) available</h4>
                        <div class="list_underline"/>
                        <List list={ this.props.list } credentials_list={ this.props.credentials_list } />                      
                    
                    </div>
                </div>
            )
        }
    }
}

export default Transfer;