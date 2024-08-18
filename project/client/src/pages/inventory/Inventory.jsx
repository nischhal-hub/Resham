import React from 'react'
import ModalButton from '@/components/globals/ModalButton'
import PageHeader from '@/components/ui/page-header'
import { getProducts } from '@/services/apiProduct'
import { useQuery } from '@tanstack/react-query'
import DataTable from '@/components/table/data-table'
import { columns } from './_components/column'

export default function Inventory() {
  const {data:products,isFetching} = useQuery({
    queryKey: ["product"],
    queryFn: getProducts
  })

  return (
    <div className='w-full min-h-screen'>
      <PageHeader title="Inventory" />
      <DataTable 
            data={products || []} 
            columns={columns} 
            filter={{label:"Search Product", id:"productName"}}
            add={
                {
                    component: "ADD_PRODUCT_MODAL",
                    label: "Add Product",
                }
            }/>
    </div>
  )
}
