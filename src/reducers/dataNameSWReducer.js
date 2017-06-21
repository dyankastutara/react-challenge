const initialState = {}

export default(state = initialState, {type, payload}) => {
  if(type === 'GET_PEOPLE'){
    let newState = {...state, result: payload}
    return newState
  }
  return state;
};
