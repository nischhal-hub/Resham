import { createUser } from "@/services/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const AddUser = () => {
    const { register, handleSubmit, reset,close, formState: { errors } } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("Data created successfully");
      queryClient.invalidateQueries(["cabins"]);
      close();
      reset();
    },
    onError: () => {
      toast.error("Something went wrong");
    }
  });

  function onSubmit(data) {
    mutate({ ...data });
  }

  function onError(error) {
    console.log(error);
  }

  return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_name"
              type="text"
              placeholder="Username"
              {...register('user_name', { required: "Username is required" })}
            />
            {errors.user_name && <p className="text-red-500 text-xs italic">{errors.user_name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_contact">
              User Contact
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_contact"
              type="text"
              placeholder="User contact"
              {...register('user_contact', { required: "User contact is required" })}
            />
            {errors.user_contact && <p className="text-red-500 text-xs italic">{errors.user_contact.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_role">
              User Role
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_role"
              type="text"
              placeholder="User role"
              {...register('user_role', { required: "User role is required" })}
            />
            {errors.user_role && <p className="text-red-500 text-xs italic">{errors.user_role.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_address"
              type="text"
              placeholder="Address"
              {...register('user_address', { required: "Address is required" })}
            />
            {errors.user_address && <p className="text-red-500 text-xs italic">{errors.user_address.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              Add User
            </button>
          </div>
        </form>
      
  );
};

export default AddUser;
