import React, { Component } from 'react';

class SearchWeather extends Component {
  render(){
    return(
      <div>
        <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.searchByCity=''
          }}>
          <input />
        </form>
      </div>
    )
  }
}
