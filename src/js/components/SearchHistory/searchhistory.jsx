import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props
    return (
      <div className='card'>
        <div className='card-header' style={{backgroundColor: 'lightblue'}}>Search History</div>
        <div className='card-body'>
            {
              history.map((get) => (
                <div className='row border-top'>
                  <div className='col-9'>{get.name}</div>
                  <div className='col-3'>{get.time} {get.date}</div>
                </div>
              ))
            }
        </div>
      </div>
    )
  }
}