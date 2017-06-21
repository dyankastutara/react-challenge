import { combineReducers } from 'redux';

import data5Days3Hours from './data5Days3HoursReducer';

export default combineReducers({
  data5Days: data5Days3Hours,
})
