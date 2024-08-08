import supabase from "./supabase";
export default async function getSupplier() {
    let { data: Supplier, error } = await supabase
  .from('Supplier')
  .select('*');
        
    if(error) {
        console.log(error);
        throw new Error("User could not be found");
    }
    
    return Supplier;
}


export async function deleteSupplier(id)
{
    
const { error } = await supabase
.from('Supplier')
.delete()
.eq('supplierId', id);
if(error)
    {
        console.error(error);
        throw new Error("Supplier could not be delete")

    }

}

export   async function createSupplier(newSupplier)
{
    
let { data:Supplier, error } = await supabase
.from('Supplier')
.insert([ newSupplier])
.select()
if(error) {
    console.log(error);
    throw new Error("User could not be created");
}
return Supplier;
}