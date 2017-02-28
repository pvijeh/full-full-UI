import fetch from '../core/fetch';
import {
  FETCH_PLACES_START,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR,
  API_VOTES_PLACE
} from '../constants';

export default function apiCalls( { action = 'get' , endpoint = '', slug = '', data = {} } ) {
    let sendData = null;

    console.log('data', data );
    
    if ( data ){
        sendData = JSON.stringify( data );    
    }
    
    const resp = fetch(`${endpoint+slug}`, {
        method: action,
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
        body: sendData,
        credentials: 'include',
    });

    return resp;
};

