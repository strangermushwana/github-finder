import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-into-circle'>{alert.message}</i>
      </div>
    )
  )
}

Alert.propTypes = {
  alert: PropTypes.object,
}

export default Alert
