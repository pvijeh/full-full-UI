/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { getPlaceVotes } from '../../actions/getPlaceVotes';
// import { addPlaceVotes } from '../../actions/addPlaceVote';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Modal.css';
// import Link from '../Link';

const fakeModalData = {
    title: <h3>HEY HEY HEY HEY TITLE </h3>
}

let hey = true;

function Modal({}) {
    let title = <h3>hey ddddddddudeeeeeeeee</h3>;

    return (
      <div className={s.root}>
        <div className={s.modalContainer}>
        {title}
        modal modal modal !!!!!!!!!!!!!!!
        <button>close button</button> 
        </div>
      </div>
    );
}

export default withStyles(s)(Modal);
