import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideNav/SideNav';
import Dashboars from './components/pages/Dashboars';
import Inventory from './components/pages/Inventory';
import Salesorder from './components/pages/Salesorder';
import Report from './components/pages/Report';
import Maincontent from './components/maincontent';


const Layout = () => (
  <>
    <Header />
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-4 ml-[300px]">
        <Outlet />
      </div>
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Dashboars/> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'salesorder', element: <Salesorder /> },
      { path: 'report', element: <Report/> },
    ],
  },
]);

function App() {
  return (
    <div className='bg-[#e8e8e8] flex flex-col min-h-screen'>
      <RouterProvider router={router} />
      {/* <Maincontent/> */}
    </div>
  );
}

export default App;
