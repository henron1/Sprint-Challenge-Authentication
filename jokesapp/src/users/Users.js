import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    function getJokes(req, res) {
      const requestOptions = {
        headers: { accept: 'application/json' },
      };
    
      axios
        .get('https://icanhazdadjoke.com/search', requestOptions)
        .then(response => {
          res.status(200).json(response.data.results);
        })
        .catch(err => {
          res.status(500).json({ message: 'Error Fetching Jokes', error: err });
        });
    }
    
  }
}

export default requiresAuth(Users);

