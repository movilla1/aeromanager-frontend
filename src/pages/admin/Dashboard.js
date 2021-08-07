import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Image, Jumbotron } from 'react-bootstrap'

const Dashboard = (props) => {
  return (
    <Fragment>
      <h2>Aeromanager v0.5</h2>
      <Jumbotron>
        <h5>Sistema de registro de datos para aeroclubes.</h5>
        <div className="text-center">
          <Image
            src="logo.png"
            title="Aeromanager"
            alt="Logo de la aplicaci&oacute;n"
            width="90%"
            style={{ maxWidth: '240px' }}
          />
        </div>
      </Jumbotron>
    </Fragment>
  );
}

Dashboard.propTypes = {
  title: PropTypes.string
};

export default Dashboard;

