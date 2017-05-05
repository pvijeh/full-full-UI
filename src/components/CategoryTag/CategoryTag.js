/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { getPlaceVotes } from '../../actions/getPlaceVotes';
import { addPlaceVotes } from '../../actions/addPlaceVote';
import { toggleModal } from '../../actions/modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CategoryTag.css';
import Link from '../Link';
import { ROUTE_PLACE } from '../../constants';

  const clickVote = (item, placeSlug, user, addVote, modalTog ) => {

    if ( !user ) {
      console.log(' not logged in !');
      modalTog( true, 'login' );
    } else {
      console.log(' logged in !');
      addVote(placeSlug, item.categorySlug);  
    }
  } 

  // should move this to lib  
  
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

function CategoryTag({ item, addPlaceVotes, placeSlug, toggleModal, user }) {

  return (
    <div className={`row ${s.placeTagContainer} ${classIf( item.userHasVote, s.testClass)}`}
      onClick={()=>{
        clickVote( item, placeSlug, user, addPlaceVotes, toggleModal );
      }}>
      <div className={`col-xs-2`}>
        <div className={s.placeTagVotes}>
          <div className={`fa fa-caret-up ${s.votesIcon}`}></div>
          <span>{item.count}</span>
        </div>
      </div>  
      <div className={`col-xs-10`}>
        <div className={s.placeMiddleSection}>
            <h4>{item.placeSlug}</h4>
            <p>{item.description}</p>
          <div className={s.placeSimilarContainer}>
            {item.placeDescription}
              <span>top in category: </span>
              <Link to={ ROUTE_PLACE + item.placeSlug }>View more > </Link>
              <span>{item.userHasVote} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// TestComponent.propTypes = {
//   currentLocale: PropTypes.string.isRequired,
//   availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
//   getPlaceVotes: PropTypes.func.isRequired,
// };

const mapState = null;

const mapDispatch = {
  addPlaceVotes,
  toggleModal,
};

const EnhancedCategoryTag = connect(mapState, mapDispatch)(CategoryTag);
export default withStyles(s)(EnhancedCategoryTag);

