/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontSize: {
                clampH1: "clamp(2.5rem, 5vw, 6rem)",
                clampH2: "clamp(1.875rem, 4vw, 3rem)",
            },
            colors: {
                primary: "#D9D9D9",
                secondary: "#FFED49",
                darkbackground: "#41464C",
                darkerbackground: "#252525",
                amoledbackground: "#000000",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
