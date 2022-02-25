import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import MadhelFieldWithTooltip from '../../shared/madhel_field_with_tooltip'
function FlightDataRow(props) {
  const row = props.row.attributes;
  if (typeof(row) == 'undefined') {
     return false;
  }
  return (
    <tr>
      <td>{props.row.id}</td>
      <td>{row.airplane}</td>
      <td>{row.flightStart}</td>
      <td>{row.flightEnd}</td>
      <td>{row.normalizedDuration}</td>
      <td>{row.flightType}</td>
      <td>
        <MadhelFieldWithTooltip shortName={row.originAirport} id="originAirport"/>
      </td>
      <td>
        <MadhelFieldWithTooltip shortName={row.destinationAirport} id="destinationAirport"/>
      </td>
      <td><Link to={`/flightlog/${props.row.id}`} title="Ver detalle"><FontAwesomeIcon icon={faEye} /></Link></td>
    </tr>
  )
}

FlightDataRow.propTypes = {
  row: PropTypes.object
}

export default FlightDataRow

