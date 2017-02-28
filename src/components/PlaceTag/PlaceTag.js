/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { getPlaceVotes } from '../../actions/getPlaceVotes';
import { addPlaceVotes } from '../../actions/addPlaceVote';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PlaceTag.css';
import Link from '../Link';

const addVote = () => {
    console.log('stuffffffffffffff');
    // API path
    // category
    // place 
    // user 
  }

  const deleteVote = () => {
    // API path 
    // user
    // place
    // category 
  }

  const clickVote = (item, placeSlug, event) => {
    console.log('slug!!!!!!!!', placeSlug);
    console.log('event!!!!!!', event);
    // addPlaceVotes( placeSlug, item.categorySlug );
    addPlaceVotes('place1', 'category1');
    console.log('item-----------||||||', item );

    if (item.userHasVote) {
      console.log('blah item', item);
      console.log('user has vote ');


      // if a user has a vote, send call to delete method
    } else {
      console.log('user does not have vote');
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

function PlaceTag({ item, addPlaceVotes, placeSlug }) {

  console.log('item.userHasVote',item.categorySlug,  item.userHasVote);

  return (
    <div className={`row ${s.placeTagContainer} ${classIf( item.userHasVote, s.testClass)}`}
      onClick={(e) => {
        addPlaceVotes(placeSlug, item.categorySlug);
        e.preventDefault();
      }}
    >
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
};

const EnhancedPlaceTag = connect(mapState, mapDispatch)(PlaceTag);
export default withStyles(s)(EnhancedPlaceTag);

