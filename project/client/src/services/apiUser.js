import supabase from "./supabase";
export default async function getUsers() {
    let { data: users, error } = await supabase
  .from('Users')
  .select('*');
        
    if(error) {
        console.log(error);
        throw new Error("User could not be found");
    }
    
    return users;
}


export  async function deleteUsers(id)
{
  
const { error } = await supabase
.from('Users')
.delete()
.eq('id',id)
if(error)
  {
      console.error(error);
      throw new Error("User could not be delete")

  }
}
