import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import getPlaceVotesReducer from './getPlaceVotesReducer';
import modalReducer from './modalReducer';
import content from './content';

export default combineReducers({
  user,
  runtime,
  intl,
  getPlaceVotesReducer,
  content,
  modalReducer,
});
