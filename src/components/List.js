import React, { Component } from 'react';

class List extends Component {
  render() {

      const credentials = this.props.credentials_list.map((credentials, key_cred) => {
        if(credentials.manufacturer != "") {
          return (
            <h6 className="content_manufacturer">Man address: {credentials.manufacturer}</h6>
          )
        }
      })

    return (
        <div id="content">
          <form onSubmit={(event) => {
            event.preventDefault()

            this.props.pushParts(this.car_name.value, this.door_model.value, this.wheel_model.value, this.wheel_size.value, this.tyre_model.value, this.tyre_size.value, this.paint_colour.value);
            console.log("Submitted");
            console.log(this.insurance_history.value, this.tax_history.value);

            var popup = document.getElementById("myPopup");
              popup.classList.toggle("show");
            this.props.pushCredentials("", "", "", this.insurance_history.value, this.tax_history.value);
          }}>
            <h4>Add parts to the blockchain</h4>

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

            <input class="form-control input-lg" id="insurance_history" ref={(input) => {this.insurance_history = input }} placeholder="Add insurance history (optional)">
            </input>
            <input class="form-control input-lg" id="tax_history" ref={(input) => {this.tax_history = input }} placeholder="Add tax history (optional)">
            </input>
            <br></br>

            <span class="input-group-btn">
              <button type="submit" class="btn btn-primary btn-lg" hidden>Submit</button>
            </span>

          </form>

          <h4>List of vehicle details: ( {this.props.count - 1} ) available</h4>
            { this.props.list.map((data, key) => {
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

                          {/*{ credentials }*/}

                          <h6 className="content_manufacturer">M-Address: {this.props.credentials_list[key].manufacturer}</h6>
                          <h6 className="content_id">ID: {data.id}</h6>
                          <h6 className="content_car_name"><b>{data.car_name}</b></h6>
                          <h6 className="content_door_model">{data.door_model}</h6>
                          <h6 className="content_wheel_model">{data.wheel_model}</h6>
                          <h6 className="content_wheel_size">Wheel size (in): {data.wheel_size}</h6>
                          <h6 className="content_tyre_model">{data.tyre_model}</h6>
                          <h6 className="content_tyre_size">Tyre size (in): {data.tyre_size}</h6>
                          <h6 className="content_paint_colour">{data.paint_colour}</h6>
                          <div class="line"></div>
                      </label>
                  </div>
                )
            })}
        </div>
    );
  }
}

export default List;