import { useState } from 'react';
import CreateForm from './_components/CreateForm';
import UserTable from './_components/UserTable';
import ModalButton from '@/components/globals/ModalButton';

export default function Report() {
  const [showForm,setShowForm]=useState(false);

  return (
    
    <div className='w-full min-h-screen'>
      <UserTable/>
      <ModalButton modal={{label:"Add New User", component:"ADD_USER_MODAL"}}/>
    </div>
  )
}
