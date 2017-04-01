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
import Places from './Places';
import { getPlaceVotes } from '../../actions/getPlaceVotes';
import { addPlaceVotes } from '../../actions/addPlaceVote';

export default {

  path: '/bars-and-nightclubs/:placeSlug',

  async action({ path, store, params }) { // eslint-disable-line react/prop-types
    try {
      // await store.dispatch(getContent({ path }));
      // const data = selectContent(store.getState(), { path });

      await store.dispatch(getPlaceVotes(params.placeSlug));
      // getPlaceVotes(params.placeSlug);
      const state = await store.getState();
      // console.log('state------------->>>', state );    

      return {
        title: 'title'+params.placeSlug,
        component: <Layout><Places placeSlug={params.placeSlug} title={params.placeSlug}/></Layout>,
      };
    } catch (e) {
      throw new Error(e);
    }
  },

};
