import "./globals.css";

import Link from "next/link";

import { Inter } from "next/font/google";

// Theme and Auth Providers goes here
import ThemeButton from "./components/ThemeButton"; // Custome button to implement theme toggle
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "NextJs 13 Theme Toggle example",
  description:
    "Implementing theme toggle in NextJs 13 with TailwindCSS and next-themes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <header className="py-6 mx-12">
            <nav className="container flex items-center justify-between">
              <ul className="flex gap-6">
                <li>
                  <Link href="/">Home</Link>
                </li>
              </ul>

              <ThemeButton />
            </nav>
          </header>

          {/* Page */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="ml-12 text-xs italic">Theme Toggle Example</footer>
        </Providers>
      </body>
    </html>
  );
}
