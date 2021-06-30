import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Dashboard = (props) => {
  return (
    <Fragment>
      <h2>{props.title}</h2>
      <strong>Work in progress</strong>
    </Fragment>
  );
}

Dashboard.propTypes = {
  title: PropTypes.string
};

export default Dashboard;

