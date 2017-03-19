/* eslint-disable import/prefer-default-export */

import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../constants';

// showModal -- boolean, true reveals modal
// modal content 

export function toggleModal( showModal, modalContent ) {

  console.log('modal !!!!!!');

  console.log('showModal', showModal);
  console.log('modalContent', modalContent);

  return ( dispatch )=>{
      if (showModal === true ) {
        console.log('show modal ');
        dispatch({
          type: SHOW_MODAL,
          payload: modalContent,
        });
      } else {
        dispatch({
          type: HIDE_MODAL,
          payload: {},
        });
      }
  }
};
