import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} />
    </Routes>
  );
};

export default MainRoute;
