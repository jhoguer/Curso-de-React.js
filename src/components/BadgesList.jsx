import React from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';
import BadgesListItem from './BadgesListItem';
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
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                  <BadgesListItem item={badge}/>
                </Link>             
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