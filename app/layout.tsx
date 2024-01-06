import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Wallin Farms",
    description: "Harvest reporting and management.",
};

export const theme = "amoled"; // dark, darker, amoled

import { Cloudinary } from "@cloudinary/url-gen";

const App = () => {
    const cld = new Cloudinary({ cloud: { cloudName: "dab9joh7p" } });
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-${theme}background`}>
                {children}
            </body>
        </html>
    );
}
