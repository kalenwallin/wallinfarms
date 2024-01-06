'use client'
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../lib/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import Image from "next/image";
import { useEffect } from 'react';

export default function Login() {
    // * Supabase Auth Error Message Translation
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type !== "childList" || mutation.addedNodes.length === 0)
                    return;

                for (const node of mutation.addedNodes) {
                    if (
                        node instanceof HTMLElement &&
                        (node.classList.contains("supabase-account-ui_ui-message") ||
                            node.classList.contains("supabase-auth-ui_ui-message"))
                    ) {
                        const originErrorMessage = node.innerHTML.trim();
                        if (originErrorMessage.includes("Signups not allowed for this instance")) {
                            node.innerHTML = "Contact <a style='text-decoration: underline' href='mailto:kalenwallin@kalenwallin.com'>kalenwallin@kalenwallin.com</a> to request an account.";
                        }
                    }
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }, []);

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
                            redirectTo='https://wallinfarms.us/auth/callback/'
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
                                    magic_link: {
                                        button_label: 'Send OTP Login Link',
                                        loading_button_label: 'Sending...',
                                        confirmation_text: 'Check your email for OTP Login Link',
                                    },
                                },
                            }}
                            providers={[]}
                            magicLink={true}
                            view='magic_link'
                            showLinks={false}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}