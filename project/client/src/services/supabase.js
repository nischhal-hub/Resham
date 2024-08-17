
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;

//access id key: 163420e173c7ad951803d27a3e299f8a
//secret access key: 6cc3220917f9e85940b5a94c6af5a8221a50f4cc2bcc110c01b30ec2fe508b11