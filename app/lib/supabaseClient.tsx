import { createClient } from '@supabase/supabase-js'

require('dotenv').config({ path: '.env.local' });
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabaseUrl = 'https://tccrygfclhacabhqzoud.supabase.co'
const supabaseAnonKey = SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
