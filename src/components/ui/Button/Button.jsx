import './Button.css';

const Button = () => {
  
  const handleDownload = () => {
    window.open('/', '_blank');
  };

  return (
    <button onClick={handleDownload} className="download-cv">Download CV</button>
  );
};

export default Button;