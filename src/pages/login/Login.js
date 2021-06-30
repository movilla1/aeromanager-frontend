import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <Container>
      <Jumbotron className='col-md-4 offset-md-4'>
        <h3>Please Login</h3>
        <form onSubmit={handleSubmit}>
          <Row>
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
          </Row>
          <Row>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
          </Row>
          <Row className="">
            <div className="col-md-2 offset-md-2">
              <button type="submit">Login</button>
            </div>
          </Row>
        </form>
      </Jumbotron>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}