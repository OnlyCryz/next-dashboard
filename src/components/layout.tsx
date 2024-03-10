import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { Navbar } from './navbar';
import { useOpen } from 'hooks/useOpen';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const sidebarOpen = useOpen({});
  return (
    <div className="flex flex-col h-screen">
      <Navbar sidebarOpen={sidebarOpen} />
      <div className="flex flex-row h-full">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className="p-4 sm:ml-64 mt-16 w-full">{children}</div>
      </div>
    </div>
  );
};
