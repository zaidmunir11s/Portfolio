import { useEffect, useState } from 'react';
import { Router } from './utils/route';
import { useTheme } from './utils/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  const { theme } = useTheme();
  const [themeState, setThemeState] = useState(null);

  useEffect(() => {
    if (theme === 'dark') {
      setThemeState('dark');
    } else {
      setThemeState('light');
    }
  }, [theme]);

  useEffect(() => {
    if (themeState === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeState, theme]);

  return (
    <div className="bg-[#F3F2F9] dark:bg-[#2B2B33] min-h-screen h-full w-full">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
