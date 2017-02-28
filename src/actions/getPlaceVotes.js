/* eslint-disable import/prefer-default-export */

import fetch from '../core/fetch';
import apiCalls from '../lib/apiCalls';
import {
  FETCH_PLACES_START,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR,
  API_VOTES_PLACE
} from '../constants';

export function getPlaceVotes(placeSlug) {

// console.log('bhallllllllllllllllllllllllllllllllll');

  return async (dispatch, getState ) => {
    // console.log('styff');
    // console.log('dispatch', dispatch);
    // console.log('getState', getState);

    dispatch({
      type: FETCH_PLACES_START,
      payload: {},
    });

    try {

    const resp = await apiCalls({ 
      action: 'get',
      endpoint: API_VOTES_PLACE,
      slug: placeSlug,
      data: ''
    });

    const testData = await resp.json();

    console.log('testData-------->', testData);

      dispatch({
        type: FETCH_PLACES_SUCCESS,
        payload: {
          testData
        },
      });

    } catch (error) {

      console.log('styff');

      console.log('error', error);

      dispatch({
        type: FETCH_PLACES_ERROR,
        payload: {
          error,
        },
      });
      return false;
    }

    console.log('styff');

    return true;
  };
}
