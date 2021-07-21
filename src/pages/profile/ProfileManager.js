import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { currentUser, setCurrentUser } from '../../shared/session';
import { useHistory } from 'react-router';
import { ApiCreateOrUpdateCall } from '../../shared/apiCall';

function ProfileManager(props) {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState(currentUser());

  const handleSave = (evt) => {
    evt.preventDefault();
    const payloaData = {
      name: evt.target.elements.name.value
    };
    const PROFILE_UPDATE_URL = '/user';
    ApiCreateOrUpdateCall(PROFILE_UPDATE_URL, payloaData, props.token).then((data) => {
      setMessage(data.message);
      setCurrentUser(data.user);
    });
  }

  const changePassword = () => {
    history.push("/profile/changePassword");
  }

  const pick = (...props) => o => props.reduce((a, e) => ({ ...a, [e]: o[e] }), {});

  const handleChange = (evt) => {
    let details = pick('email', 'role', 'id')(userDetails)
    details['name'] = evt.target.value;
    setUserDetails(details);
  }

  return (
    <Jumbotron>
      <h1>Mi cuenta</h1>
      {message && <Alert key="1" variant="danger">{message}</Alert>}
      <Form onSubmit={handleSave}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="name" id="name" placeholder="Nombre Completo" value={userDetails.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control type="email" placeholder="e-mail" value={userDetails.email} readOnly />
        </Form.Group>
        <Form.Group controlId="actions">
          <Row>
            <Col>
              <Button type="button" onClick={changePassword}>Cambiar Clave</Button>
            </Col>
            <Col>
              <Button type="submit">Grabar</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Jumbotron>
  )
}

ProfileManager.propTypes = {
  token: PropTypes.string
}

export default ProfileManager

