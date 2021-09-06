import React, { Fragment } from 'react'
import { Form, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

function TextField(props) {
  const id = props.label
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(/[^a-z]+/g, ''))
    .join('-');
  return (
    <Fragment>
      <Col md="2">
        <Form.Label htmlFor={id}>{props.label}</Form.Label>
      </Col>
      <Col md="4">
        <Form.Control
          type={props.type}
          name={id}
          id={id}
          onChange={(e) => props.onChange(e)}
          placeholder={props.placeholder}
        />
      </Col>
    </Fragment>
  )
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func
}

TextField.defaultProps = {
  type: "text",
  onChange: () => { }
}

export default TextField

