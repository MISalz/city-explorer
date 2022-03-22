import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: {}
    }
  }
  getCityData = async (event) => {
    //prevents default refresh
    event.preventDefault();
    //get the data from the API
    let searchData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    //save that date into state
    this.setState({ searchData: searchData.data[0] })
    console.log(this.state.searchData)
  }
  handleCityInput = (event) => {
    event.preventDefault();
    this.setState({
      city: event.target.value
    })
  }

  render() {
    // let searchListItems = this.state.searchData.map((character, idx) => {
    //   return <li key={idx}>{character.name}</li>
    // })
    return (
      <>
        <header>
          <h1>CityExplorer</h1>
        </header>
        <form onSubmit={this.getCityData}>
          <label>Pick a city!</label>
          <input type="text" onInput={this.handleCityInput} />
          <button type="submit">
            Explore
          </button>
        </form>
        <ul>
          {/* {searchListItems} */}
          <li>{this.state.searchData.lat}</li>
          <li>{this.state.searchData.lon}</li>
          <li>{this.state.searchData.display_name}</li>
          <li><img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.searchData.lat},${this.state.searchData.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|${this.state.searchData.lat},${this.state.searchData.lon}&markers=icon:<icon>|${this.state.searchData.lat},${this.state.searchData.lon}`} alt={this.state.searchData} />
          </li>

        </ul>
      </>
    )
  }
}
export default App;