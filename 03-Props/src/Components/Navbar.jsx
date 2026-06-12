import React from 'react'

const navbar = () => {
  return (
    <div className='nav'>
        <div className="left">
          <img src="https://cdn.vectorstock.com/i/1000v/08/54/lion-head-logo-vector-51580854.jpg" alt="logo" />
        </div>
        <div className="right">
          <h1>Home</h1>
          <h1>Contact</h1>
          <h1>Profile</h1>
          <h1>Help</h1>
        </div>
    </div>
  )
}

export default navbar