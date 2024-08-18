import { ArrowUpDown } from "lucide-react";
import DeleteModal from "@/components/globals/DeleteModal";
import ModalButton from "@/components/globals/ModalButton";
import { FaRegEdit } from "react-icons/fa";

export const columns = [
    {
        id: "productId",
        accessorKey: "productId",
        header: () => <div className="font-bold text-md text-muted">S.N</div>,
    },
    {
        id: "productName",
        accessorKey: "productName",
        header: ({ column }) => {
            const isSorted = column?.getIsSorted();
            const toggleSorting = column?.toggleSorting;

            return (
                <div className="flex items-center gap-x-2">
                    <p className="font-bold text-md text-muted">Product Name</p>
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
        id: "productPrice",
        accessorKey: "productPrice",
        header: () => <div className="font-bold text-md text-muted">Product Price</div>,
    },
    {
        id: "productCategory",
        accessorKey: "categoryName",
        header: () => <div className="font-bold text-md text-muted">Category</div>,
    },
    {
        id: "productImage",
        accessorKey: "productImage",
        header: () => <div className="font-bold text-md text-muted">Image</div>,
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-x-2">
                    <img
                        src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/productImage/public/${row.original.productImage}`}
                        width={60}
                        height={60}
                        alt={row.original.productName}
                    />
                </div>
            );
        },
    },
    {
        id: "supplierName",
        accessorKey: "supplierName",
        header: () => <div className="font-bold text-md text-muted">Supplier</div>,
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
                            component: "EDIT_PRODUCT_MODAL",
                            icon: <FaRegEdit size={20} />,
                        }}
                        editId={row.original.productId}
                        className={"flex items-center justify-center"}
                    />
                    <DeleteModal
                        className={'px-3 py-2'}
                        id={row.original.productId}
                        deleteKey="PRODUCT"
                    />
                </div>
            );
        },
    },
];
