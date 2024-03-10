import { UseOpenI } from 'hooks/useOpen';
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  sidebarOpen: UseOpenI;
}
export const Sidebar = ({ sidebarOpen }: SidebarProps) => {
  const { isOpen } = sidebarOpen;
  const router = useRouter();

  return (
    <aside
      className={`
      fixed top-0 left-0 z-40 w-64 h-screen pt-20 border-8-border bg-white border-r transition-transform -translate-x-full 
      ${isOpen ? 'translate-x-0' : 'sm:translate-x-0'}`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="flex flex-col gap-3 font-medium">
          <li>
            <Link href="/">
              <div className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-9-hover group cursor-pointer ${router.pathname === '/' ? 'bg-gray-200' : ''}`}>
                <HomeIcon className="w-6 h-6 text-3-aquamarine transition duration-75 group-hover:text-4-azure" />
                <span className="ms-3">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <div className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-9-hover group cursor-pointer ${router.pathname.startsWith('/products') ? 'bg-gray-200' : ''}`}>
                <ShoppingCartIcon className="w-6 h-6 text-3-aquamarine transition duration-75 group-hover:text-4-azure" />
                <span className="ms-3">Productos</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
