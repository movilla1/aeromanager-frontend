import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'

const Logout = ({ visible }) => {
  const [show, setShow] = useState(visible);

  const handleCancel = () => setShow(false);
  const handleLogout = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleCancel}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Finalizar su sesi&oacute;n</Modal.Title>
      </Modal.Header>
      <Modal.Body>Esta seguro que dese finalizar su sesi&oacute;n y cerrar la app?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Finalizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

Logout.propTypes = {
  setToken: PropTypes.func,
  token: PropTypes.string
}

export default Logout;

