import React, { useEffect, useState } from 'react'
import { OverlayTrigger, Popover, PopoverContent, PopoverTitle } from 'react-bootstrap'
import PropTypes from 'prop-types'
import axios from "axios";

const MADHEL_API = 'https://datos.anac.gob.ar/madhel/api/v2/airports/';

// interface with madhel data
const MadhelFieldWithTooltip = (props) => {
  const [airportDetails, setDetails] = useState("");
  useEffect((e)=>
    axios.get(MADHEL_API + props.shortName + "/").then(
      (response) => setDetails(response.data.data?.human_readable_identifier?.split(" - ")?.join("<br/>"))
    ), [setDetails, props.shortName]);
  return (
    <OverlayTrigger
      trigger="click"
      key={`pop_${props.id}`}
      placement={"top"}
      overlay= {
        <Popover id={`popover-${props.id}`}>
          <PopoverTitle as={"h2"} key={`head-${props.id}`} style={{color: 'black'}}>
            Detalles para: {props.shortName}
          </PopoverTitle>
          <PopoverContent key={`body-${props.id}`}>
            <div dangerouslySetInnerHTML={{__html: airportDetails}} />
          </PopoverContent>
        </Popover>
      }>
        <span>{props.shortName}</span>
      </OverlayTrigger>

  );
}

MadhelFieldWithTooltip.propTypes = {
  row: PropTypes.object
}

export default MadhelFieldWithTooltip;
