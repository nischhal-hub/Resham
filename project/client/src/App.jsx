import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "@/components/globals/Header";
import SideBar from "@/components/globals/Sidebar";
import Dashboard from "@/pages/dashboard/Dashboard";
import Inventory from "@/pages/inventory/Inventory";
import Salesorder from "@/pages/sales-order/Salesorder";
import User from "@/pages/users/users";
import Footer from "@/components/globals/Footer";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RightSidebar from "./components/globals/RightSidebar";
import Category from "./pages/category/Category";
import Suppliers from "./pages/suppliers/Suppliers";
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
    <div className="flex overflow-hidden">
      <div className="flex w-full">
        <SideBar />
        <div className="flex p-4 bg-background w-full mx-auto mr-64 ml-64">
          <ScrollRestoration />
          <Outlet />
        </div>
        <RightSidebar />
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
      { path: "user", element: <User /> },
      { path: "category", element: <Category /> },
      { path: "supplier", element: <Suppliers /> },
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
