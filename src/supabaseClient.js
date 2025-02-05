
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cweclpemyywnwhombywa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3ZWNscGVteXl3bndob21ieXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NDMzOTQsImV4cCI6MjA1NDMxOTM5NH0.v9FMgnml1xKb7IBB4UkLOmTVFHTfVKjPotZVzVEbtrA'
export const supabase = createClient(supabaseUrl, supabaseKey);