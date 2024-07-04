// components/SideNav/SideNav.js
import { FaCog } from "react-icons/fa";
import {
  MdOutlineDashboardCustomize,
  MdOutlineInventory2,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    id: 2,
    title: "Inventory",
    path: "/inventory",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 1,
    title: "Sales Order",
    path: "/salesorder",
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: 1,
    title: "Report",
    path: "/report",
    icon: <BsGraphUp />,
  },
];

export default function SideBar() {
  return (
    <div className="w-72 h-full">
      <div className="fixed h-full w-72 bg-background px-6">
      <div className="my-4">
        <h1 className="text-[#595c61] text-xl font-bold">General</h1>
      </div>
      <hr />
      <ul className="mt-3 text-[#595c61] font-semibold">
        {sidebarData.map((item) => (
          <li key={item.id} className="mb-2 rounded py-2 ">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "p-2 flex items-center bg-primary text-white rounded-sm hover:pl-2 duration-300 ease-in-out"
                  : "py-2 flex items-center hover:pl-2 duration-300 ease-in-out hover:bg-gray-200"
              }
            >
              <div className="h-auto mr-2 my-auto ">{item.icon}</div>
              {item.title}
            </NavLink>
          </li>
        ))}

      </ul>
      <div className="mt-[32px]">
        <div className="my-2 mb-4">
          <h4 className="text-[#595c61] text-xl">Support</h4>
        </div>
      </div>
      <ul className="mt-3 text-[#595c61] font-semibold">
        <li className="mb-2 rounded hover:shadow-2xl py-2">
          <a href="#" className="px-2 flex items-center">
            <IoIosHelpCircleOutline className="h-6 mr-2" />
            Help
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow-2xl py-2">
          <a href="#" className="px-2 flex items-center">
            <FaCog className="h-6 mr-2" />
            Setting
          </a>
        </li>
      </ul>
      </div>
     
    </div>
  );
}
