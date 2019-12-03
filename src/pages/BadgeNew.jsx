import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }}

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null })

    try {
      console.log(this.state.form);
      await api.badges.create(this.state.form);
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    return (
      <React.Fragment>

        <div className="BadgeNew__hero">
          <img className=" BadgeNew__hero-image img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'} 
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://s.gravatar.com/avatar/18d1c5bdce469f992f0f78a26f46a5b6?s=80"
                />
            </div>
            <div className="col-6">
              <BadgeForm 
                onSubmit={this.handleSubmit} 
                onChange={this.handleChange} 
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;