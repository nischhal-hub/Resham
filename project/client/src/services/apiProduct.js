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

async function uploadImages(file,path) {
    const { data, error } = await supabase.storage.from('productImage').upload(`${path}/`+file[0].name ,file[0]);
    if(error) {
        console.log(error);
        throw new Error(" Product could not be created");
    }
}

export  async function createProduct(newProduct)
{
    console.log(newProduct.productImage[0].name)
    uploadImages(newProduct.productImage,"public");
    newProduct = {...newProduct, productImage:newProduct.productImage[0].name}
    console.log(newProduct)
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