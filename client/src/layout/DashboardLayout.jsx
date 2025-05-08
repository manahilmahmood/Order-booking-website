// layouts/DashboardLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
    <div className="w-full">
      <Header />
      <main className="ml-64 p-6 w-full">
        <Outlet />
      </main>
    </div>
    </div>
  );
};

export default DashboardLayout;
