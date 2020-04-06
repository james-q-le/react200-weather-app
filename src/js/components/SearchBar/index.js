import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    name: store.search.name,
    lat: store.search.lat,
    long: store.search.long,
    temp: store.search.temp,
    pressure: store.search.pressure,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    humidity: store.search.humidity,
    windSpeed: store.search.windSpeed
  }
}

export default connect(mapStoreToProps)(SearchBar);