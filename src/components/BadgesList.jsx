import React from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';
import './styles/BadgesList.css';


class BadgesList extends React.Component {

  render() {

    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    console.log(this.props.badges.avatarUrl)

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <div className="BadgesListItem__avatar">
                  <Gravatar 
                    className="BadgesListItem__avatar" 
                    email={badge.email} 
                    alt="avatar" 
                  />
                </div>
                <div>
                  <p>{badge.firstName} {badge.lastName}</p>
                  <p>{badge.twitter} </p>
                  <p>{badge.jobTitle} </p>
                </div>                
              </li>
            )
          })
          }
        </ul>
      </div>
      
    )
  }
}

export default BadgesList;