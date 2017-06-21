import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CurrentWeather extends Component {
  render(){
    if(this.props.currentData.main){
      return (
        <div>
          <div>
            <h2>Current Weather</h2>
          <p>City : {this.props.currentData.name}</p>
          <table className="table">
              <thead>
                <tr>
                  <th>Temp</th>
                  <th>Weather Description</th>
                  <th>Wind</th>
                  <th>Coordinate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.currentData.main.temp}</td>
                  <td>{this.props.currentData.weather[0].description}</td>
                  <td>Speed: {this.props.currentData.wind.speed}, Deg: {this.props.currentData.wind.deg}</td>
                  <td>Longitude: {this.props.currentData.coord.lon}, Latitude: {this.props.currentData.coord.lat}</td>
                  <td><Link to={`/${this.props.currentData.id}`}>Detail</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }else{
      return(
        <div>
          <h1>Search ...</h1>
        </div>
      )
    }
  }
}

export default CurrentWeather
