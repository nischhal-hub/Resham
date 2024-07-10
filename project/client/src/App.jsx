import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideNav/SideNav";
import Dashboard from "./components/pages/Dashboard";
import Inventory from "./components/pages/Inventory";
import Salesorder from "./components/pages/Salesorder";
import Report from "./components/pages/Report";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const querryClient= new QueryClient({
  defaultOptions: {
    queries:{
      staleTime:10*1000
    }
  }
})
const Layout = () => (
  <>
      <Header />
    <div className="flex w-screen overflow-hidden">
      <div className="flex w-full overflow-hidden">
        <SideBar />
        <div className="flex p-4 bg-background w-full overflow-y-scroll">
          <ScrollRestoration />
          <Outlet />
        </div>
      </div>
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "inventory", element: <Inventory /> },
      { path: "salesorder", element: <Salesorder /> },
      { path: "report", element: <Report /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={querryClient} >
    <div className="bg-[#e8e8e8] flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
    <Toaster position="top-center"
      gutter={12}
      containerStyle={{margin:"8px"}}
      toastOptions={
        {
          success:{
            duration:3000,
          },
          error:{
            duration:5000,
          },
          style:{
            fontSize:"16px",
            maxWidth:"500px",
            padding:"16px 24px",
            backgroundColor:"var(--color-grey-0)",
            color:"var(--color-grey-700)",
          }
        }
      }/>
    </QueryClientProvider>
  );
}

export default App;
