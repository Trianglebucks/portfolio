import { FaFacebook, FaTwitter } from "react-icons/fa";

import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://web.facebook.com/william.pabor/" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/donpaborrr" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/donpaborrr/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/william-pabor-402539240/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <p>&copy; 2023 DonPabor</p>
    </div>
  );
};
export default Footer;
