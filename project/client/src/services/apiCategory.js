import supabase from "./supabase";

 async function getCategory(){
    let { data: category, error } = await supabase
    .from('Category')
    .select('*');

    if(error){
        console.log(error)
        throw new Error("Category could not be found")
    }
    return category;
}

 async function createCategory(newCategory){
  let {data:category, error} = await supabase
  .from('Category')
  .insert([newCategory])
  .select();
  if(error) {
    console.log(error);
    throw new Error("Category could not be created");
}
return category;
}
async function deleteCategory(id){
    let { error } = await supabase
    .from('Category')
    .delete()
    .eq('categoryId', id);
    if(error) {
        console.log(error);
        throw new Error("Category could not be deleted");
    }
}
async function getSingleCategory(id){
    const { data, error } = await supabase
    .from('Category')
    .select('*')
    .eq('categoryId', id)
    if(error) {
        console.error(error);
        throw new Error("Category could not be found");
    }
    return data;
}

async function editCategory(data){

    let { error } = await supabase
    .from('Category')
    .update(data.data)
    .eq('categoryId', data.id);
    if(error) {
        console.log(error);
        throw new Error("Category could not be updated");
    }
}

//gets the count of products in categories
async function getCategoryProductCount(){
    let { data, error } = await supabase
    .rpc('getCategoryProductCount')
    if (error) console.error(error)
    else console.log(data)
    return data;
}



export {
    getCategory,
    createCategory,
    deleteCategory,
    getSingleCategory,
    editCategory,
    getCategoryProductCount
}

