import { Link } from 'react-scroll';
import './Header.css';
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
            to="Project" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            Projects
          </Link>
          
          <Link 
            to="About" 
            spy={true} 
            smooth={true} 
            duration={500}
          >
            About
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