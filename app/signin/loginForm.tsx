'use client'
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createBrowserClient } from '@supabase/ssr'

import Image from "next/image";
import { useEffect } from 'react';

export default function LoginForm() {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

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
                            node.innerHTML = "You do not have an account set up. Contact <a style='text-decoration: underline' href='mailto:kalenwallin@kalenwallin.com'>kalenwallin@kalenwallin.com</a> to request an account.";
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
                <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="flex flex-col items-center justify-center h-screen z-10" style={{ height: "90vh" }}>
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
                                priority={true}
                            />
                        </div>
                        <div className="w-full sm:max-w-80">
                            <div className="SignIn text-center text-primary text-xl font-normal font-['Inter'] leading-none">Sign in</div>
                            <Auth
                                supabaseClient={supabase}
                                redirectTo={
                                    process.env.NODE_ENV == "development" ?
                                        'http://localhost:3000/auth/callback' :
                                        'https://wallinfarms.us/auth/callback'}
                                appearance={{
                                    theme: ThemeSupa,
                                    extend: true,
                                    variables: {
                                        default: {
                                            colors: {
                                                brand: '#FFED49',
                                                brandAccent: '#FACC14',
                                                brandButtonText: '#000000',
                                                inputBackground: '#1e1e1e',
                                                inputBorder: '#3e3e3e',
                                                inputBorderHover: '#808080',
                                                inputBorderFocus: '#808080',
                                                inputText: '#ffffff',
                                                inputLabelText: '#808080',
                                                inputPlaceholder: '#a9a9a9',
                                                messageBackground: '#0d5334',
                                                messageBorder: '#2b805a',
                                                messageText: '#85e0b7',
                                                messageBackgroundDanger: '#370b0b',
                                                messageBorderDanger: '#822025',
                                                messageTextDanger: '#ff6369',
                                            },
                                        },
                                    },
                                    style: {
                                        button: { color: 'black' },

                                    },
                                }}
                                providers={[]}
                                magicLink={true}
                                view='magic_link'
                                showLinks={false}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}