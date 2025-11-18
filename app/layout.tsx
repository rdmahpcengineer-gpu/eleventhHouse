import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Eleventh House | Transform Your Vision with Innovation",
  description:
    "Elevate your business with cutting-edge solutions designed to scale, perform, and deliver exceptional results. Join industry leaders who trust our platform.",
  keywords: [
    "innovation",
    "cloud solutions",
    "digital transformation",
    "enterprise platform",
  ],
  authors: [{ name: "Eleventh House" }],
  openGraph: {
    title: "Eleventh House | Transform Your Vision with Innovation",
    description:
      "Elevate your business with cutting-edge solutions designed to scale, perform, and deliver exceptional results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
