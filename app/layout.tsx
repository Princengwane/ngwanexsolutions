import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NgwaneXSolutions",
  description: "Technology Solutions & IT Consulting — empowering businesses and enriching communities through technology.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
