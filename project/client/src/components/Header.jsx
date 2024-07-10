import { CiSearch } from "react-icons/ci";
import logo from "/assets/logo-horizontal.png";

export default function Header() {
  return (
    <nav className=" w-full h-16 z-40">
      <div className="bg-white px-4 py-4 shadow-sm w-full flex items-center text-xl justify-between fixed top-0">
        <div>
        <img src={logo} alt="Logo" className="w-40 mr-2" />
        </div>
        <div className="flex items-center gap-x-[24px] ">
          <div className="relative w-full max-w-md ">
            <input
              type="text"
              className="w-64 h-[36px] px-4 py-1 pl-10 rounded shadow text-md focus-visible:ring-0 focus-visible:ring-offset-1 focus-visible:outline-primary"
              placeholder="Search..."
              aria-label="Search"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                className="p-1 text-black"
                aria-label="Search button"
              >
                <CiSearch />
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
