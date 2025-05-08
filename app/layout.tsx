import localFont from "next/font/local";
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css"; // We'll keep the import for globals.css for now
import checkmark from "@/images/checkmark.svg";
const font = localFont({ src: "../public/fonts/arialrounded.ttf" });

export const metadata: Metadata = {
    title: "Pomodoro Timer",
    description: "A simple Pomodoro timer to boost productivity.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`flex flex-col w-full h-full items-center justify-center bg-custom-red overflow-hidden ${font.className}`}
            >
                {children}
            </body>
        </html>
    );
}
