import React, { Component } from 'react'

class DetailWeather extends Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    console.log(this.props.currentData);
    return(
      <div>
        { this.props.currentData.length == 0 ? <div>
            <h1>No Find this Id</h1>
          </div> : <div>
            <h2>Detail weather with id : {this.props.currentData.id}</h2>
          <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>City</td>
                  <td>{this.props.currentData.name}</td>
                </tr>
              </tbody>
            </table>
          <p>{this.props.currentData.main.temp}</p>

          </div>
        }
      </div>
    )
  }
}

export default DetailWeather
