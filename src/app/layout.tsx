import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/index.css";

const geistSans = localFont({
  src: "./fonts/NetflixSans_W_Md.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/NetflixSans_W_Rg.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "neflix",
  description: "넷플릭스 클론",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto my-0 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
