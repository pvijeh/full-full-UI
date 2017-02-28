/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import fetch from '../../core/fetch';

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  doThisThing = () => {
    
    console.log('stuffffffff');

     (async () => {

      console.log('stuffffffffffffffffff');

    try {

      const resp = await fetch('http://localhost:5000/votes/place/place1', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const testData = await resp.json();

    console.log('testData', testData);


    } catch (error) {

      console.log('error', error);

      return false;
    }

    return true;
  })();


  }

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/about">About</Link>
        <Link className={s.link} to="/contact">Contact</Link>
        <span className={s.spacer}> | </span>
        <a href="http://localhost:5000/auth/facebook">login</a>
        <span className={s.spacer}>or</span>
        <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
        <span onClick={this.doThisThing}>test me </span>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
