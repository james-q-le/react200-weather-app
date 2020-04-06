import React from 'react';
import {
  getWeather
} from './searchActions';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addCity: ''
    }
    this.textInput = this.textInput.bind(this)
    this.getCity = this.getCity.bind(this)
    this.getPreLoadedCity = this.getPreLoadedCity.bind(this)
  }


  textInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  getCity() {
    const { dispatch } = this.props;
    dispatch(getWeather(this.state.addCity))
    this.setState({addCity: ''})
  }

  getPreLoadedCity(event) {
    const { dispatch } = this.props;
    dispatch(getWeather(event.target.value))
  }

  render() {
    return (
      <div className='container-fluid pr-0'>
        <div className='row'>
          <div className='input-group'>
            <div classname='input-group-prepend'>
              <button
              className='btn btn-primary'
              onClick={ this.getPreLoadedCity }
              value='tokyo'  
              >
              Tokyo
              </button>
              <button
              className='btn btn-primary'
              onClick={ this.getPreLoadedCity }
              value='san francisco'  
              >
              San Francisco
              </button>
            </div>
          </div>
        </div>
        <div className='row input-group mb-4'>
          <input 
          className='form-control border border-secondary'
          name='addCity' 
          type='text'
          value= {this.state.addCity}
          onChange={ this.textInput }
          />
          <div className='input-group-append'>
            <button onClick={this.getCity} className='btn btn-outline-secondary'>Go!</button>
          </div>
        </div>
      </div>
    )
  }
}