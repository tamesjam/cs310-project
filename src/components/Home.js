import React, { Component } from 'react';
import './App.css';

class Home extends Component {
	render() {
		return (	
      // null
	      <header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
          <div class="w3-display-left w3-text-white" style={{padding: 48 + 'px'}}>
            <span class="w3-jumbo w3-hide-small">AutoBit.</span><br></br>
            <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span>
            <span class="w3-large">Empowering The Automotive Industry & Bringing Automotive Traders Together.</span>
            <p><a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Get started now</a></p>
          </div> 
          <div class="w3-display-bottomleft w3-text-grey w3-large" style={{padding: 24 + 'px' + ' ' + 48 + 'px'}}>
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity"></i>
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-linkedin w3-hover-opacity"></i>
          </div>
          </header>
		)
	}
}

export default Home;