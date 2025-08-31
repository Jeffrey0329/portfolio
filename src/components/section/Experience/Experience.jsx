import './Experience.css';

const Experience = () => {
  return (
    <section id="Experience" className="experience">
      <h2>Experience</h2>

        <div className="skills-section">
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <div className="skills-list">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>React Native</span>
                <span>Next.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Backend Development</h4>
              <div className="skills-list">
                <span>C++</span>
                <span>Node.js</span>
                <span>Spring Boot</span>
                <span>Java</span>
                <span>RESTful APIs</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Tools & Others</h4>
              <div className="skills-list">
                <span>Git & GitHub</span>
                <span>Figma (UI/UX)</span>
                <span>Postman</span>
                <span>n8n</span>
                <span>Cloudflare</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Experience;