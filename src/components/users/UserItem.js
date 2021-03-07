import React, { Component } from 'react'

export class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  }

  render() {
    const { login, avatar_url, html_url } = this.state
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          className='round-img'
          alt='Avatar'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    )
  }
}

export default UserItem
