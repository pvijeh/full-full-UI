import {
FETCH_PLACES_START,
FETCH_PLACES_SUCCESS,
FETCH_PLACES_ERROR,
ADD_VOTE_START,
ADD_VOTE_SUCCESS,
ADD_VOTE_USER_NOT_LOGGEDIN,
ADD_VOTE_ERROR,
} from '../constants';

const defaultAction = {
  type: 'NONE'
}

export default function getPlaceVotesReducer(state = null, action = defaultAction ) {
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
      return {
        ...state,
        votes: action.payload.testData.votes,
        user: action.payload.testData.user
      };
    }

    case ADD_VOTE_START : {
      return {
        ...state
      };
    }

    case ADD_VOTE_SUCCESS : {
      return {
        ...state,
        votes: action.payload.testData.votes,
        user: action.payload.testData.user
      };
    }

    case ADD_VOTE_USER_NOT_LOGGEDIN : {
      return { state };
    }

    case ADD_VOTE_ERROR: {
      return {
        ...state,
        message: 'error',
      };
    }

    case FETCH_PLACES_ERROR: {
      return {
        ...state,
        message : 'error',
      };
    }

    default: {
      return state;
    }
  }
}
