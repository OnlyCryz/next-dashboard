import { UseOpenI } from 'hooks/useOpen';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';

interface NavbarProps {
  sidebarOpen: UseOpenI;
}

export const Navbar = ({ sidebarOpen }: NavbarProps) => {
  const { toggle } = sidebarOpen;

  return (
    <nav className="flex items-center gap-3 h-16 p-4 fixed top-0 z-50 w-full bg-white border-b border-gray-300">
      <button onClick={toggle} className="sm:hidden flex items-center justify-center w-12 h-12">
        <div className="w-8 h-8 flex items-center justify-center rounded-md hover:border hover:border-8-border hover:bg-9-hover">
          <Bars3BottomLeftIcon className="w-6 h-6 text-2-teal transition duration-75 hover:text-3-aquamarine" />
        </div>
      </button>
      <div>Navbar</div>
    </nav>
  );
};
