import React, { Component } from 'react';
import './App.css';

class Login extends Component {
	render() {
		return (
			<div class="login-style">
				<div id="account">
		          <form onSubmit={(event) => {
			            event.preventDefault()
			            this.props.pushParts(this.car_name.value, this.door_model.value, this.wheel_model.value, this.wheel_size.value, this.tyre_model.value, this.tyre_size.value, this.paint_colour.value);
		          }}>
		            <h4>Login</h4>

		            <input type="text" class="form-control input-lg" id="username" ref={(input) => {this.car_name = input }} placeholder="Username" required>
		            </input>

		            <input type="password" class="form-control input-lg" id="password" ref={(input) => {this.door_model = input }} placeholder="Passsword" required>
		            </input>

		            <span class="input-group-btn">
		              <button type="submit" class="btn btn-primary btn-lg" hidden>Submit</button>
		            </span>

		          </form>

		          <form onSubmit={(event) => {
			            event.preventDefault()
			            this.props.pushParts(this.car_name.value, this.door_model.value, this.wheel_model.value, this.wheel_size.value, this.tyre_model.value, this.tyre_size.value, this.paint_colour.value);
		          }}>
		            <br></br><h4>Register</h4>

		            <input type="text" class="form-control input-lg" id="username" ref={(input) => {this.car_name = input }} placeholder="Username" required>
		            </input>

		            <input type="text" class="form-control input-lg" id="address" ref={(input) => {this.car_name = input }} placeholder="Address" required>
		            </input>

		            <input type="password" class="form-control input-lg" id="password" ref={(input) => {this.door_model = input }} placeholder="Passsword" required>
		            </input>

		            <input type="confirm_password" class="form-control input-lg" id="password" ref={(input) => {this.door_model = input }} placeholder="Confirm Password" required>
		            </input>

		            <span class="input-group-btn">
		              <button type="submit" class="btn btn-primary btn-lg" hidden>Submit</button>
		            </span>

		          </form>
		        </div>
		    </div>
       	)
	}
}

export default Login;

