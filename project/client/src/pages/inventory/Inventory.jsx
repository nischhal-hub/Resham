import React from 'react'
import ModalButton from '@/components/globals/ModalButton'
import PageHeader from '@/components/ui/page-header'

export default function Inventory() {
  return (
    <div className='w-full min-h-screen'>
      <PageHeader title="Inventory" />
      <ModalButton variant="destructive" size="sm" modal={{label:"Add Product", component:"ADD_PRODUCT_MODAL"}}/>
      
    </div>
  )
}
