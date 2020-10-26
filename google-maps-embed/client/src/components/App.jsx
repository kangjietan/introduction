import React, { Component } from 'react';

import data from '../../../data2';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.nextRestaurant = this.nextRestaurant.bind(this);
  }

  nextRestaurant() {
    this.setState((state, props) => ({
      index: state.index + 1
    }));
  }

  render() {
    const { index } = this.state;
    console.log(index);
    const { GOOGLE_MAPS_API_KEY } = process.env;
    const restaurant = data.businesses[index];
    const rL = restaurant.location;
    const query = rL.display_address;

    return (
      <div style={{ width: "500px", height: "500px" }}>
        <iframe
          frameBorder="0"
          style={{ border: "0", width: "100%", height: "100%" }}
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`}>
        </iframe>
        <button onClick={this.nextRestaurant}>Next</button>
      </div>
    );
  }
}

export default App;
