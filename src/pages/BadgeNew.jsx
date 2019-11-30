import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName="Jhon Leider" 
                lastName="Guerrero" 
                twitter="@jlguerrerop"
                jobTitle="Backend Engineer"
                avatarUrl="https://s.gravatar.com/avatar/18d1c5bdce469f992f0f78a26f46a5b6?s=80"
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;