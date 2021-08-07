import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { ApiListCall } from '../apiCall'
import PropTypes from 'prop-types'

function MappedSelect(props) {
  const [SelectData, setSelectData] = useState([]);
  const [SelectedValue, setSelectedValue] = useState(props.value);

  useEffect(() => {
    ApiListCall(props.apiEndpoint, props.token).then(
      (response) => setSelectData(response.data.data)
    ).catch((err) => console.log(err));
  }, [setSelectData, props.apiEndpoint, props.token])

  const handleChange = (evt) => {
    evt.preventDefault();
    setSelectedValue(evt.target.value); //set local state
    if (props.onChange) {
      props.onChange(evt); //propagate event
    }
  }

  return (
    <Form.Control
      as="select"
      id={props.id}
      custom
      onChange={handleChange}
      value={SelectedValue}
      disabled={props.disabled}
    >
      {SelectData && SelectData.length > 0 && <option value="-1">Please Select</option>}
      {
        SelectData && SelectData.length > 0 && SelectData.map(
          (SelectRow) => (
            <option value={SelectRow.id} key={SelectRow.id}>{SelectRow.attributes.identifier}</option>
          )
        )
      }
    </Form.Control>
  )
}

MappedSelect.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  apiEndpoint: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool,
}

MappedSelect.defaultProps = {
  onChange: () => { },
  disabled: false,
}

export default MappedSelect;

