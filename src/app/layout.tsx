import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Home | Blog",
  description: "A single page blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
