import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Noise from "@/components/blocks/Animations/Noise/Noise";
import TargetCursor from "@/components/blocks/Animations/TargetCursor/TargetCursor";
import ThemeSetter from "@/components/ThemeSetter";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maarij Bukhari - Web Developer",
  description: "Maarij Bukhari's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={raleway.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSetter />
          <div className="hidden sm:block">
            <TargetCursor spinDuration={2} hideDefaultCursor={true} />
          </div>
          <Noise />
          <main
            className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
            style={{
              touchAction: "pan-y",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
