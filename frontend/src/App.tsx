import { BrowserRouter as Router } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
// import MainRoutes from './routes/MainRoutes';
import { useEffect } from 'react';
import { useTheme } from './context/theme';

function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <AdminRoutes />
      {/* <MainRoutes /> */}
    </Router>
  );
}

export default App;
