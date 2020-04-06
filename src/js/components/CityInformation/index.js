import CityInformation from './cityinfo';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
  return {
    name: store.search.name,
    lat: store.search.lat,
    lon: store.search.lon,
    temp: store.search.temp,
    pressure: store.search.pressure,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    humidity: store.search.humidity,
    windSpeed: store.search.windSpeed
  }
}

export default connect(mapStoreToProps)(CityInformation);