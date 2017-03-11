/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { getPlaceVotes } from '../../actions/getPlaceVotes';
import { addPlaceVotes } from '../../actions/addPlaceVote';
import { toggleModal } from '../../actions/modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PlaceTag.css';
import Link from '../Link';


  // need to pass in information about user state 

  const clickVote = (item, placeSlug) => {
    console.log('slug!!!!!!!!', placeSlug );
    console.log('event!!!!!!', event );
    console.log('item-------->', item );

    if (item.userHasVote) {
      console.log('user has vote -- delete it ');
      addPlaceVotes( placeSlug, item.categorySlug );
      console.log('user has vote ');
      // if a user has a vote, send call to delete method
    } else {
      console.log('user vote added');
      addPlaceVotes( placeSlug, item.categorySlug );
      // if a user does not have a vote, send call to put vote method
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

function PlaceTag({ item, addPlaceVotes, placeSlug, toggleModal }) {

  return (
    <div className={`row ${s.placeTagContainer} ${classIf( item.userHasVote, s.testClass)}`}
      onClick={()=>{
        clickVote( item, placeSlug );
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
            <ul>
              <li><Link to="/blahblah">lorem</Link></li>
              <li><Link to="/blahblah">lorem</Link></li>
              <li><Link to="/blahblah">lorem</Link></li>
            </ul>
              <Link to="/blahblah">View more > </Link>
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

const EnhancedPlaceTag = connect(mapState, mapDispatch)(PlaceTag);
export default withStyles(s)(EnhancedPlaceTag);

