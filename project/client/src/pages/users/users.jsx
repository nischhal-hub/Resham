import { useState } from 'react';
import CreateForm from './_components/CreateForm';
import UserTable from './_components/UserTable';
import ModalButton from '@/components/globals/ModalButton';
import PageHeader from '@/components/ui/page-header'

export default function Report() {

  return (
    
    <div className='w-full min-h-screen'>
      <PageHeader title="Users" />
      <UserTable/>
      <ModalButton modal={{label:"Add New User", component:"ADD_USER_MODAL"}}/>
    </div>
  )
}
