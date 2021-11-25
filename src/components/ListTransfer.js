import React, { Component } from 'react';

class ListTransfer extends Component {
  render() {
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
            <h4>Transfer ownership of block data to recipient</h4>

            <input class="form-control input-lg" id="recipient_address" ref={(input) => {this.recipient_address = input }} placeholder="Recipient Address" required>
            </input>

            <input class="form-control input-lg" id="transaction_address" ref={(input) => {this.transaction_address = input }} placeholder="Transaction block address" required>
            </input>

            <input class="form-control input-lg" id="additional_information" ref={(input) => {this.additional_information = input }} placeholder="Additional information (optional)">
            </input>

            <br></br>

            <span class="input-group-btn">
              <button type="submit" class="btn btn-primary btn-lg" hidden>Submit</button>
            </span>

          </form>
        </div>
    );
  }
}

export default ListTransfer;