import {
FETCH_PLACES_START,
FETCH_PLACES_SUCCESS,
FETCH_PLACES_ERROR
} from '../constants';

export default function getPlaceVotes(state = null, action) {
  if (state === null) {
    return {
      votes: []
    };
  }

  switch (action.type) {
    case FETCH_PLACES_START: {
      return {
        ...state,
        votes: []
      };
    }

    case FETCH_PLACES_SUCCESS: {

      console.log('action.payload.testData------------>>>>>', action.payload.testData);

      return {
        ...state,
        votes: action.payload.testData.votes
      };
    }

    case FETCH_PLACES_ERROR: {
      return {
        ...state,
        votes: 'error',
      };
    }

    default: {
      return state;
    }
  }
}
