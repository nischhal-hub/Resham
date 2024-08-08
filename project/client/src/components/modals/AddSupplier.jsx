import { createSupplier } from "@/services/apiSupplier";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

const AddSupplier = ({close}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createSupplier,
    onSuccess: () => {
      toast.success("Supplier created successfully");
      queryClient.invalidateQueries(["supplier"]);
      close();
    },
    onError: (error) => {
      console.log(error)
      toast.error("Something went wrong");
    }
  });
  const onSubmit=(data)=> {

    mutate({...data})
  }
    return (
        <div>
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
                <Button disabled={isLoading} type="submit" className="w-full flex-1 text-md">Create</Button>
                </div>
            </form>
        </div>
    )
}

export default AddSupplier;