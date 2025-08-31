import './About.css';
import { FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <section id="About" className="about">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="about-grid">
          <img className="about-avater" src="/NF.jpeg" alt="About" />

          <div className="about-flex">
            <div className="about-highlights">
              <div className="about-experience">
                <FaLaptopCode size={20} />
                <h4>Experience</h4>
                <span>1+ Years Frontend Development</span>
              </div>
              
              <div className="about-education">
                <FaUserGraduate size={20} />
                <h4>Education</h4>
                <span>Bachelor's in Computer Science</span>
              </div>
            </div>

            <div className="about-story">
              <p>
                I am a passionate frontend developer with experience in building
                responsive and user-friendly web applications using React.js. I
                enjoy creating seamless user experiences and bringing designs to
                life with clean and efficient code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;