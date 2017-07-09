/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addPlaceVotes } from '../../actions/addPlaceVote';
import { toggleModal } from '../../actions/modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PlaceTag.css';
import Link from '../Link';
import { ROUTE_CATEGORY } from '../../constants';

const clickVote = (item, placeSlug, user, addVote, modalTog ) => {

  if ( !user ) {
    console.log(' not logged in !');
    modalTog( true, 'login' );
  } else {
    console.log(' logged in !');
    addVote(placeSlug, item.categorySlug, 'place');
  }
}

// params:
// condition
// class returned if true
const classIf = ( condition, cssClass ) => {
  if (condition) {
    return cssClass;
  } else {
    return '';
  }
}

function PlaceTag({ item , addPlaceVotes, placeSlug, toggleModal, user }) {

  return (
    <div className={`row ${s.placeTagContainer} ${classIf( item.userHasVote, s.testClass)}`}
      onClick={()=>{
        clickVote( item, placeSlug, user, addPlaceVotes, toggleModal );
      }}>
      <div className={`col-xs-1`}>
        <div className={s.placeTagVotes}>
          <div className={`fa fa-caret-up ${s.votesIcon}`}></div>
          <span>{item.count}</span>
        </div>
      </div>
      <div className={`col-xs-2`}>
        <div className={s.placeTagIcon}>
          <div className={`fa fa-facebook`}></div>
        </div>
      </div>
      <div className={`col-xs-9`}>
        <div className={s.placeMiddleSection}>
            <h4>{item.categorySlug}</h4>
            <p>{item.description}</p>
          <div className={s.placeSimilarContainer}>
              <span>top in category: </span>
              <Link to={ ROUTE_CATEGORY + item.categorySlug }> View more ></Link>
              <span>{item.userHasVote} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = null;

const mapDispatch = {
  addPlaceVotes,
  toggleModal,
};

const EnhancedPlaceTag = connect(mapState, mapDispatch)(PlaceTag);
export default withStyles(s)(EnhancedPlaceTag);

