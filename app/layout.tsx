import "./globals.css";
import { Inter } from "next/font/google";
import { Button, ChakraProvider, extendBaseTheme } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Wallin Farms",
    description: "Harvest reporting and management.",
};

const theme = extendBaseTheme({
    components: {
        Button,
    },
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ChakraProvider>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </ChakraProvider>
    );
}
