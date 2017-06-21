import axios from 'axios';

export const ListArticle = (source, sortBy) => {
  source = source || 'abc-news-au'
  sortBy = sortBy || 'top'
  return (dispatch) => {
    axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=7d0b4c6fd5cf46d18f00aa8c4ffc7c56`)
    .then(response=>{
      return dispatch({
        type: 'LIST_ARTICLE',
        payload: response.data
      })
    })
    .catch(err=>{
      // return dispatch({
      //   type: 'ERR',
      //   payload: err
      // })
      console.log(err);
    })
  }
}
