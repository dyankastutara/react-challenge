import React, { Component } from 'react'

class DetailWeather extends Component {
  render(){
    return(
      <div>
        { this.props.currentData.length === 0 ? <div>
            <h1>No Find this Id</h1>
          </div> : <div>
            <h2>Detail weather with id : {this.props.currentData.id}, City: {this.props.currentData.name}</h2>
          <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>City</td>
                  <td>{this.props.currentData.name}</td>
                </tr>
                <tr>
                  <td>Temp F</td>
                <td>{this.props.currentData.main.temp}</td>
              </tr>
              <tr>
                <td>Temp Min F</td>
              <td>{this.props.currentData.main.temp_min}</td>
              </tr>
              <tr>
                <td>Temp Max F</td>
              <td>{this.props.currentData.main.temp_max}</td>
              </tr>
              <tr>
                <td>Coordinate</td>
              <td>Latitude : {this.props.currentData.coord.lat}, Longitude : {this.props.currentData.coord.lon}</td>
              </tr>
              <tr>
                <td>Country</td>
              <td>{this.props.currentData.sys.country}</td>
              </tr>
              <tr>
                <td>Weather</td>
              <td>{this.props.currentData.weather[0].description}</td>
              </tr>
              <tr>
                <td>Wind</td>
              <td>Deg: {this.props.currentData.wind.deg}, Speed: {this.props.currentData.wind.speed}</td>
              </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
    )
  }
}

export default DetailWeather
