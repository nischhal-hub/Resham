import React from 'react'
import ModalButton from '@/components/globals/ModalButton'

export default function Inventory() {
  return (
    <div className='w-full min-h-screen'>
      <h2>Inventory</h2>
      <ModalButton variant="destructive" size="sm" modal={{label:"Add Product", component:"ADD_PRODUCT_MODAL"}}/>
      
    </div>
  )
}
