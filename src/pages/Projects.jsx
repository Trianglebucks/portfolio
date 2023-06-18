import ProjectItem from "../components/ProjectItem";

import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.thumb}
              id={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
