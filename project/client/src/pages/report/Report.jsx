import { useState } from 'react';
import CreateForm from './_components/CreateForm';
import UserTable from './_components/UserTable';

export default function Report() {
  const [showForm,setShowForm]=useState(false);

  return (
    
    <div className='w-full ml-64 min-h-screen'>
      <UserTable/>
      <button className='bg-blue-700 px-4 py-2 rounded-md text-cyan-50 shadow-md outline-none w-1/2 text-center  mx-[25vw] mt-[5vh]  ' onClick={()=>setShowForm(form=>!form)}>
        Add new user
      </button>
      {
        showForm && <CreateForm/>
      }
    </div>
  )
}
