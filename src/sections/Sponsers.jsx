import React from 'react'
import { organizers } from '../constants'
import "./Sponsers.css"

const EachOrganizer = (props) => {
  return (
    <div className="EachOrganizer">
      <div className="organizer-img">
        <img src={props.img} alt="" />
      </div>
      <p className="organizer-p">{props.name}</p>
    </div>
  )
}

const Sponsers = () => {
  return (
    <div className="organizersSection" id="organizers">
      <h1 className="organizer-heading">Organizers</h1>
      <div className='grid-container'>
        {organizers.map((s, i) => (
          <EachOrganizer key={i} img={s.img} name={s.name} />
        ))}
      </div>
    </div>
  )
}

export default Sponsers