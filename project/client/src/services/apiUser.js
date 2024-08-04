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


export async function deleteUsers(id)
{
    
const { error } = await supabase
.from('Users')
.delete()
.eq('user_id', id);
if(error)
    {
        console.error(error);
        throw new Error("Cabin could not be delete")

    }

}

export   async function createUser(newUser)
{
    
let { data:user, error } = await supabase
.from('Users')
.insert([ newUser])
.select()
if(error) {
    console.log(error);
    throw new Error("User could not be created");
}
return user;
}