import React from 'react';


class Weather extends React.Component {


  render() {

    return (
      <>
        <p>
            {`Forecast: ${this.props.searchWeather}`}
            </p> 
      </>
    )
  }
}
export default Weather;