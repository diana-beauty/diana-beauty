import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diana Beauty | Fransar & Bryn i Linköping",
  description:
    "Professionella frans- och brynbehandlingar i Linköping. Lash Lift, Brow Lift, färgning och formning. Boka enkelt online hos Diana Beauty.",
  keywords: [
    "Diana Beauty",
    "Fransar Linköping",
    "Bryn Linköping",
    "Lash Lift",
    "Brow Lift",
    "Skönhetssalong Linköping",
    "Fransförlängning",
  ],
  authors: [{ name: "Diana Beauty" }],
  creator: "Diana Beauty",
  metadataBase: new URL("https://dianabeauty.se"),
  openGraph: {
    title: "Diana Beauty",
    description:
      "Professionella frans- och brynbehandlingar i Linköping.",
    url: "https://dianabeauty.se",
    siteName: "Diana Beauty",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "Diana Beauty",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}