import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NavLoginSlot from './NavLoginSlot';
import { Nav, Navbar, Container } from 'react-bootstrap';

function AppHeading(props) {
  return (
    <Fragment>
      <Navbar bg="light" variant="light" fixed="top" className="nav-tabs nav-fill">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            AeroManager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="/flightlog/new">Nuevo Vuelo</Nav.Link>
              <Nav.Link href="/flightlogs">Mis Vuelos</Nav.Link>
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

