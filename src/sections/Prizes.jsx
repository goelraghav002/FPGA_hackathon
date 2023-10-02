// import React from 'react'
import "./Prizes.css"
import { prizes } from "../constants";
import React, { useEffect } from 'react';

const EachPrize = (props) => {
  useEffect(() => {
    const prizeicon = document.querySelector(`#id${props.i}`);
    prizeicon.innerHTML = props.icon;
  }, [props.i]);
  
  return (
    <div className="EachPrizes">
      <div id={"id" + props.i} className="prize-icon"></div>
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  )
}

const Prizes = () => {
  return (
    <div className="prizesection" id="prizes">
      <h1>Prizes</h1>
      <div className='prizes-grid-container'>
        {prizes.map((s, i) => (
          <EachPrize key={i} i={i} icon={s.icon} type={s.type} content={s.content} />
        ))}
      </div>
    </div>
  )
}


export default Prizes