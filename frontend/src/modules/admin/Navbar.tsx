import react from 'react';
import { BiSolidGrid } from 'react-icons/bi';
import Avatar from '../../components/Avatar';
import AdminNotifcation from '../../components/AdminNotification';
import Button from '../../components/Button';
import DarkMode from '../../components/DarkMode';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/theme';

interface NavbarProps {
  toggleSidebar?: () => void;
  className?: string;
}
const Navbar: react.FC<NavbarProps> = ({ toggleSidebar, className }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${className} bg-white items-center dark:bg-gray-800 flex justify-between p-2 md:p-4`}
    >
      <Button onClick={toggleSidebar}>
        <BiSolidGrid />
      </Button>
      <Link to='/admin'>
        <img
          alt='brand logo'
          src={isDarkMode ? 'logos/logo-white.svg' : 'logos/logo.svg'}
          className='h-8 md:h-10'
        />
      </Link>
      <div className='flex items-center gap-3 md:gap-4'>
        <DarkMode />
        <AdminNotifcation />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
