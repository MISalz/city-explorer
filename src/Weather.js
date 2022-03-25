import React from 'react';
import App from './App';

class Weather extends React.Component {

  render() {
    let forecast = [];
    this.props.data.forEach((weather) => {
      forecast.push(
        <App
        lat= {this.state.searchData.lat}
        lon= {this.state.searchData.lon}
        />
      )
    })
    return (
      <>
        <p>{`City: ${this.state.searchData.display_name}`}</p>
        <p>{`Lat: ${this.state.searchData.lat} Lon: ${this.state.searchData.lon}`}</p>
      </>
    )
  }
}
export default Weather;