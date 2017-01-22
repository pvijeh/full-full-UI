/* eslint-disable import/prefer-default-export */

import fetch from '../core/fetch';
import {
  FETCH_PLACES_START,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR,
  API_VOTES_PLACE
} from '../constants';

// export function getPlaceVotes({ locale }) {
export function getPlaceVotes(placeSlug) {
  return async (dispatch, getState ) => {

    dispatch({
      type: FETCH_PLACES_START,
      payload: {},
    });

    try {

      const resp = await fetch(`${API_VOTES_PLACE+placeSlug}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const testData = await resp.json();

      dispatch({
        type: FETCH_PLACES_SUCCESS,
        payload: {
          testData
        },
      });

    } catch (error) {

      console.log('error', error);

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
