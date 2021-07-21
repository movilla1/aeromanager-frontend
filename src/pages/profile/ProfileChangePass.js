import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router';
import { ApiCreateOrUpdateCall } from '../../shared/apiCall';

function ProfileChangePass(props) {
  const token = props.token;
  const history = useHistory();
  const [message, setMessage] = useState('');

  const handleSave = (evt) => {
    evt.preventDefault();

    if (evt.target.newpass.value.length === 0 ||
      evt.target.newpassconfirm.value.length === 0) {
      setMessage("Las claves no pueden ser vacias");
      return;
    }
    if (evt.target.newpass.value !== evt.target.newpassconfirm.value) {
      setMessage("Las claves no coinciden");
      return;
    }

    const PASS_CHANGE_URL = '/user/changepass';

    const payloaData = {
      cp: evt.target.password.value,
      np: evt.target.newpass.value,
      npc: evt.target.newpassconfirm.value
    }

    ApiCreateOrUpdateCall(PASS_CHANGE_URL, payloaData, token).then((receivedData) => {
      setMessage(receivedData.message);
    })
  }

  const cancelPassChange = () => {
    history.goBack();
  }

  return (
    <Jumbotron>
      <h1>Mi cuenta</h1>
      <h2>Cambiar Contrase&ntilde;a</h2>
      {message && <Alert key="1" variant="danger">{message}</Alert>}
      <Form onSubmit={handleSave}>
        <Row>
          <Form.Label column="md" lg={2}>Clave actual</Form.Label>
          <Col>
            <Form.Control type="password" id="password" placeholder="Clave Actual" />
          </Col>
        </Row>
        <Row>
          <Form.Label column="md" lg={2}>Clave nueva</Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Clave Nueva" id="newpass" />
          </Col>
        </Row>
        <Row>
          <Form.Label column="md" lg={2}>Confirmaci&oacute;n de clave</Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Confirme Clave" id="newpassconfirm" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Button type="submit" variant="primary" style={{ padding: "5pt" }}>Grabar</Button>
          </Col>
          <Col xs lg="2">
            <Button type="button" variant="secondary" style={{ padding: "5pt" }} onClick={cancelPassChange}>Cancelar</Button>
          </Col>
        </Row>
      </Form>
    </Jumbotron >
  )
}

ProfileChangePass.propTypes = {
  token: PropTypes.string
}

export default ProfileChangePass

