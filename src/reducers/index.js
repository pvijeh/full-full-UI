import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import getPlaceVotes from './getPlaceVotes';
import content from './content';

export default combineReducers({
  user,
  runtime,
  intl,
  getPlaceVotes,
  content,
});
