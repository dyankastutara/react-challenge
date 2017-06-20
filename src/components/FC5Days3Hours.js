import React from 'react'

const FC5Days3Hours = function(props) {
    let weathers = props.data5Days3Hours.list;
    if(weathers){
        return (
            <div>
                <h2>Call 5 day / 3 hour forecast data</h2>
                <table className="table">
                    <thead>
                        <tr>
                          <th>Temp</th>
                          <th>Weather Description</th>
                          <th>Wind</th>
                          <th>Coordinate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          weathers.map((weather, index) => {
                            return (
                                <tr key={index}>
                                    <td>{weather.main.temp}</td>
                                    <td>{weather.weather[0].description}</td>
                                  <td>Deg: {weather.wind.deg}, Wind: {weather.wind.speed}</td>
                                <td>Longitude: {JSON.stringify(props.data5Days3Hours.city.coord.lon)}, Latitude: {JSON.stringify(props.data5Days3Hours.city.coord.lat)}</td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
         );
       }
       else{
         return(
           <div className="container">
             <h1>Search ...</h1>
           </div>
         )
       }

}


export default FC5Days3Hours
