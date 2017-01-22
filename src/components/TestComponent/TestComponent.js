/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPlaceVotes } from '../../actions/getPlaceVotes';

function TestComponent({ currentLocale, availableLocales, getPlaceVotes }) {

  return (
    <div>
      <a
        href={`#`}
        onClick={(e) => {
          getPlaceVotes('place1');
          e.preventDefault();
        }}
      >click me </a>


    </div>
  );
}

TestComponent.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  getPlaceVotes: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
});

const mapDispatch = {
  getPlaceVotes,
};

export default connect(mapState, mapDispatch)(TestComponent);
