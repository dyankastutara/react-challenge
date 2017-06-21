const initialState=[]

export default(state=initialState, {type, payload})=>{
  switch(type){
    case 'LIST_ARTICLE': {
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
