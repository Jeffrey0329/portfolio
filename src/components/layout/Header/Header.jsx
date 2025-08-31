import './Header.css';
import { Link } from 'react-scroll';
import ThemeToggle from '../../ui/ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <span className="logo">J</span>
      </div>

      <div className="header-middle">
        <nav>
          <Link 
            to="About" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            About
          </Link>

          <Link 
            to="Experience" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            Experience
          </Link>
          
          <Link 
            to="Project" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            Project
          </Link>
          
          <Link 
            to="Contact" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="header-right">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;