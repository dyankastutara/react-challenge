import axios from 'axios'

export const getNameStarWars = () =>{
  return dispatch=>{
    axios.get(`http://swapi.co/api/people/`)
    .then(function(response){
      return dispatch({
        type: 'GET_PEOPLE',
        payload: response.data,
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
