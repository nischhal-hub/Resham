import { Divide } from "lucide-react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { filterFns } from "@tanstack/react-table";

//* Custom functions can be written here in row section using cell for a column.
//* look at the last object for example.
//* for reference: https://ui.shadcn.com/docs/components/data-table

export const columns = [
    {
        accessorKey: "id",
        header: () => <div className="font-bold text-md text-muted">S.N</div>,
    },
    {
        accessorKey: "channel",
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
                            <ArrowUpDown size={16}/>
                        </p>
                    )}
                </div>
            );
        },
    },
    {
        accessorKey: "draft",
        header: () => <div className="font-bold text-md text-muted">Draft</div>,
    },
    {
        accessorKey: "packed",
        header: () => <div className="font-bold text-md text-muted">Packed</div>,
    },
    {
        accessorKey: "shipped",
        header: () => <div className="font-bold text-md text-muted">Shipped</div>,
    },
    {
        accessorKey: "invoiced",
        header: () => <div className="font-bold text-md text-muted">Invoiced</div>,
    },
    {
        id: "actions",
        header: () => <div className="font-bold text-md text-muted">Actions</div>,
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-x-2">
                    <button
                        onClick={() => {
                            console.log(row.original);
                        }}
                    >
                        <Divide className="w-4 h-4" />
                    </button>
                </div>
            );
        },
    },
];
