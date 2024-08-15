import { ArrowUpDown } from "lucide-react";
import DeleteModal from "@/components/globals/DeleteModal";
import ModalButton from "@/components/globals/ModalButton";
import { FaRegEdit } from "react-icons/fa";
import React from "react";

export const columns = [
    {
        id: "user_id",
        accessorKey: "user_id",
        header: () => <div className="font-bold text-md text-muted">S.N</div>,
    },
    {
        id: "user_name",
        accessorKey: "user_name",
        header: ({ column }) => {
            const isSorted = column?.getIsSorted();
            const toggleSorting = column?.toggleSorting;

            return (
                <div className="flex items-center gap-x-2">
                    <p className="font-bold text-md text-muted">User Name</p>
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
        id: "user_contact",
        accessorKey: "user_contact",
        header: () => <div className="font-bold text-md text-muted">User Contact</div>,
    },
    {
        id: "user_role",
        accessorKey: "user_role",
        header: () => <div className="font-bold text-md text-muted">User Role</div>,
    },
    {
        id: "actions",
        header: () => <div className="font-bold text-md text-muted">Actions</div>,
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-x-2">
                    <ModalButton
                        modal={{
                            label: "Edit User",
                            component: "EDIT_USER_MODAL",
                            icon: <FaRegEdit size={20} />,
                        }}
                        editId={row.original.user_id}
                        className={"flex items-center justify-center"} variant={undefined} size={undefined}                    />
                    <DeleteModal
                        className={'px-3 py-2'}
                        id={row.original.user_id}
                        deleteKey="USERS" variant={undefined} size={undefined}/>
                </div>
            );
        },
    },
];
