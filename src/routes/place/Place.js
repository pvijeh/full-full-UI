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
import s from './Place.css';
import Link from '../../components/Link';


class PlaceTag extends React.Component {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.shape({
    categorySlug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    })).isRequired,
  };

  blah = (event) => { 
    console.log(' blah blah blah ');
  }

  clickVote = (event) => {
    console.log('vote clicked');
  }

  render() {

    console.log(this.props);

    return (
      <div className={`row ${s.placeTagContainer}`} onClick={this.clickVote}>
        <div className={`col-xs-1`}>
          <div className={s.placeTagVotes}>
            <div className={`fa fa-caret-up ${s.votesIcon}`}></div>
            <span>{this.props.item.count}</span>
          </div>
        </div>  
        <div className={`col-xs-2`}>
          <div className={s.placeTagIcon}>
            <div className={`fa fa-caret-up`}></div>
          </div>
        </div>
        <div className={`col-xs-9`}>
          <div className={s.placeMiddleSection}>
              <h4>{this.props.item.categorySlug}</h4>
              <p>{this.props.item.description}</p>
            <div className={s.placeSimilarContainer}>
                <span>top in category: </span>
              <ul>
                <li><Link to="/login">lorem</Link></li>
                <li><Link to="/login">lorem</Link></li>
                <li><Link to="/login">lorem</Link></li>
              </ul>
                <Link to="/login">View more > </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

class Place extends React.Component {
  static propTypes = {
    votes: PropTypes.arrayOf(PropTypes.shape({
      categorySlug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })).isRequired,
  };



  render() {

    return (
      <div className={s.root}>
        <div className={`container ${s.container}`}>
          <div className={`row ${s.placeHeaderRow + ' ' + s.topBottomMargin}`}>
            <div className={`col-xs-6`}>
              <h1>stuff stuff stuff stuff </h1>
              <p> description automatically generated from certain tags</p>
              <button className={`${s.voteButton}`} onClick={this.blah}>
                <div><span className={`fa fa-caret-up`}></span> 123</div>
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
        </div>
        <div className={`container-fluid ${s.container}`}>
          <h1 className={s.title}></h1>

          <ul className={s.placeTagListWrapper}>
            {this.props.votes.map((item, index) => (
              <li key={index} className={s.newsItem}>

                <PlaceTag item = {item}/>
              
              </li>
            ))}
          </ul>
          <div className={`row`} style={{border: '5px solid orange'}}>
            <div className={`col-xs-12 col-md-6 col-lg-3 box ${s.imageBox}`}>
              <img src={'http://lorempixel.com/450/300/'}/>
            </div>
            <div className={`col-xs-12 col-md-6 col-lg-3 box ${s.imageBox}`}>
              <img src={'http://lorempixel.com/450/300/'}/>
            </div>
            <div className={`col-xs-12 col-md-6 col-lg-3 box ${s.imageBox}`}>
              <img src={'http://lorempixel.com/450/300/'}/>
            </div>
            <div className={`col-xs-12 col-md-6 col-lg-3 box ${s.imageBox}`}>
              <img src={'http://lorempixel.com/450/300/'}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(s)(Place);
