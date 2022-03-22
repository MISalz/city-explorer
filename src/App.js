import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: []
    }
  }
  handleSearch = async (event) => {
    //prevents default refresh
    event.preventDefault();
    //get the data from the API
    let searchRequest = await axios.get('https://swapi.dev/api/people/?page=1');
    //save that date into state
    this.setState({
      searchData: searchRequest.data.results
    })
    console.log(this.state)
  }
  render() {
    let searchListItems = this.state.searchData.map((character,idx) => {
      return<li key={idx}>{character.name}</li>
    })
    return (
      <>
        <header>
          <h1>CityExplorer</h1>
        </header>
        <form>
          <input></input>
          <button onClick={this.handleSearch}>
            Explore
          </button>
        </form>
        <ul>
          {searchListItems}
        </ul>
      </>
    )
  }
}
export default App;