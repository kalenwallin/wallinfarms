import ComingSoon from "../components/comingSoon";
import { supabase } from '../lib/supabaseClient';

async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) {
        console.error('Error signing in:', error.message)
    } else {
        console.log('User signed in:', data.user)
    }
}

function handleFormSubmit(event) {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    signIn(email, password)
}

export default function Home() {
    return (
        <main className="relative h-screen">
            <ComingSoon image_path="/icon.svg" line_one="SIGN" line_two="IN" />
        </main>
    );
}
