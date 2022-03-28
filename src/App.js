import React from 'react';
import axios from 'axios';
// import Weather from './Weather'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      error: false,
      errorMessage: ''
    }
  }
  getCityData = async (event) => {
    //prevents default refresh
    event.preventDefault();
    try{
    //get the data from the API
    let searchData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    //save that date into state
    this.setState({searchData: searchData.data[0]})
    console.log(this.state.searchData)
    }catch(error){
      console.log('error', error)
      console.log('error.response', error.response);
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.reponse.status}`
      })
    };
  }

  handleCityInput = (event) => {
    event.preventDefault();
    this.setState({
      city: event.target.value
    })
  
}

  render() {
    return (
      <>
        <header>
          <h1>CityExplorer</h1>
        </header>
        <form onSubmit={this.getCityData}>
          <label>Pick a city! </label>
          <input type="text" onInput={this.handleCityInput}/>
          <button type="submit">
            Explore
          </button>
        </form>

        {/* Error Message handling Ternary statement */}
        {this.state.errorMessage ?
        <p>{this.state.errorMessage}</p>
        :
        <ul>
          <p>{`City: ${this.state.searchData.display_name}`}</p>
          <p>{`Lat: ${this.state.searchData.lat} Lon: ${this.state.searchData.lon}`}</p>
          {/* <Weather>

          </Weather> */}
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.searchData.lat},${this.state.searchData.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|${this.state.searchData.lat},${this.state.searchData.lon}&markers=icon:<icon>|${this.state.searchData.lat},${this.state.searchData.lon}`} alt={this.state.searchData}/>
        </ul>
        }
        
      </>
    )
  }
}
export default App;