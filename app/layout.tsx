import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {Navbar, Footer, Particles} from "@/components/index";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "GeniusTech",
  description: "GeniusTech",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background bg-gradient-to-l from-cyan-50 from-5% via-white via-50% to-yellow-50 font-sans antialiased", fontSans.variable, "dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-gray-900 dark:to-slate-900")}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar/>
          <Particles className="absolute inset-0 pointer-events-none" quantity={60} />
          {children}
          <Footer/>
      </ThemeProvider>
      </body>
    </html>
  );
}
