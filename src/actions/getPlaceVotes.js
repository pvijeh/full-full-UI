/* eslint-disable import/prefer-default-export */

import fetch from '../core/fetch';
import apiCalls from '../lib/apiCalls';
import {
  FETCH_PLACES_START,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR,
  API_VOTES_PLACE
} from '../constants';

export function getPlaceVotes( placeSlug, endpoint ) {

  return async (dispatch, getState ) => {

    dispatch({
      type: FETCH_PLACES_START,
      payload: {},
    });

    try {

    const resp = await apiCalls({ 
      action: 'get',
      endpoint: endpoint,
      slug: placeSlug,
      data: ''
    });

    const testData = await resp.json();

      dispatch({
        type: FETCH_PLACES_SUCCESS,
        payload: {
          testData
        },
      });

    } catch (error) {

      dispatch({
        type: FETCH_PLACES_ERROR,
        payload: {
          error,
        },
      });
      return false;
    }

    return true;
  };
}
