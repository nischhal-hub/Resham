import { editSupplier, getSingleSupplier } from "@/services/apiSupplier";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { useEffect } from "react";

const EditSupplier = ({ editId, close }) => {
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
  const queryClient = useQueryClient();


  const { data, isFetching, error } = useQuery({
    queryKey: ["singleSupplier", editId],
    queryFn: () => getSingleSupplier(editId),
  });
  useEffect(() => {
    console.log(data)
    if (data && data.length > 0) {
      setValue('supplierName', data[0].supplierName);
      setValue('supplierContact', data[0].supplierContact);
      setValue('supplierEmail', data[0].supplierEmail);
      setValue('supplierAddress', data[0].supplierAddress);
    }
  }, [data, setValue]);

  const { mutate, isLoading } = useMutation({
    mutationFn: editSupplier,
    onSuccess: () => {
      toast.success("Supplier updated successfully");
      queryClient.invalidateQueries(["supplier", "singleSupplier"]);
      close();
    },
    onError: (error) => {
      console.error(error);
      toast.error("Something went wrong");
    },
  });

  const onSubmit = (formData) => {
    mutate({ id: editId, data: formData });
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading supplier data.</div>;
  }

  return (
    <div>
      <h2 className="text-center text-xl font-bold">Edit Supplier</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierName">
                Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="supplierName"
                type="text"
                placeholder="suppliername"
                {...register('supplierName', { required: "Supplier is required" })}
            />
            {errors.supplierName && <p className="text-red-500 text-xs italic">{errors.supplierName.message}</p>}
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierContact">
                Contact_NO:
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="supplierContact"
                type="text"
                placeholder="supplierContact"
                {...register('supplierContact', { required: "Contact is required" })}
            />
            {errors.supplierContact && <p className="text-red-500 text-xs italic">{errors.supplierContact.message}</p>}
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierEmail">
                 Email Address:
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="supplierEmail"
                type="text"
                placeholder="supplierEmail"
                {...register('supplierEmail', { required: "Email is required" })}
            />
            {errors.supplierEmail && <p className="text-red-500 text-xs italic">{errors.supplierEmail.message}</p>}
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierAddress">
                 Address Address:
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="supplierAddress"
                type="text"
                placeholder="supplierAddress"
                {...register('supplierAddress', { required: "Address is required" })}
            />
            {errors.supplierAddress && <p className="text-red-500 text-xs italic">{errors.supplierAddress.message}</p>}
        </div>

        


        <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-md" onClick={()=>reset()}>Reset</Button>
        <Button disabled={isLoading} type="submit" className="w-full flex-1 text-md">Edit</Button>
        </div>
    </form>
</div>
  );
}

export default EditSupplier;
