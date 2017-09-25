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


// origin should say whether the click originated from a category page or a place page
export function addPlaceVotes( placeSlug, categorySlug, origin ) {

  console.log('add place vote');

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
      data: {placeSlug, categorySlug, origin }
    });

    let testData = await resp.json();

    console.log('testData------------>', testData);

    if ( testData.loggedIn === 'false' ) {

    } else {

      console.log('testData------------>', testData);


      dispatch({
        type: ADD_VOTE_SUCCESS,
        payload: {
          testData
        },
      });
    }

    } catch (error) {

      console.log('testData------------>', testData);

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