import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/zigno69/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://github.com/Jeffrey0329" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/jeffrey-lau-34769830b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
      <span>Copyright © 2025 Jeffrey Lau.</span><br />
      <span>All rights reserved.</span>
    </footer>
  );
};

export default Footer;