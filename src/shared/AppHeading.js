import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar';
import NavLoginSlot from './NavLoginSlot';

function AppHeading(props) {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
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

        <Navbar.Collapse className="justify-content-end">
          <NavLoginSlot />
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}

AppHeading.propTypes = {
  token: PropTypes.string.isRequired
};

export default AppHeading

