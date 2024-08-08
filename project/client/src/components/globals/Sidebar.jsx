// components/SideNav/SideNav.js
import { FaCog, FaRegUser, FaUser } from "react-icons/fa";
import {
  MdOutlineDashboardCustomize,
  MdOutlineInventory2,
} from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { RiTruckLine } from "react-icons/ri";
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
    id: 3,
    title: "Sales Order",
    path: "/salesorder",
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: 4,
    title: "User",
    path: "/user",
    icon: <FaRegUser/>,
  },
  {
    id: 5,
    title: "Category",
    path: "/category",
    icon: <TbCategoryPlus />,
  },
  {
    id: 6,
    title: "Suppliers",
    path: "/supplier",
    icon: <RiTruckLine />,
  },
];

export default function SideBar() {
  return (
    <div className="fixed w-64 h-full">
      <div className="block h-full bg-background px-6">
      <div className="pt-4 pb-3">
        <h1 className="text-slate-600 text-md font-bold">General</h1>
      </div>
      <hr />
      <ul className="mt-3 text-slate-600">
        {sidebarData.map((item) => (
          <li key={item.id} className=" rounded py-1">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "p-2 flex items-center bg-primary text-white font-bold rounded-sm hover:pl-2 duration-300 ease-in-out"
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
