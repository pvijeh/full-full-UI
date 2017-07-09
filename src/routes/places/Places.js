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

    console.log('votes', votes);
    console.log('content.getPlaceVotesReducer.user', content.getPlaceVotesReducer.user);

    return (
      <div className={s.root}>
        <div className={`row ${s.placeHeaderRow}`}>
          <div className={`col-xs-12`}>
            <h1>{this.props.title}</h1>
            <p> need to insert category description </p>
          </div>
          <div className={`${s.socialButtonContainer}`}>
            <button className={`fa fa-facebook ${s.facebookBgColor}`} onClick={this.blah}></button>
            <button className={`fa fa-twitter ${s.twitterBgColor}`} onClick={this.blah}></button>
            <button className={`fa fa-pinterest ${s.pinterestBgColor}`} onClick={this.blah}></button>
          </div>
        </div>
        <ul className={s.placeTagListWrapper}>
          { votes.map((item, index) => (
            <li key={index}>
              <PlaceTag item={item} placeSlug={item.placeSlug} user={user} />
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



