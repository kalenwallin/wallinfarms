import createSupabaseServerClient from '@/app/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function GET() {
    const supabase = await createSupabaseServerClient()
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
        await supabase.auth.signOut()
    }
    redirect('/')
}