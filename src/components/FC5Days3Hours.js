import React from 'react'
import { connect } from 'react-redux'

import { getData5Days3Hours } from '../actions/data5Days3HoursAction'
const FC5Days3Hours = function(props) {
    console.log(props);
    // let weathers = props.data5Days3Hours;
    // if(weathers){
    //     return (
    //         <div>
    //             <h2>Call 5 day / 3 hour forecast data</h2>
    //             <p>City : {props.data5Days3Hours.city.name}</p>
    //             <table className="table">
    //                 <thead>
    //                     <tr>
    //                       <th>Temp</th>
    //                       <th>Weather Description</th>
    //                       <th>Wind</th>
    //                       <th>Coordinate</th>
    //                       <th>Action</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
    //                       weathers.map((weather, index) => {
    //                         return (
    //                             <tr key={index}>
    //                                 <td>{weather.main.temp}</td>
    //                                 <td>{weather.weather[0].description}</td>
    //                               <td>Deg: {weather.wind.deg}, Wind: {weather.wind.speed}</td>
    //                             <td>Longitude: {JSON.stringify(props.data5Days3Hours.city.coord.lon)}, Latitude: {JSON.stringify(props.data5Days3Hours.city.coord.lat)}</td>
    //                           <td>Detail</td>
    //                             </tr>
    //                             );
    //                         })
    //                     }
    //                 </tbody>
    //             </table>
    //         </div>
    //      );
    //    }
    //    else{
         return(
           <div className="container">
             <h1>Search ...</h1>
           </div>
         )
      //  }

}

const mapDispatchToProps = dispatch => {
  return {
    data5Days: () => dispatch(getData5Days3Hours('Jakarta'))
  }
}

export default connect(null,mapDispatchToProps)(FC5Days3Hours)
