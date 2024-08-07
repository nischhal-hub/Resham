import { Divide } from "lucide-react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import DeleteModal from "@/components/globals/DeleteModal";
import ModalButton from "@/components/globals/ModalButton";
import { FaRegEdit } from "react-icons/fa";
export const columns = [
    {
        id: "categoryId",
        accessorKey: "categoryId",
        header: () => <div className="font-bold text-md text-muted">S.N</div>,
    },
    {
        id: "categoryName",
        accessorKey: "categoryName",
        header: ({ column }) => {
            console.log(column)
            const isSorted = column?.getIsSorted();
            const toggleSorting = column?.toggleSorting;

            return (
                <div className="flex items-center gap-x-2">
                    <p className="font-bold text-md text-muted">Channel</p>
                    {toggleSorting && (
                        <p
                            className="font-bold text-md text-muted p-1 cursor-pointer"
                            onClick={() => toggleSorting(isSorted === "asc")}
                        >
                            <ArrowUpDown size={16} />
                        </p>
                    )}
                </div>
            );
        },
    },
    {
        id: "noOfProducts",
        accessorKey: "noOfProducts",
        header: () => <div className="font-bold text-md text-muted">No of Products</div>,
    },
    {
        id: "actions",
        header: () => <div className="font-bold text-md text-muted">Actions</div>,
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-x-2">
                    <ModalButton 
                    modal={
                        {label:"Edit Category", 
                        component:"EDIT_CATEGORY_MODAL",
                        icon:<FaRegEdit size={20}/>}}
                    editId={row.original.categoryId} 
                    className={"flex items-center justify-center"}/>
                    <DeleteModal className={'px-3 py-2'} id={row.original.categoryId} deleteKey="CATEGORY"/>
                </div>
            );
        },
    },
];
