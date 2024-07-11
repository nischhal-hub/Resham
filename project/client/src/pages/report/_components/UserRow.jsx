import { deleteUsers } from '@/services/apiUser';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function UserRow({ user }) {
  const queryClient = useQueryClient();
  const { user_id, user_name, user_contact, user_role, user_address } = user;

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      toast.success('Data deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="grid grid-cols-[0.6fr_1.5fr_1.5fr_1fr_1fr_1fr] gap-x-6 items-center py-3.5 px-6 border border-b-2">
      <p className="text-[1rem] font-semibold text-gray-600">{user_id}</p>
      <p className="text-[1rem] font-semibold text-gray-600">{user_name}</p>
      <p className="text-[1rem] font-semibold text-gray-600">{user_contact}</p>
      <p className="text-[1rem] font-semibold text-gray-600">{user_role}</p>
      <p className="text-[1rem] font-semibold text-gray-600">{user_address}</p>
      <button onClick={() => mutate(user_id)} disabled={isDeleting}>
        Delete
      </button>
    </div>
  );
}
