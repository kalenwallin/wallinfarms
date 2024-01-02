'use client'
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../lib/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import Image from "next/image";

export default function Login() {
    return (
        <>
            <main className="relative h-screen">
                <div className="flex flex-col items-center justify-center h-screen" style={{ height: "90vh" }}>
                    <div className="flex justify-center m-4">
                        <Image
                            alt=""
                            src={"/icon.svg"}
                            width={70}
                            height={70}
                            style={{
                                width: "30%",
                                height: "auto",
                            }}
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/4">
                        <div className="SignIn text-center text-primary text-xl font-normal font-['Inter'] leading-none">Sign in</div>
                        <Auth
                            supabaseClient={supabase}
                            redirectTo='/snapscale'
                            appearance={{
                                theme: ThemeSupa,
                                extend: true,
                                variables: {
                                    default: {
                                        colors: {
                                            brand: '#FFED49',
                                            brandAccent: '#FACC14',
                                            brandButtonText: '#000000',
                                        },
                                    },
                                },
                                style: {
                                    button: { color: 'black' },
                                    anchor: { color: '#FFED49' },
                                },
                            }}
                            theme="dark"
                            localization={{
                                variables: {
                                    sign_in: {
                                        email_label: 'Email address',
                                        password_label: 'Password',
                                    },
                                    sign_up: {
                                        link_text: '',
                                    }
                                },
                            }}
                            providers={[]}
                            magicLink={true}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}