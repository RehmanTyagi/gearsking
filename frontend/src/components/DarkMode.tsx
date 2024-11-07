import { useTheme } from '../context/theme';
import { BiSun } from 'react-icons/bi';
import Button from './Button';

const DarkMode = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <Button onClick={toggleDarkMode}>
      <BiSun />
    </Button>
  );
};

export default DarkMode;
