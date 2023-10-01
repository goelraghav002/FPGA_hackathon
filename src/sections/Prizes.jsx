// import React from 'react'
import "./Prizes.css"

// this Prizeinfo array will be removed when model/data files will be created, for now this data has been copied from the old repo for visualization

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy">😊</i>,
      type: 'Winner',
      content:
        'Winner prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal">😊</i>,
      type: '1st Runner-up',
      content:
        '1st Runner-up prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal">😊</i>,
      type: '2nd Runner-up',
      content:
        '2nd Runner-up project of the hackathon will win some awesome prizes'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic">😊</i>,
      type: 'All Girls Team Winner',
      content:
        'All Girls Team Winner will be awarded to the project of hackathon which was made by an all girls team'
    }
  ]
];

const EachPrize = (props) => {
  return (
    <div className="EachPrizes">
      {props.icon}
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  )
}

const PrizeGroup = (props, index) => {
  return (
    <div key={index} className='prizes-grid-container'>
      {props.map((s, i) => (
        <EachPrize key={i} icon={s.icon} type={s.type} content={s.content} />
      ))}
    </div>
  );
};

const Prizes = () => {
  return (
    <div className="prizesection" id="prizes">
      <h1>Prizes</h1>
      {Prizeinfo.map(PrizeGroup)}
    </div>
  )
}


export default Prizes