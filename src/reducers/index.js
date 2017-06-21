import { combineReducers } from 'redux'

import SelectSourcesReducer from './SelectSourcesReducer'
import ListArticlesReducer from './ListArticlesReducer'

export default combineReducers({
  listSources: SelectSourcesReducer,
  listArticles: ListArticlesReducer
})
