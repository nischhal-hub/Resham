import { Divide } from "lucide-react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { HiDotsVertical } from "react-icons/hi";

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
                <div className="flex items-center justify-center gap-x-2">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="outline" className="py-1 px-1">
                                        <HiDotsVertical />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-fit">
                                    <DropdownMenuItem>
                                        <DropdownMenuLabel onClick={() => console.log(row.original)}>Delete</DropdownMenuLabel>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <DropdownMenuLabel>Edit</DropdownMenuLabel>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                </div>
            );
        },
    },
];
