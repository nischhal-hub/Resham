import DataTable from '@/components/table/data-table'
import PageHeader from '@/components/ui/page-header'
import { columns } from '@/pages/suppliers/_components/columns'
import getSupplier from '@/services/apiSupplier'
import { useQuery } from '@tanstack/react-query'

const Supplier = () => {
    const { data: supplier, isLoading, error } = useQuery({
        queryKey: ["supplier"],
        queryFn: getSupplier,
    });

    return (
        <div className="w-full min-h-screen">
            <PageHeader title="Supplier" /> {/* Fixed title to "Supplier" */}
            <DataTable 
                data={supplier || []} 
                columns={columns} 
                filter={{ label: "Search", id: "supplierName" }} 
                add={{
                    component: "ADD_SUPPLIER_MODAL",
                    label: " Add Supplier",
                }} 
            />
        </div>
    )
}

export default Supplier
