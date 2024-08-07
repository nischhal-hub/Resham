import DataTable from '@/components/table/data-table'
import PageHeader from '@/components/ui/page-header'
import React from 'react'
import {columns} from '@/pages/category/_components/columns'
import { getCategory } from '@/services/apiCategory'
import { useQuery } from '@tanstack/react-query'
const Category = () => {
    const {data:category, isLoading, error} = useQuery({
        queryKey: ["category"],
        queryFn: getCategory
    });
    return (
        <div className="w-full min-h-screen">
            <PageHeader title="Category" />
            <DataTable 
            data={category||[]} 
            columns={columns} 
            filter={{label:"Search Category", id:"categoryName"}}
            add={
                {
                    component: "ADD_CATEGORY_MODAL",
                    label: "Add Category",
                }
            }/>
        </div>
  )
}

export default Category