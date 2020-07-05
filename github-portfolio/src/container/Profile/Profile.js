import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const profile = await fetch('https://api.github.com/users/glennludszuweit');
    const profileJSON = await profile.json();

    if (profileJSON) {
      this.setState({
        data: profileJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className=''>
        <ul>
          <li> Avatar URL: {data.avatar_url} </li>
          <li> HTML URL: {data.html_url} </li>
          <li> Repos URL: {data.repos_url} </li>
          <li> Name: {data.name} </li>
          <li> Website: {data.blog} </li>
          <li> Company: {data.company} </li>
          <li> Location: {data.location} </li>
          <li> BIO: {data.bio} </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
