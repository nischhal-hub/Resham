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

export {
    getCategory,
    createCategory
}