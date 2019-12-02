import React from 'react';

import './styles/BadgesList.css';


class BadgesList extends React.Component {

  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <div className="BadgesListItem__avatar">
                  <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar" />
                </div>
                <div>
                  <p>{badge.firstName} {badge.lastName}</p>
                  <p>{badge.twitter} </p>
                  <p>{badge.jobTitle} </p>
                </div>
                
              </li>
            )
          })}
        </ul>
      </div>
      
    )
  }
}

export default BadgesList;