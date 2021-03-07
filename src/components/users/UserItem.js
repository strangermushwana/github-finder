import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        alt='Avatar'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
