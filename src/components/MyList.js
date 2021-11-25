import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'react-bootstrap';
import './App.css';

class MyList extends Component {
  render() {
    return (
        <div class="content">
          <ul id="vehicleList" className="list_unstyled">
            { this.props.owned_parts.map((data, key) => {
                return(
                  <div className="checkbox" key={key}>
                      <label>
                          <input 
                            type="checkbox" 
                            name= {data.id} 
                            ref={(input) => {this.checkbox = input }}
                            onClick={(event) => {
                              console.log("ID: ", this.checkbox);
                            }}
                          />

                          <h9 className="content_manufacturer">M-Address: {this.props.owned_credentials[key].manufacturer}</h9>
                          <br></br>
                          <h9 className="content_manufacturer">D-Address: {this.props.owned_credentials[key].dealership}</h9>
                          <br></br>
                          <h9 className="content_manufacturer">C-Address: {this.props.owned_credentials[key].customer}</h9>
                          <br></br>
                          <h6 className="content_id">ID: {data.id}</h6>
                          <h6 className="content_car_name"><b>{data.car_name}</b></h6>
                          <h6 className="content_door_model">{data.door_model}</h6>
                          <h6 className="content_wheel_model">{data.wheel_model}</h6>
                          <h6 className="content_wheel_size">Wheel size (in): {data.wheel_size}</h6>
                          <h6 className="content_tyre_model">{data.tyre_model}</h6>
                          <h6 className="content_tyre_size">Tyre size (in): {data.tyre_size}</h6>
                          <h6 className="content_paint_colour">{data.paint_colour}</h6>
                          <br></br>

                          <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                              Insurance History ({this.props.owned_credentials[key].insurance_history.length - 1})
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            { this.props.owned_credentials[key].insurance_history.map((data2, key) => {
                                  return(
                                    <h6 className="insurance_history">{data2}</h6>
                                  )
                                })
                              }
                            </Dropdown.Menu>
                          </Dropdown>

                          <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                              Tax History ({this.props.owned_credentials[key].tax_history.length - 1})
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            { this.props.owned_credentials[key].tax_history.map((data2, key) => {
                                  return(
                                    <h6 className="tax_history">{data2}</h6>
                                  )
                                })
                              }
                            </Dropdown.Menu>
                          </Dropdown>

                          <div class="line"></div>
                      </label>
                  </div>
                )
            })}

          </ul>
        </div>
    );
  }
}

export default MyList;