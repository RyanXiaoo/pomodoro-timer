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
        <html
            lang="en"
            className="flex flex-col w-full h-full items-center justify-center bg-custom-red overflow-hidden"
        >
            <body
                className={`${font.className} flex flex-col w-full h-full flex-col items-center justify-center bg-custom-red overflow-hidden`}
            >
                <div className="flex items-center space-between w-1/3 pt-4 border-b-1 border-gray-600">
                    <div className="flex flex-row items-center justify-center mr-4 w-1/3">
                        <Image
                            src={checkmark}
                            alt="checkmark"
                            className="flex w-4 h-4"
                        />
                        <div className="flex text-left w-full text-32 font-bold m-2">
                            <h1 className={font.className}>Pomodoro</h1>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-2/3 h-full">
                        <div className="bg-custom-light w-1/4 h-2/3 rounded-sm"></div>
                        <div className="bg-custom-light w-1/4 h-2/3 rounded-sm"></div>
                        <div className="bg-custom-light w-1/4 h-2/3 rounded-sm"></div>
                    </div>
                </div>

                {children}
            </body>
        </html>
    );
}
