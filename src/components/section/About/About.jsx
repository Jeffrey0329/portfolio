import './About.css';

const About = () => {
  return (
    <section id="About" className="about">
      <h2>About Me</h2>

      <div className="about-content">
        <h3>My Story</h3>
        <div className="about-story">
          <p className="paragraph lead">
            My coding journey began with a happy accident in my first college web development course.
          </p>
          
          <p className="paragraph">
            The project requirements simply asked for a website built using web builders like Wix. 
            However, driven by curiosity, I dove headfirst into HTML, CSS and JavaScript
            to build everything from scratch. That first project - built against the "easy path" instructions -
            ignited my passion for frontend development and taught me the joy of creating with code.
          </p>

          <p className="paragraph">
            From there, I gradually delved into React.js, React Native and Next.js, constantly 
            pushing beyond assignment requirements to build more complex and meaningful projects. 
            Throughout college, I naturally took on roles as both UI/UX designer and frontend developer, 
            working on various projects including an AI customer support platform and a wedding booking system.
          </p>

          <p className="paragraph">
            These experiences taught me valuable lessons that go beyond technical skills:
          </p>

          <ul className="story-lessons">
            <li>
              <b>Writing clean, understandable code</b> - Not just efficient but simple and maintainable 
              so others can easily understand and build upon it
            </li>
            <li>
              <b>Problem-solving through code reading</b> - Developing the ability to understand existing 
              codebases and debug complex issues
            </li>
            <li>
              <b>Implementing design patterns</b> - Learning to add new features without breaking existing 
              functionality and properly separating concerns between components and functions
            </li>
          </ul>

          <p className="paragraph-quote">
            What started as a "mistake" in following project instructions turned into my greatest strength -
            the willingness to explore, learn deeply, and build things properly rather than taking shortcuts.
          </p>

          <p className="paragraph-quote">
            I particularly enjoy frontend development because I can immediately see how my creations 
            impact user experience. Watching an idea evolve from design mockups to interactive interfaces 
            that genuinely help people continues to fuel my passion for this field.
          </p>
        </div>

        <h3>Technical Skills</h3>
        <div className="skills-section">
          <div className="skills-grid">
            
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <div className="skills-list">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript (ES6+)</span>
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
                <span>Cloudflare Deployment</span>
                <span>Figma (UI/UX)</span>
                <span>Postman</span>
                <span>Docker</span>
                <span>n8n</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;