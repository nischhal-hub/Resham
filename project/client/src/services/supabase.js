
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://aczenurexbmxuglflosy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjemVudXJleGJteHVnbGZsb3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NDg5NzUsImV4cCI6MjAzNjAyNDk3NX0.z9-wzoQ8IUH525VRdkcPgTvFYYJ-AmNFC5KO2cNPMf4"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;