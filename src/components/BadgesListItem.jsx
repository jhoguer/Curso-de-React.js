import React from 'react';
import Gravatar from './Gravatar';

import './styles/BadgesList.css';


class BadgesListItem extends React.Component {

  render() {
    return (
      <div className="BadgesListItem">
        <div className="BadgesListItem__avatar">
          <Gravatar 
            className="BadgesListItem__avatar" 
            email={this.props.item.email} 
            alt="avatar" 
          />
        </div>
        <div>
            <p>{this.props.item.firstName} {this.props.item.lastName}</p>
            <p>{this.props.item.twitter} </p>
            <p>{this.props.item.jobTitle} </p>
        </div>
      </div>
    );
  }
}

export default BadgesListItem;