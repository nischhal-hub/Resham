import supabase,{supabaseUrl} from "./supabase";
export default async function getUsers() {
let { data: Product, error } = await supabase
.from('Product')
.select('*')

        
    if(error) {
        console.log(error);
        throw new Error(" Product could not be found");
    }
    
    return Product;
}

export  async function createProduct(newProduct)
{
    // const imageName=`${Math.random()}-${newProduct.productImage.name}`.replace("/","");
    // const imagePath=`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
   
    const { data:Product, error } = await supabase
    .from('Product')
    .insert([newProduct])
    .select()
    if(error) {
        console.log(error);
        throw new Error(" Product could not be create");
    }
    return Product;
}