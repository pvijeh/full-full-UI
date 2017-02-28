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

    console.log('testData--->', testData);    

    console.log('testData.loggedIn--------->', testData.loggedIn );

    console.log('testData.loggedIn ===', testData.loggedIn === 'false');

    if ( testData.loggedIn === 'false' ) {
      console.log(11111111113);

      console.log(' YOOOOOOOOO!!!!!!!! ');


    } else {
      console.log(2222222223);
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
