import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TbSchool } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#f9f4ef">
        <VerticalTimelineElement
          className="vertical-timeline0element--education"
          date="2013-2017"
          dateClassName="dateExp"
          iconStyle={{ background: "#eaddcf", color: "#8c7851" }}
          icon={<TbSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Judge Juan Luna High School
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline0element--education"
          date="2017-2019"
          dateClassName="dateExp"
          iconStyle={{ background: "#eaddcf", color: "#8c7851" }}
          icon={<TbSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            San Francisco Senior High School
          </h3>
          <p>Senior High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline0element--education"
          date="2019-2023"
          dateClassName="dateExp"
          iconStyle={{ background: "#eaddcf", color: "#8c7851" }}
          icon={<TbSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Polytechnic University of the Philippines
          </h3>
          <p>Bachelor of Science in Computer Science Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline0element--education"
          date="2022"
          dateClassName="dateExp"
          iconStyle={{ background: "#f25042", color: "#f9f4ef" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">Trend Micro Inc.</h3>
          <p>Threat Experts Team Intern</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
