import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2024"
            iconStyle={{ background: '#ADD8E6', color: 'rgb(39, 40, 34)' }}
            // iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Flight Attendant</h3>
            <h4 className="vertical-timeline-element-subtitle">American Airlines</h4>
            <p>
              Recognized by leadership for improving customer satisfaction which resulted in reducing customer complaints and improving overall experience for each individual
            </p>
            <p>
              Collaborated with senior leadership to execute safety and operating procedures and maximize the safety and comfort of customers, resulting in increased customer retention
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            // iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            iconStyle={{ background: '#ADD8E6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Commercial Drone Operator</h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance Work</h4>
            <p>
              Designed comprehensive flight plans with a focus on safety, ensuring full compliance with FAA regulations and adapting to variable conditions in real-time
            </p>
            <p>
              Coordinated effectively with team members to ensure smooth flight operations, prioritizing situational awareness and minimizing potential risks
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            // iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            iconStyle={{ background: '#ADD8E6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Communications Specialist / Assistant Supervisor of Operations</h3>
            <h4 className="vertical-timeline-element-subtitle">SeaWorld Parks and Entertainment</h4>
            <p>
              Oversaw safety protocols, staff management, and emergency response in aquatic environments. Lead a team of over two hundred lifeguards on a daily basis as well as upheld safety standards through strong communication and leadership.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;