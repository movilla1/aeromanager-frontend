import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/esm/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";
import { BASE_URI } from '../../shared/URI';

async function loginUser(credentials) {
  return fetch(BASE_URI + '/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .catch(err => JSON.parse(`{"error": {"user_authentication": "Failed to login: (${err})"}}`))
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    const authData = await loginUser({
      username,
      password
    });
    if (authData?.token) {
      setToken(authData);
      history.push("/dashboard");
    } else {
      setMessage(authData?.error?.user_authentication || "Invalid user and password");
    }
  }

  return (
    <Container>
      <Row>
        <Jumbotron className='text-center col-md-4 offset-md-7 boxed'>
          <h3>Ingreso al sistema</h3>
          <div style={{marginLeft: "auto", textAlign: "center"}}>
            <form onSubmit={handleSubmit}>
                <label>
                  <p>Usuario</p>
                  <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                  <p>Contrase&ntilde;a</p>
                  <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div className="p-3">
                  <button type="submit">Login</button>
                </div>
            </form>
          </div>
          {message?.length > 0 && <div className="alert">{message}</div>}
        </Jumbotron>
      </Row>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
