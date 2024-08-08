import { createCategory, editCategory, getSingleCategory } from "@/services/apiCategory";
import { useMutation, useQuery, useQueryClient, useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { useEffect } from "react";

const EditCategory = ({editId,close}) => {
  const { register, handleSubmit, reset, formState: { errors },setValue } = useForm();
  const queryClient = useQueryClient();

  const {data,isFetching} = useQuery({
    queryKey: ["singleCategory",editId],
    queryFn: () => getSingleCategory(editId),
  })
  useEffect(() => {
    if (data && data.length > 0) {
      setValue('categoryName', data[0].categoryName);
    }
  }, [data, setValue]);


  const { mutate, isLoading } = useMutation({
    mutationFn: editCategory,
    onSuccess: () => {
      toast.success("Category created successfully");
      queryClient.invalidateQueries(["category","singleCategory"]);
      close();
    },
    onError: (error) => {
      console.log(error)
      toast.error("Something went wrong");
    }
  });
  const onSubmit=(formData)=> {
    mutate({id:editId,data:formData})
  }
  if(isFetching){
    return <div>Loading...</div>
  }
    return (
        <div>
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
                <Button variant="ghost" className="text-md" onClick={()=>reset()}>Discard</Button>
                <Button disabled={isLoading} type="submit" className="w-full flex-1 text-md">Edit</Button>
                </div>
            </form>
        </div>
    )
}

export default EditCategory;