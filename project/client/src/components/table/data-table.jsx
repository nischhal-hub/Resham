import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { DataTablePagination } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import ModalButton from "../globals/ModalButton";
export default function DataTable({ columns, data, title, filter, add }) {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters
        },
    });

    return (
        <div className="rounded-md bg-white shadow-md ">
            {title && <h2 className="text-md font-semibold p-4 ">{title}</h2>}
            <div className="flex justify-between">
                {filter && (
                    <div className="flex items-center py-4">
                        <Input
                            placeholder={filter.label}
                            value={table.getColumn(filter.id)?.getFilterValue() ?? ""}
                            onChange={(event) => {
                                const newValue = event.target.value;
                                table.getColumn(filter.id)?.setFilterValue(newValue);
                                console.log(`Filter value set to: ${newValue}`); // Debugging line
                            }}
                            className="max-w-sm ml-4"
                        />
                    </div>
                )}
                {add && <ModalButton modal={{ ...add }} className={"m-4"} />}
            </div>

            <Table className="rounded-md">
                <TableHeader className="bg-primary">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <DataTablePagination table={table} />
        </div>
    );
}
