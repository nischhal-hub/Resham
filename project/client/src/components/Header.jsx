import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className=" w-full h-16">
      <div className="bg-white px-4 py-3 shadow-lg w-full flex items-center text-xl justify-between fixed top-0">
        <div>
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        </div>
        <div className="flex items-center gap-x-[24px] ">
          <div className="relative w-full max-w-md ">
            <input
              type="text"
              className="w-[256px] h-[36px] px-4 py-1 pl-10 rounded shadow"
              placeholder="Search..."
              aria-label="Search"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                className="p-1 text-black"
                aria-label="Search button"
              >
                <FaSearch />
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}