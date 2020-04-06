import axios from "axios";

export function getWeather(name) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/search/${name}`)
  }
}