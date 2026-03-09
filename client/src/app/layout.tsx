import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/providers/SmoothScrolling";
import { NavigationWrapper } from "@/components/ui/NavigationWrapper";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ActionModalProvider } from "@/components/providers/ActionModalProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITZONE | Premier Fitness Destination",
  description: "Experience a sanctuary of peak performance. Choose a membership tier tailored to your lifestyle and unlock unparalleled access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScrolling>
            <NavigationWrapper>
              <ActionModalProvider>
                {children}
              </ActionModalProvider>
            </NavigationWrapper>
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
