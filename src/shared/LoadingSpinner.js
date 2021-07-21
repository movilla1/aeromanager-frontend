import React from 'react'
import PropTypes from 'prop-types'

const LoadingSpinner = (props) => (
  props.loading && <img src="Bar-Preloader/48x48.gif" alt="loading" />
)

LoadingSpinner.propTypes = {
  loading: PropTypes.bool
}

export default LoadingSpinner
