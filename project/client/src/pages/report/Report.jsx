import { useState } from 'react';
import CreateForm from './_components/CreateForm';
import UserTable from './_components/UserTable';
import ModalButton from '@/components/globals/ModalButton';

export default function Report() {
  const [showForm,setShowForm]=useState(false);

  return (
    
    <div className='w-full ml-64 min-h-screen'>
      <UserTable/>
      <ModalButton modal={{label:"Add New User", component:"ADD_USER_MODAL"}}/>
      <ModalButton modal={{label:"Add New Product", component:"ADD_PRODUCT_MODAL"}}/>
      <ModalButton />
      {/* <button className='bg-blue-700 px-4 py-2 rounded-md text-cyan-50 shadow-md outline-none w-1/2 text-center  mx-[25vw] mt-[5vh]  ' onClick={()=>setShowForm(form=>!form)}>
        Add new user
      </button>
      {
        showForm && <CreateForm/>
      } */}
    </div>
  )
}