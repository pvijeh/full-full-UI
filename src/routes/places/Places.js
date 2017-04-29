/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Places.css';
import _ from 'lodash';
import { selectContent } from '../../reducers/content';
import getPlaceVotesReducer from '../../reducers/getPlaceVotesReducer';
import addPlaceVotesReducer from '../../reducers/getPlaceVotesReducer';
import { getPlaceVotes as getPlaceVotesAction } from '../../actions/getPlaceVotes';
import PlaceTag from '../../components/PlaceTag';
import apiCalls from '../../lib/apiCalls';
import { API_POST_VOTE, API_VOTES_PLACE } from '../../constants';

class Places extends Component {

  componentDidMount() {
    this.maybeFetchData();
  }

  componentWillUpdate(nextProps) {
    this.maybeFetchData(nextProps);
  }

  maybeFetchData(props) {
    const { path, locale, content, getPlaceVotes } = props || this.props;
    if (!content) {
      getPlaceVotes('place1', API_VOTES_PLACE );
    }
  }

  render() {

    const { path, content } = this.props;
    let votes = content.getPlaceVotesReducer.votes;
    let user = content.getPlaceVotesReducer.user;
    let placeSlug = this.props.placeSlug;

    let counts = [];
    let alreadyAdded = {};
    let i = 0;
    let categoriesWithUserVotes = {};

    if (votes && votes.length > 0) {
      for ( i = 0; i < votes.length; i++ ) {

        let currentVote = votes[i];

        if ( user === currentVote.userId ) {
          categoriesWithUserVotes[user] = true
        }
        
        let value = currentVote.categorySlug;

        if ( alreadyAdded[value] === undefined ) {
          alreadyAdded[value] = 1;

          let item = {
            categorySlug : value,
            description: currentVote.categoryDescription,
            count: alreadyAdded[value],
            userHasVote: categoriesWithUserVotes[currentVote.userId]
          }

          counts.push(item);

        } else {

          ++alreadyAdded[value];

          for ( let i = 0; i < counts.length; i++ ) {
            if ( counts[i].categorySlug === value ) {
              counts[i].count = alreadyAdded[value];
              counts[i].userHasVote = categoriesWithUserVotes[currentVote.userId];
            }
          }          
        }
      }
    }
    
    counts = _.sortBy(counts, 'count').reverse();

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
          { counts.map((item, index) => (
            <li key={index}>
              <PlaceTag item={item} placeSlug={placeSlug} user={content.getPlaceVotesReducer.user} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state, props) => ({
  content: state,
});

const mapDispatch = {
  getPlaceVotesAction,
};

const EnhancedContent = connect(mapState, mapDispatch)(Places);

export default withStyles(s)(EnhancedContent);



