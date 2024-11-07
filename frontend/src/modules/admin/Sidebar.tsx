import react from 'react';
import Dropdown from '../../components/Dropdown';

interface SidebarProps {
  className?: string;
  isSidebarOpen: boolean;
}

const Sidebar: react.FC<SidebarProps> = ({ className, isSidebarOpen }) => {
  return (
    <aside
      className={`${className}  flex flex-col bg-white dark:bg-gray-800 fixed inset w-3/4 md:w-auto h-dvh z-10 md:z-auto md:relative`}
    >
      {isSidebarOpen && (
        <img className='h-8 my-4' alt='logo' src='logos/logo.svg' />
      )}

      {/* dropdown */}
      <div className='p-2 flex overflow-y-auto flex-col gap-1.5 my-4 '>sidebar</div>
    </aside>
  );
};

export default Sidebar;
