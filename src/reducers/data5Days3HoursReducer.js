const initialState = {}

export default(state = initialState, {type, payload}) => {
  if(type === 'DATA_5DAYS_3HOURS'){
    let newState = {...state, result: payload}
    return newState
  }
  return state;
};
