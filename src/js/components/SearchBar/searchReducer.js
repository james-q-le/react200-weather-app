const defaultState = {
 name: '',
 lat: '',
 lon: '',
 temp: '',
 pressure: '',
 lowestTemp: '',
 highestTemp: '',
 humidity: '',
 windSpeed: '',
 history: [],
 sendingRequest: false,
 error: false
};

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;


  switch(type) {
    case 'GET_WEATHER_PENDING': {
      return {
        ...state,
        sendingRequest: true
      }
    }
    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        name: payload.data.name,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp + 'F',
        pressure: payload.data.main.pressure,
        lowestTemp: payload.data.main.temp_min + 'F',
        highestTemp: payload.data.main.temp_max + 'F',
        humidity: payload.data.main.humidity + '%',
        windSpeed: payload.data.wind.speed + 'mph',
        history: [
          ...state.history,
          {
            name: payload.data.name,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }
        ]
      }
    }
    case 'GET_WEATHER_REJECTED':
      return {
        ...state,
        error: true
      }
    
    default: {
      return state;
    }
  }
}