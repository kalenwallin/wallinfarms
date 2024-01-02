'use client';
import { supabase } from '../lib/supabaseClient';

async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) {
        console.error('Error signing in:', error.message)
        return data;
    } else {
        console.log('User signed in:', data.user)
        return data;
    }
}

async function handleFormSubmit(event) {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    const data = await signIn(email, password)
    if (data.user) {
        window.location.href = '/home';
    }
}

export default function Home() {
    return (
        <main className="relative h-screen">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" required /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </main>
    );
}
