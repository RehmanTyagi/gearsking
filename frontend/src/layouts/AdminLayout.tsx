import { Outlet } from 'react-router-dom';
import Navbar from '../modules/admin/Navbar';
import Sidebar from '../modules/admin/Sidebar';
import { useState } from 'react';
const AdminLayout = () => {
  const [isSidebarOpen, SetIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    SetIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-gray-100 dark:text-white/80 overflow-x-hidden md:overflow-auto h-dvh md:grid transition-all duration-500 dark:bg-gray-900`}
      style={{
        gridTemplateColumns: isSidebarOpen ? '15% 1fr' : '5% 1fr',
        gridTemplateRows: 'auto 1fr',
      }}
    >
      <div className='md:row-span-2'>
        <div
          onClick={toggleSidebar}
          className={`${
            isSidebarOpen ? '' : 'hidden'
          } backdrop-blur-sm fixed w-dvw h-dvh inset bg-black/20 md:hidden`}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          className={`${
            isSidebarOpen
              ? '-translate-x-0'
              : '-translate-x-full md:transform-none'
          } transition-transform duration-200`}
        />
      </div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
