const initialState = []

export default(state = initialState, {type, payload})=>{
  switch(type){
    case 'SELECT_SOURCES': {
      let newState = {...state, result: payload}
      return newState
    }
    // case 'ERR': {
    //   let newState = {...state, result: payload}
    //   return newState
    // }
    default: return state
  }
}
