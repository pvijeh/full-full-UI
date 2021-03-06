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
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    votes: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      categorySlug: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      placeSlug: PropTypes.string.isRequired,
      dateCreated: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {

    console.log(this.props);

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>need to put sorted list of top 20 categories here ranked by total of votes in that category</h1>
          <p>list should be expandable on click of button </p>
          <p>below categories list put of top 20 places ranked by total number of votes</p>
          <ul className={s.news}>
            {this.props.votes.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <span
                  className={s.newsDesc}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
