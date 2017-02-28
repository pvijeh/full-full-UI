/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Place.css';
import Link from '../../components/Link';
import fetch from '../../core/fetch';
import { getPlaceVotes } from '../../actions/getPlaceVotes';

class PlaceTag extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
    categorySlug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    userHasVote: PropTypes.bool.isRequired
    }).isRequired,
  };

  addVote = () => {
    console.log('stuffffffffffffff');
    // API path
    // category
    // place 
    // user 
  }

  deleteVote = () => {
    // API path 
    // user
    // place
    // category 
  }

  clickVote = (blah, item) => {
    // console.log('blah blah lbah ', blah);
    if (blah.item.userHasVote) {
      console.log('blah item', blah.item);
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
  classIf = ( condition, cssClass ) => {
  
    if (condition) {

      return cssClass;
    
    } else {

      return ''; 
    
    }

  }

  render() {

    console.log('placetag ', this.props.item.userHasVote);

    return (
      <div className={`row ${s.placeTagContainer} ${this.classIf(this.props.item.userHasVote, s.testClass)}`} onClick={this.clickVote.bind(this, this.props)}>
        <div className={`col-xs-1`}>
          <div className={s.placeTagVotes}>
            <div className={`fa fa-caret-up ${s.votesIcon}`}></div>
            <span>{this.props.item.count}</span>
          </div>
        </div>  
        <div className={`col-xs-2`}>
          <div className={s.placeTagIcon}>
            <div className={`fa fa-facebook`}></div>
          </div>
        </div>
        <div className={`col-xs-9`}>
          <div className={s.placeMiddleSection}>
              <h4>{this.props.item.categorySlug}</h4>
              <p>{this.props.item.description}</p>
            <div className={s.placeSimilarContainer}>
                <span>top in category: </span>
              <ul>
                <li><Link to="/login">lorem</Link></li>
                <li><Link to="/login">lorem</Link></li>
                <li><Link to="/login">lorem</Link></li>
              </ul>
                <Link to="/login">View more > </Link>
                <span>{this.props.item.userHasVote} </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

class Place extends React.Component {
  static propTypes = {
    votes: PropTypes.arrayOf(PropTypes.shape({
      categorySlug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      userHasVote: PropTypes.bool.isRequired,
    })).isRequired,
  };

  blah = (event) => { 



    (async ({ store }) => {
      let data = {
        categorySlug: 'category1',
        placeSlug: 'place1'
      }

      try {
        const resp = await fetch('http://localhost:5000/votes', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',

      });

      const testData = await resp.json();

      console.log('testData', testData);

      getPlaceVotes('place1');

      const state = await store.getState();

      console.log(state);


      } catch (error) {

        console.log('error', error);

        return false;
      }

      return true;
    })();
  }

  render() {

    return (
      <div className={s.root}>
        <div className={`row ${s.placeHeaderRow}`}>
          <div className={`col-xs-6`}>
            <h1>{this.props.title}</h1>
            <p> description automatically generated from certain tags</p>
            <button className={`${s.voteButton}`} onClick={this.blah}>
              <div><div className={`${s.voteButtonIcon} fa fa-caret-up`}></div><span> 123</span></div>
            </button>
          </div>
          <div className={`col-xs-6 ${s.socialButtonContainerOutter}`}>
          <div className={`${s.socialButtonContainer}`}>
            <button className={`fa fa-facebook ${s.facebookBgColor}`} onClick={this.blah}></button>
            <button className={`fa fa-twitter ${s.twitterBgColor}`} onClick={this.blah}></button>
            <button className={`fa fa-pinterest ${s.pinterestBgColor}`} onClick={this.blah}></button>
          </div>
          </div>
        </div>
          <ul className={s.placeTagListWrapper}>
            <li>
              <div className={s.placeTagListTitle}><h2 className={s.title}>{this.props.title} is known for</h2></div>
            </li>
            {this.props.votes.map((item, index) => (
              <li key={index}>
                <PlaceTag item = {item}/>              
              </li>
            ))}
          </ul>
          <button onClick={this.blah}>stuffffffffffff</button>
      </div>
    );
  }
}

export default withStyles(s)(Place);
