import React, { Component } from 'react';

import data from '../../../data2';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { GOOGLE_MAPS_API_KEY } = process.env;
    const restaurant = data.businesses[1];
    const rL = restaurant.location;
    const query = rL.display_address;

    return (
      <div style={{ width: "500px", height: "500px" }}>
        <iframe
          frameBorder="0"
          style={{ border: "0", width: "100%", height: "100%" }}
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`}>
        </iframe>
      </div>
    );
  }
}

export default App;
