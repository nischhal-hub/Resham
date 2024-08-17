import supabase,{supabaseUrl} from "./supabase";
export default async function getUsers() {
let { data: Product, error } = await supabase
.from('Product-inventory')
.select('*')

        
    if(error) {
        console.log(error);
        throw new Error(" Product could not be found");
    }
    
    return Product;
}

async function uploadImages(params) {

}

export  async function createProduct(newProduct)
{
    // const imageName=`${Math.random()}-${newProduct.productImage.name}`.replace("/","");
    // const imagePath=`${supabaseUrl}/storage/v1/s3/${imageName}`
    
    const { data:Product, error } = await supabase
    .from('Product-inventory')
    .insert([newProduct])
    .select()
    if(error) {
        console.log(error);
        throw new Error(" Product could not be created");
    }
    return Product;
}