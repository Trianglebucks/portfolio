import { BsGithub, BsDatabase } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiDesktop } from "react-icons/bi";
import { GoBrowser } from "react-icons/go";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Yo, I am William</h2>
        <div className="prompt">
          <p>I code things, and develop things. Simple as that.</p>

          <MdEmail />
          <a href="https://github.com/Trianglebucks" target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="list">
          <div className="item item1">
            <GoBrowser
              size={50}
              style={{ marginTop: "10px", color: "var(--tertiary)" }}
            />
            <h2>Web Development</h2>
            <span>
              HTML, CSS, Javascript, React, Node, Express, PHP, Wordpress,
              Bootstrap, MaterialUI, StyledComponents, TailwindCSS
            </span>
          </div>
          <div className="item item2">
            <BsDatabase
              size={50}
              style={{ marginTop: "10px", color: "var(--tertiary)" }}
            />
            <h2>Database Management</h2>
            <span>MongoDB, MySQL, SQLite, Firebase</span>
          </div>
          <div className="item item3">
            <BiDesktop
              size={50}
              style={{ marginTop: "10px", color: "var(--tertiary)" }}
            />
            <h2>Software Development</h2>
            <span>C, C#, Java, Python, Unity Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
