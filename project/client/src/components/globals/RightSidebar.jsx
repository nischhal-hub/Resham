import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";
import { HiDotsVertical } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TiDocumentAdd } from "react-icons/ti";
import { FaBox } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { PiExportFill } from "react-icons/pi";
import useModal from "@/hooks/useModal";
import getModal from "../modals/data";

const RightSidebar = () => {
  const {isOpen,close,open} = useModal();
  const [modalKey, setModalKey] = useState("");
  
  useEffect(() => {
    
    const down = (e) => {
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setModalKey('ADD_PRODUCT_MODAL');
        open();
      }
      if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setModalKey('CREATE_ORDER_MODAL');
        open();
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setModalKey('ADD_SUPPLIER_MODAL');
        open();
      }
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setModalKey('EXPORT_MODAL');
        open();
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="w-64 fixed h-full bg-white -top-2 right-0 mt-20">
      <div className="profile-section p-4 flex justify-start pb-6 border-b-2">
        <div className="flex justify-start items-center gap-10">
          <div className="flex items-center justify-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p className="text-md font-bold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-600">ADMIN</p>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" className="py-1 px-1">
                  <HiDotsVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuItem>
                  <DropdownMenuLabel>Profile</DropdownMenuLabel>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <DropdownMenuLabel>Logout</DropdownMenuLabel>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-md font-semibold">Quick actions</h2>
        <div>
          <ul className="flex flex-col gap-2">
          {[
            { label: 'Add product', icon: <FaBox size={20} />, command: 'Ctrl + P' },
            { label: 'Create Order', icon: <TiDocumentAdd size={20} />, command: 'Ctrl + B' },
            { label: 'Add Supplier', icon: <FaTruck size={20} />, command: 'Ctrl + K' },
            { label: 'Export', icon: <PiExportFill size={20} />, command: 'Ctrl + S' },
          ].map((item, index) => (
            <li key={index}>
              <div className="flex items-center justify-between text-gray-700 mt-3">
                <p className="flex items-center gap-2 font-semibold">
                  {item.icon}
                  {item.label}
                </p>
                <p className="text-sm">{item.command}</p>
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>

      {
        isOpen && <Modal close={close}>{getModal(modalKey)}</Modal>
      }
    </div>
  );
};

export default RightSidebar;
