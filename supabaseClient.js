import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://fgfdzphqxlyfgeyjrnae.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZmR6cGhxeGx5ZmdleWpybmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4NjcwNDAsImV4cCI6MjA5ODQ0MzA0MH0.gBhmRkNXVSLd8StFIM_ryMVrZzQx3HdNpCG7t1xK3Eo'

export const supabase = createClient(supabaseUrl, supabaseKey)
