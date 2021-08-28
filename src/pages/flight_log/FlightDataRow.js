import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function FlightDataRow(props) {
  const row = props.row.attributes;
  if (typeof(row) == 'undefined') {
     return false;
  }
  console.log(props.row.attributes);
  return (
    <tr>
      <td>{props.row.id}</td>
      <td>{row.airplane}</td>
      <td>{row.flightStart}</td>
      <td>{row.flightEnd}</td>
      <td>{row.normalizedDuration}</td>
      <td>{row.flightType}</td>
      <td>{row.originAirport}</td>
      <td>{row.destinationAirport}</td>
      <td><Link to={`/flightlog/${props.row.id}`} title="Ver detalle"><FontAwesomeIcon icon={faEye} /></Link></td>
    </tr>
  )
}

FlightDataRow.propTypes = {
  row: PropTypes.object
}

export default FlightDataRow

