import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Cards = (props) => {
  return (
    <div className='card'>
        <div className="top">
            <img src={props.logo} alt="logo" />
            <div className="right">
                <button>Save </button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
            </div>
        </div>
        <div className="center">
            <h3>{props.company}<span> {props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className="tag">
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
            </div>
        </div>
        <div className="bottom">
            <div className="bleft">
                <h3>{props.pay}</h3>
                <p>{props.place}</p>
            </div>
            <div className="bright">
                <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards