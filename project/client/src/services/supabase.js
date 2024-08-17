
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://aczenurexbmxuglflosy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjemVudXJleGJteHVnbGZsb3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NDg5NzUsImV4cCI6MjAzNjAyNDk3NX0.z9-wzoQ8IUH525VRdkcPgTvFYYJ-AmNFC5KO2cNPMf4"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;

//access id key: 163420e173c7ad951803d27a3e299f8a
//secret access key: 6cc3220917f9e85940b5a94c6af5a8221a50f4cc2bcc110c01b30ec2fe508b11