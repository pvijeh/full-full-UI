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
import s from './Login.css';
import Link from '../../Link';

function Login({ title, content }) {

    // this should come from constants page but cant import that for some reason
    let loginPage = 'http://wwww.localhost:5000/auth/facebook';

    return (
      <div className={s.root}>
        <p className={s.promptText}>In order to vote you must sign in or register.</p>
          <a href={loginPage}>
              <div className={s.loginLogo + ' fa fa-facebook'}></div>
              <div className={s.loginTextArea}>
                <p>Continue with Facebook</p>
              </div>
          </a>
        <p className={s.loginDisclaimerText}>Creating an account means you’re okay with our <Link to="/terms-of-service">Terms of Service</Link>, and <Link to="/terms-of-service">Privacy Policy</Link></p>
      </div>
    );
}

export default withStyles(s)(Login);
