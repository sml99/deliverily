import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "OpenTable",
    description: "Reserve a table in your favorite restaurant now!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="bg-gray-100 min-h-screen w-screen">
                    <main className="max-w-screen-2xl m-auto bg-white">
                        <NavBar />
                        {children}
                    </main>
                </main>
            </body>
        </html>
    );
}
