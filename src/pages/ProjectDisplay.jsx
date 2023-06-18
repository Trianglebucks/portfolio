import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { AiOutlineLink } from "react-icons/ai";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.display} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a
        href={
          project.link ? "https://mern-jobify-dlub.onrender.com/landing" : "#"
        }
      >
        <AiOutlineLink />
      </a>
    </div>
  );
};
export default ProjectDisplay;
