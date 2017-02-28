/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Place from './Place';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import _ from 'lodash';
import { getPlaceVotes } from '../../actions/getPlaceVotes';

export default {

  path: '/place/:placeSlug',

  async action({ params, store }) {

    await store.dispatch(getPlaceVotes(params.placeSlug));

    getPlaceVotes(params.placeSlug);

    const state = await store.getState();

    console.log('state------------->>>', state );    

    const votes = state.getPlaceVotesReducer.votes;

    const categoryDescriptions = {
      category1 : "category1 lorem lorem lorem lorem lorem lorem",
      category2 : "category2 lorem lorem lorem lorem lorem lorem",
      category3 : "category3 lorem lorem lorem lorem lorem lorem",
      category4 : "category4 lorem lorem lorem lorem lorem lorem",
      category5 : "category5 lorem lorem lorem lorem lorem lorem",
      category6 : "category6 lorem lorem lorem lorem lorem lorem",
      category7 : "category7 lorem lorem lorem lorem lorem lorem",
      category8 : "category8 lorem lorem lorem lorem lorem lorem",
      category9 : "category9 lorem lorem lorem lorem lorem lorem",
      category10 : "category10 lorem lorem lorem lorem lorem lorem"
    }

    let counts = [];
    let alreadyAdded = {};
    let i = 0;

    for ( i = 0; i < votes.length; i++ ) {
      
      let value = votes[i].categorySlug;

      let userHasVote = Math.random() < 0.3;

      if ( alreadyAdded[value] === undefined ) {

        alreadyAdded[value] = 1;

        let item = {
          categorySlug : value,
          description: categoryDescriptions[value],
          count: alreadyAdded[value],
          userHasVote: userHasVote
        }

        counts.push(item);

      } else {

        ++alreadyAdded[value];

        for ( let i = 0; i < counts.length; i++ ) {
          if ( counts[i].categorySlug === value ) {
            counts[i].count = alreadyAdded[value];
          }
        }          
      }
    }

    counts = _.sortBy(counts, 'count').reverse();

    if (!votes) throw new Error('Failed to load the news feed.');

    return {
      title: params.placeSlug,
      description: 'blah blah blah',
      component: <Layout><Place votes={ counts } title={params.placeSlug} description={'blah blah blah'}/></Layout>,
    };
  },

};


