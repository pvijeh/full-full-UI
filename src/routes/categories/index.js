/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Categories from './Categories';
// need to replace this with get category votes
import { getPlaceVotes } from '../../actions/getPlaceVotes';
import { addPlaceVotes } from '../../actions/addPlaceVote';
import { API_VOTES_CATEGORY } from '../../constants';

export default {

  path: '/best-of/:categorySlug',

  async action({ path, store, params }) { // eslint-disable-line react/prop-types
    try {

      await store.dispatch(getPlaceVotes(params.categorySlug, API_VOTES_CATEGORY ));
      const state = await store.getState();

      return {
        title: 'title'+params.categorySlug,
        component: <Layout><Categories categorySlug={params.categorySlug} title={'this is a sample category'}/></Layout>,
      };
    } catch (e) {
      throw new Error(e);
    }
  },

};
