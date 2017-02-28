/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addPlaceVotes } from '../../actions/addPlaceVote';

function TestButton({ addPlaceVotes }) {

  return (
    <div>
      <a
        href={`#`}
        onClick={(e) => {
          // getPlaceVotes('place1');
          addPlaceVotes('place1', 'category1');
          e.preventDefault();
        }}
      >click me </a>
    </div>
  );
}

const mapState = null;

const mapDispatch = {
  addPlaceVotes,
};

export default connect(null, mapDispatch)(TestButton);
