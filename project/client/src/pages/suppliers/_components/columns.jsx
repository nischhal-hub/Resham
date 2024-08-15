import { ArrowUpDown } from "lucide-react";
import DeleteModal from "@/components/globals/DeleteModal";
import ModalButton from "@/components/globals/ModalButton";
import { FaRegEdit } from "react-icons/fa";

export const columns = [
    {
        id: "supplierId",
        accessorKey: "supplierId",
        header: () => <div className="font-bold text-md text-muted">S.N</div>,
    },
    {
        id: "supplierName",
        accessorKey: "supplierName",
        header: ({ column }) => {
            const isSorted = column?.getIsSorted();
            const toggleSorting = column?.toggleSorting;

            return (
                <div className="flex items-center gap-x-2">
                    <p className="font-bold text-md text-muted">Supplier Name</p>
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
        id: "supplierContact",
        accessorKey: "supplierContact",
        header: () => <div className="font-bold text-md text-muted">Supplier Contact</div>,
    },
    {
        id: "supplierEmail",
        accessorKey: "supplierEmail",
        header: () => <div className="font-bold text-md text-muted">Supplier Email</div>,
    },
    {
        id: "actions",
        header: () => <div className="font-bold text-md text-muted">Actions</div>,
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-x-2">
                    <ModalButton
                        modal={{
                            label: "Edit Supplier",
                            component: "EDIT_SUPPLIER_MODAL",
                            icon: <FaRegEdit size={20} />,
                        }}
                        editId={row.original.supplierId}
                        className={"flex items-center justify-center"}
                    />
                    <DeleteModal
                        className={'px-3 py-2'}
                        id={row.original.supplierId}
                        deleteKey="SUPPLIER"
                    />
                </div>
            );
        },
    },
];
