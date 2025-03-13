
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tliwcjzytpevznnhlifs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsaXdjanp5dHBldnpubmhsaWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTM4MzQsImV4cCI6MjA1NzE2OTgzNH0.Nt4iAdUw-obVsnUIGd9sX9Cr2XAeMgVsQSdUcNHFW84'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;