import { createProduct } from "@/services/apiProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            toast.success("Data created successfully");
            queryClient.invalidateQueries(["product"]);
            reset();
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    function onSubmit(data) {
        console.log(data);
        mutate({ ...data });
    }

    function onError(error) {
        console.log(error);
    }
    return (
        <div>
            <h2 className="text-center text-xl font-bold">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                        Product Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productName"
                        type="text"
                        placeholder="Product_Name..."
                        {...register('productName', { required: "ProductName is required" })}
                    />
                    {errors.productName && <p className="text-red-500 text-xs italic">{errors.productName.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                        Product Tags
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tags"
                        type="text"
                        placeholder="Product tags..."
                        {...register('tags', { required: "Product tags is required" })}
                    />
                    {errors.tags && <p className="text-red-500 text-xs italic">{errors.tags.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierId">
                        catagoryId
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="catagoryId"
                        type="text"
                        placeholder="catagoryId"
                        {...register('catagoryId', { required: "catagoryId  is required" })}
                    />
                    {errors.catagoryId && <p className="text-red-500 text-xs italic">{errors.catagoryId.message}</p>}
                </div>

                {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_address">
                Product Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productImage"
                type="file"
                {...register('productImage', { required: "Address is required" })}
              />
              {errors.user_address && <p className="text-red-500 text-xs italic">{errors.user_address.message}</p>}
            </div> */}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierId">
                        supplierId:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="supplierId"
                        type="number"
                        placeholder="supplierId"
                        {...register('supplierId', { required: "supplierId  is required" })}
                    />
                    {errors.supplierId && <p className="text-red-500 text-xs italic">{errors.supplierId.message}</p>}
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
        </div>


    )
};

export default AddProduct;
