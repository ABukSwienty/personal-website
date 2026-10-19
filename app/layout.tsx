import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme.provider";
import { ThemeToggle } from "./theme-toggle";

export const metadata: Metadata = {
  title: "Alexander Buk-Swienty",
  description: "Alexander Buk-Swienty — fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="root flex flex-col min-h-screen overflow-auto w-full bg-background bg-grid">
            <header className="h-12">
              <nav className="fixed w-full px-6 md:px-12 flex items-center h-12 justify-end">
                <ThemeToggle />
              </nav>
            </header>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
