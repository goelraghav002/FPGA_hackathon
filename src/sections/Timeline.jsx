import React from 'react'
import './Timeline.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {timeline} from "../constants/index"
import {AiFillCalendar} from "react-icons/ai"

const Timeline = () => {


  return (
    <div className="timeline-section">
      <h3 className='text-center text-[3rem] mb-8 font-bold'>Timeline</h3>
      <VerticalTimeline lineColor='#3498db'>

        {timeline.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#f5f5f5', color: '#333333' }}
              contentArrowStyle={{ borderRight: '7px solid  #f5f5f5 ' }}
              iconStyle={{ background: '#3498db', color: '#fff' }}        
              icon={<AiFillCalendar />}
              // style={{width:"auto", maxwidth:"100%"}}
            >
              <h2 className="vertical-timeline-element-title"><b>DATE:</b> {item.date}</h2>              
              <p style={{color:" #777777"}} className='para'>
                {item.event}
              </p>
            </VerticalTimelineElement>
          )
        })
      } 
      </VerticalTimeline>
    </div>
  );
}




export default Timeline