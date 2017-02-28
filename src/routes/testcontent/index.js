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
import Content from './Content';
// import { getContent } from '../../actions/content';
// import { selectContent } from '../../reducers/content';
import { getPlaceVotes } from '../../actions/getPlaceVotes';
import { addPlaceVotes } from '../../actions/addPlaceVote';

export default {

  path: '/testcontent/:placeSlug',

  async action({ path, store, params }) { // eslint-disable-line react/prop-types
    try {
      // await store.dispatch(getContent({ path }));
      // const data = selectContent(store.getState(), { path });

      await store.dispatch(getPlaceVotes(params.placeSlug));
      // getPlaceVotes(params.placeSlug);
      // const state = await store.getState();
      // console.log('state------------->>>', state );    

      return {
        title: 'title',
        component: <Layout><Content placeSlug={params.placeSlug}/></Layout>,
      };
    } catch (e) {
      throw new Error(e);
    }
  },

};
