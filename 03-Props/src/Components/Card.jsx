import React from 'react'

const card = (props) => {
  return (
    <div className='card'>
        <h1>{props.name},{props.age}</h1>
        <img src={props.img} alt="profile" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, distinctio?</p>
        <button>View Profile</button>
    </div>
  )
}

export default card