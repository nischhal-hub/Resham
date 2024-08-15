import PageHeader from '@/components/ui/page-header'
import DataTable from '@/components/table/data-table';
import {columns} from './_components/columns';
import getUsers from '@/services/apiUser';
import { useQuery } from '@tanstack/react-query';
export default function Report() {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
});

  return (
    
    <div className='w-full min-h-screen'>
      <PageHeader title="Users" />
      <DataTable
        data={user || []}
        columns={columns}
        filter={{ label: "Search User", id: "user_name" }}
        add={{
          component: "ADD_USER_MODAL",
          label: "Add User",
        }}
      />
    </div>
  )
}
