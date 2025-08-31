import './Hero.css';
import Button from '../../ui/Button/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-left">
            <h3>Hi, I am Jeffrey Lau,</h3>
            <h1>Frontend Developer</h1>
            <p>Creating seamless React applications with modern UX</p>
            <Button />
          </div>

          <div className="hero-right">
            <img className="avater" src="/avater.jpg" alt="Avater" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;