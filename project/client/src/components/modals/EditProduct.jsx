import { createProduct, editProduct,getSingleProduct } from "@/services/apiProduct";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import getSupplier from "@/services/apiSupplier";
import { useEffect, useState } from "react";
import { getCategory } from "@/services/apiCategory";


const EditProduct = ({editId, close }) => {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const queryClient = useQueryClient();
    const { data: product, isFetching, error } = useQuery({
        queryKey: ["singleProduct", editId],
        queryFn: () => getSingleProduct(editId),
    })
    useEffect(() => {
        console.log(product)
        if (product && product.length > 0) {
            setValue('productName', product[0].productName);
            setValue('productPrice', product[0].productPrice);
            setValue('categoryId', product[0].categoryId);
            setValue('supplierId', product[0].supplierId);
            setValue('incomingStock', product[0].incomingStock);
            setValue('tags', product[0].tags);
          }
    },[product,setValue])
    const { mutate, isLoading } = useMutation({
        mutationFn: editProduct,
        onSuccess: () => {
            toast.success("Data updated successfully");
            queryClient.invalidateQueries(["product"]);
            close();
            reset();
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });
    const { data: supplier, isFetching: supplierIsFetching } = useQuery({
        queryKey: ["supplier"],
        queryFn: () => getSupplier(),
    })
    const { data: category, isFetching: categoryIsFetching } = useQuery({
        queryKey: ["category"],
        queryFn: () => getCategory(),
    })

    function onSubmit(editData) {
        //console.log(objToFormData(data))
        mutate({id:editId, data:editData});
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
                        placeholder="Product name"
                        {...register('productName', { required: "ProductName is required" })}
                    />
                    {errors.productName && <p className="text-red-500 text-xs italic">{errors.productName.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                        Product Image:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productImage"
                        type="file"
                        placeholder="Product image"
                        {...register('productImage', { required: "Product image is required" })}
                    />
                    {errors.productImage && <p className="text-red-500 text-xs italic">{errors.productImage.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
                        Product Price:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productPrice"
                        type="number"
                        placeholder="Product price"
                        {...register('productPrice', { required: "Product price is required" })}
                    />
                    {errors.productPrice && <p className="text-red-500 text-xs italic">{errors.productPrice.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierId">
                        Select Category
                    </label>
                    <select
                        disabled={categoryIsFetching}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('categoryId', { required: "Category is required" })}
                        defaultValue={''}
                    >
                        <option value="" disabled hidden>
                            Select a category
                        </option>
                        {category && category.map((item) => (
                            <option key={item.categoryId} value={item.categoryId}>
                                {item.categoryName}
                            </option>
                        ))}
                    </select>
                    {errors.categoryId && <p className="text-red-500 text-xs italic">{errors.categoryId.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierId">
                        Select Supplier
                    </label>
                    <select
                        disabled={supplierIsFetching}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('supplierId', { required: "Supplier is required" })}
                        defaultValue={''}
                    >
                        <option value="" disabled hidden>
                            Select a supplier
                        </option>
                        {supplier && supplier.map((item) => (
                            <option key={item.supplierId} value={item.supplierId}>
                                {item.supplierName}
                            </option>
                        ))}
                    </select>
                    {errors.supplierId && <p className="text-red-500 text-xs italic">{errors.supplierId.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="supplierId">
                        Incoming stock:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="incomingStock"
                        type="number"
                        placeholder="0"
                        {...register('incomingStock', { required: "Stock is required." })}
                    />
                    {errors.incomingStock && <p className="text-red-500 text-xs italic">{errors.incomingStock.message}</p>}
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

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-md" onClick={() => reset()}>Discard</Button>
                    <Button disabled={isLoading} type="submit" className="w-full flex-1 text-md">
                        {isLoading ? "Saving..." : "Edit"}
                    </Button>
                </div>
            </form>
        </div>


    )
};

export default EditProduct;
