import React from 'react';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';
import SearchBar from './components/SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron'>
          <h1 className='mb-3'>SDCS Weather Application</h1>
          <h6>Always know if you'll need an umbrella!</h6>
        </div>
        <SearchBar/>
        <div className='row'>
          <div className='col-6'>
            <CityInformation/>
          </div>
          <div className='col-6'>
            <SearchHistory/>
          </div>
        </div>
      </div>
    );
  }
}
