import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path='category' element={<h1>category</h1>} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
