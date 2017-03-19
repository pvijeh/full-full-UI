/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Modal.css';

import Login from '../modalContent/Login';

// if display is true, show the modal
// if width is narrow (string), add the narrow class

function Modal({ showModal, modalContent, toggleModal }) {
    let element = null;
    let content = null;
    let title ='title';

    if (modalContent) {
        switch(modalContent) {
            case 'login':
            content = <Login/>
            title = 'Continue with Facebook';
            break;
        }
    }

    if (showModal) {
        element = <div className={s.root}>
        <div className={s.modalContainer}>
            <h3>{title}</h3>
        <div className={s.modalContent}>
            {content}
        </div>
        <button 
            onClick={(e) => {
                toggleModal(false);
                e.preventDefault();
            }} 
            className={s.closeButton}
        >Close</button>    
        </div>
      </div>;
    }
    return (
      <div>
        {element}
      </div>
    );
}

const mapState = (state) => ({
  showModal: state.modalReducer.showModal,
  modalContent: state.modalReducer.modalContent,
});

const mapDispatch = {
  toggleModal,
};

export default withStyles(s)(connect(mapState, mapDispatch)(Modal));
