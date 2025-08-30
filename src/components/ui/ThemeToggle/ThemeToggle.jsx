import './ThemeToggle.css';
import { useTheme } from '../../../hook/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <span className="toggle-track">
        <span className="toggle-thumb"></span>
      </span>
    </button>
  );
};

export default ThemeToggle;