

import React from 'react';
import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../constants';

const defaultAction = {
  type: 'NONE'
}

export default function modalReducer(state = null, action = defaultAction ) {

  if (state === null) {

    return {
      showModal: false,
      modalContent: {},
    };
  }

  switch (action.type) {
    case SHOW_MODAL: {

      console.log('SHOW MODAL');

      return {
        ...state,
        showModal: true,
        modalContent: action.payload, 
      };
    }

    case HIDE_MODAL: {

      console.log('HIDE MODAL');

      return {
        ...state,
        showModal: false,
        modalContent: null,
      };
    }

    default: {
      return state;
    }
  }
}
