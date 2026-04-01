import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Poppins,
  Space_Grotesk,
} from "next/font/google";
// import { siteName } from "@/constants/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-ui",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Still Reverie",
  description:
    "A cinematic photography landing page with immersive motion and editorial storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        <main className="font-poppins flex-1">{children}</main>
      </body>
    </html>
  );
}
