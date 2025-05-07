import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteLearn - Complete Learning Platform",
  description: "An e-learning platform for all types of students from grade 1 to undergraduate level",
  authors: [{ name: "ByteLearn" }],
  keywords: [
    "e-learning",
    "online education",
    "courses",
    "study notes",
    "elementary education",
    "high school education",
    "college preparation",
    "entrance exam",
    "bachelor level courses",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
