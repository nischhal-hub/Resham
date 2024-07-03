// components/SideNav/SideNav.js
import { FaCog } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="w-[292px] bg-[#f4f5fc] fixed h-[837px] px-4 py-2 mt-[62px]">
      <div className="my-2 mb-4">
        <h1 className="text-[#595c61] text-xl">General</h1>
      </div>
      <hr />
      <ul className="mt-3 text-[#595c61] font-semibold">
        <li className="mb-2 rounded hover:shadow-2xl py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'p-2 flex items-center bg-blue-800 text-white rounded-sm' : 'py-2 flex items-center'
            }
          >
            <MdOutlineDashboardCustomize className="h-6 mr-2" />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow-2xl py-2">
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive ? 'p-2 flex items-center bg-primary text-white rounded-sm' : 'py-2 flex items-center'
            }
          >
            <MdOutlineInventory2 className="h-6 mr-2" />
            Inventory
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow-2xl py-2">
          <NavLink
            to="/salesorder"
            className={({ isActive }) =>
              isActive ? 'p-2 flex items-center bg-blue-800 text-white rounded-sm' : 'py-2 flex items-center'
            }
          >
            <AiOutlineShoppingCart className="h-6 mr-2" />
            Sales Order
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow-2xl py-2">
          <NavLink
            to="/report"
            className={({ isActive }) =>
              isActive ? 'p-2 flex items-center bg-blue-800 text-white rounded-sm' : 'py-2 flex items-center'
            }
          >
            <BsGraphUp className="h-6 mr-2" />
            Report
          </NavLink>
        </li>
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
  );
}
