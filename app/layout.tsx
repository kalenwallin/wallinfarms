import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Wallin Farms",
    description: "Harvest reporting and management.",
};

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
            <StyledComponentsRegistry>
                <body className={inter.className + " bg-amoledBackground"}>
                    {children}
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
