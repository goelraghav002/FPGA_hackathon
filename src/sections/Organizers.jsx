import React from 'react'
import { organizers } from '../constants'
import "./Organizers.css"

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

const Organizers = () => {
  return (
    <div className="organizersSection" id="organizers">
      <h1 className="organizer-heading">Organizers</h1>
      <div className='organizers-grid-container'>
        {organizers.map((s, i) => (
          <EachOrganizer key={i} img={s.img} name={s.name} />
        ))}
      </div>
    </div>
  )
}

export default Organizers