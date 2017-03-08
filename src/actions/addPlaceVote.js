/* eslint-disable import/prefer-default-export */

import fetch from '../core/fetch';
import apiCalls from '../lib/apiCalls';
import {
  ADD_VOTE_START,
  ADD_VOTE_SUCCESS,
  ADD_VOTE_ERROR,
  API_VOTES_PLACE,
  API_POST_VOTE,
  ADD_VOTE_USER_NOT_LOGGEDIN
} from '../constants';

export function addPlaceVotes( placeSlug, categorySlug ) {

  return async (dispatch, getState ) => {

    dispatch({
      type: ADD_VOTE_START,
      payload: {},
    });

    try {

    const resp = await apiCalls({ 
      action: 'post',
      endpoint: API_POST_VOTE,
      slug: '',
      data: {placeSlug, categorySlug }
    });

    let testData = await resp.json();

    if ( testData.loggedIn === 'false' ) {

    } else {
      dispatch({
        type: ADD_VOTE_SUCCESS,
        payload: {
          testData
        },
      });
    }

    } catch (error) {

      dispatch({
        type: ADD_VOTE_ERROR,
        payload: {
          error,
        },
      });
      return false;
    }

    return true;
  };
}
