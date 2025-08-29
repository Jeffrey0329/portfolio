import './Timeline.css'

const Timeline = () => {
  const timelineData = [
    {
      year: "Jan 2025 - July 2025",
      title: "AI-Powered Customer Support Platform",
      subtitle: "Techcare Consulting - Capstone Project",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "TXT"],
      description: "Led development of a hybrid AI-human customer support system featuring Retrieval-Augmented Generation (RAG), speech-to-text (STT), and text-to-speech (TTS) capabilities. Implemented multi-tier escalation workflow and real-time dashboard analytics for SMEs.",
      liveUrl: "https://chat.elvificent.com/",
      githubUrl: "https://github.com/Elvificent/ticket"
    },
    {
      year: "Jan 2025 - Apr 2025", 
      title: "Wedding Planning Booking System",
      subtitle: "MyLoveWedding - Semester Project",
      technologies: ["React.js", "Spring Boot", "MySQL", "RAG"],
      description: "Designed and implemented a client-side wedding planning platform with venue selection, package customization, and simulated payment processing. Utilized local storage for data persistence and text files for dynamic content loading.",
      liveUrl: "https://mylovewedding.vercel.app/index.html",
      githubUrl: "https://github.com/Elvificent/mylovewedding"
    },
  ];

  return (
    <section className="timeline">
      <h2>Featured Projects</h2>
      
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            
            <div className="timeline-dot"></div>
            
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <div className="tech-tags">
                {item.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p>{item.description}</p>
              <div className="project-links">
                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;