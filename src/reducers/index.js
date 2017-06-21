import { combineReducers } from 'redux';

import dataNameSWReducer from './dataNameSWReducer';

export default combineReducers({
  listName: dataNameSWReducer,
})
