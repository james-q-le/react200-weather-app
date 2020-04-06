import React from 'react';

export default class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {lat, lon, temp, pressure, lowestTemp, highestTemp, humidity, windSpeed, name} = this.props;
    return (
      <div className='card'>
        <div className='card-header' style={{ backgroundColor: 'lightblue' }}>City Information</div>
        <div className='card-body'>
          <div className='jumbotron jumbotron-fluid pt-0 pb-3 mb-2 border-bottom border-light' style={{backgroundColor: 'transparent'}}>
            <div className='card-text text-center'>
              <h2>{name}</h2>
              <p className='mb-1'>Lat/Long: {lat} {lon}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='card-text text-center font-weight-bold'>
                <p>Temperature (F)</p>
                <h4 className='text-success'>{temp}</h4>
              </div>
            </div>
            <div className='col-4'>
              <div className='card-text text-center font-weight-bold'>
                <p>Pressure</p>
                <h4 className='text-success'>{pressure}</h4>
              </div>
            </div>
            <div className='col-4'>
              <div className='card-text text-center font-weight-bold'>
                <p>Humidity</p>
                <h4 className='text-success'>{humidity}</h4>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='card-text text-center font-weight-bold'>
                <p>Lowest Temp (F)</p>
                <h4 className='text-success'>{lowestTemp}</h4>
              </div>
            </div>
            <div className='col-4'>
              <div className='card-text text-center font-weight-bold'>
                <p>Highest Temp(F)</p>
                <h4 className='text-success'>{highestTemp}</h4>
              </div>
            </div>
            <div className='col-4'>
              <div className='card-text text-center font-weight-bold'>
                <p>Wind Speed</p>
                <h4 className='text-success'>{windSpeed}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
