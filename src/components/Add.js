import React, { Component } from 'react';
import './App.css';

class Add extends Component {
  render() {

    return (
          <form onSubmit={(event) => {
            event.preventDefault()

            this.props.pushParts(this.car_name.value, this.door_model.value, this.wheel_model.value, this.wheel_size.value, this.tyre_model.value, this.tyre_size.value, this.paint_colour.value);
            console.log("Submitted");
            console.log(this.insurance_history.value, this.tax_history.value);

            console.log(this.dealership_address.value);
            console.log(this.customer_address.value);
            this.props.pushCredentials("", this.dealership_address.value, this.customer_address.value, this.insurance_history.value, this.tax_history.value);
          }}>
            <h4>Add parts to the blockchain</h4>

            <div class="add_style">
              <h6>Automobile parts</h6>
              <input class="form-control input-lg" id="car_name" ref={(input) => {this.car_name = input }} placeholder="Add car brand" required>
              </input>

              <input class="form-control input-lg" id="door_model" ref={(input) => {this.door_model = input }} placeholder="Add door model" required>
              </input>

              <input class="form-control input-lg" id="wheel_model" ref={(input) => {this.wheel_model = input }} placeholder="Add wheel model" required>
              </input>

              <input class="form-control input-lg" id="wheel_size" ref={(input) => {this.wheel_size = input }} min="10" placeholder="Add wheel size" required>
              </input>

              <input class="form-control input-lg" id="tyre_model" ref={(input) => {this.tyre_model = input }} placeholder="Add tyre model" required>
              </input>

              <input class="form-control input-lg" id="tyre_size" ref={(input) => {this.tyre_size = input }} placeholder="Add tyre size" required>
              </input>

              <input class="form-control input-lg" id="paint_colour" ref={(input) => {this.paint_colour = input }} placeholder="Add paint colour" required>
              </input>
              <br></br>
              <h6>Recipient Addresses</h6>
              <input class="form-control input-lg" id="dealership_address" ref={(input) => {this.dealership_address = input }} placeholder="Designated dealership address (optional)">
              </input>

              <input class="form-control input-lg" id="customer_address" ref={(input) => {this.customer_address = input }} placeholder="Designated customer address (optional)">
              </input>
              <br></br>
              <h6>Automobile History</h6>
              <input class="form-control input-lg" id="insurance_history" ref={(input) => {this.insurance_history = input }} placeholder="Add insurance history (optional)">
              </input>
              <input class="form-control input-lg" id="tax_history" ref={(input) => {this.tax_history = input }} placeholder="Add tax history (optional)">
              </input>
            </div>
            <br></br>

            <span class="input-group-btn">
              <button class="btn btn-primary btn-lg">Submit</button>
            </span>

          </form>
    );
  }
}

export default Add;