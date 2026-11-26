
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diana-beauty-kappa.vercel.app"),

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

  openGraph: {
    title: "Diana Beauty | Fransar & Bryn",
    description:
      "Professionella frans- och brynbehandlingar i Linköping.",
    url: "https://diana-beauty-kappa.vercel.app",
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
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
