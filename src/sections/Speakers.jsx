import React from 'react'
import { speakers } from '../constants'
import "./Speakers.css"

const EachSpeaker = (props) => {
    return (
        <div className="EachSpeaker">
            <div className="speaker-img">
                <img src={props.img} alt="" />
            </div>
            <div className="speaker-p">
                <p className="p-name">{props.name}</p>
                <p className="p-designation">{props.designation}</p>
            </div>
        </div>
    )
}

const Speakers = () => {
    return (
        <div className="SpeakersSection" id="speakers">
            <h1 className="speaker-heading">Speakers</h1>
            <div className='speakers-grid-container'>
                {speakers.map((s, i) => (
                    <EachSpeaker key={i} img={s.img} name={s.name} designation={s.designation} />
                ))}
            </div>
        </div>
    )
}

export default Speakers