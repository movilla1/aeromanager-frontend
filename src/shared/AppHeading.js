import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NavLoginSlot from './NavLoginSlot';
import { currentUser } from './session';
import { Container, Nav, Navbar } from 'react-bootstrap';

function AppHeading(props) {
  const userName = currentUser()?.name;
  return (
    <Fragment>
      <Navbar bg="darkaero" variant="darkaero" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            AeroManager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              {userName && <Fragment>
                <Nav.Link href="/flightlog/new">Nuevo Vuelo</Nav.Link>
                <Nav.Link href="/flightlogs">Mis Vuelos</Nav.Link>
              </Fragment>}
              <NavLoginSlot />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

AppHeading.propTypes = {
  token: PropTypes.string.isRequired
};

export default AppHeading

