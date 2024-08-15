import { createCategory } from "@/services/apiCategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

const AddCategory = ({close}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      toast.success("Category created successfully");
      queryClient.invalidateQueries(["category"]);
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
            <h2 className="text-center text-xl font-bold">Add Category</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryName">
                        Category Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="categoryName"
                        type="text"
                        placeholder="Category name"
                        {...register('categoryName', { required: "Category is required" })}
                    />
                    {errors.categoryName && <p className="text-red-500 text-xs italic">{errors.categoryName.message}</p>}
                </div>
                <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-md" onClick={()=>reset()}>Reset</Button>
                <Button disabled={isLoading} type="submit" className="w-full flex-1 text-md">Create</Button>
                </div>
            </form>
        </div>
    )
}

export default AddCategory;