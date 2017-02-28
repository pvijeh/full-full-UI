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
import s from './Content.css';
import _ from 'lodash';
import { selectContent } from '../../reducers/content';
import getPlaceVotesReducer from '../../reducers/getPlaceVotesReducer';
import addPlaceVotesReducer from '../../reducers/getPlaceVotesReducer';
import { getPlaceVotes as getPlaceVotesAction } from '../../actions/getPlaceVotes';
import PlaceTag from '../../components/PlaceTag';
import TestButton from '../../components/TestButton';
import GetVotesButton from '../../components/GetVotesButton';
import apiCalls from '../../lib/apiCalls';
import { API_POST_VOTE } from '../../constants';

class TestContent extends Component {

  componentDidMount() {
    this.maybeFetchData();
  }

  componentWillUpdate(nextProps) {
    this.maybeFetchData(nextProps);
  }

  maybeFetchData(props) {
    const { path, locale, content, getPlaceVotes } = props || this.props;
    if (!content) {
      getPlaceVotes('place1');
    }
  }

  render() {

    // should try to move this logic into a lib or something

    const { path, content } = this.props;
    let votes = content.getPlaceVotesReducer.votes;
    let user = content.getPlaceVotesReducer.user;
    let placeSlug = this.props.placeSlug;

    let counts = [];
    let alreadyAdded = {};
    let i = 0;
    let categoriesWithUserVotes = {};

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

    counts = _.sortBy(counts, 'count').reverse();

    return (
      <div className={s.root}>
        { counts.map((item, index) => (
          <li key={index}>
            <PlaceTag item={item} placeSlug={placeSlug}/>
          </li>
        ))}
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

const EnhancedContent = connect(mapState, mapDispatch)(TestContent);

export default withStyles(s)(EnhancedContent);



