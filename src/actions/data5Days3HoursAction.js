import axios from 'axios'

export const getData5Days3Hours = (inputCity) =>{
  return function (dispatch){
    let city = inputCity || 'Jakarta'
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},id&mode=json&APPID=8586607e679f0211700813ce43b0da34`)
    .then(response => {
      return dispatch({
        type: 'DATA_5DAYS_3HOURS',
        payload: response.data,
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
