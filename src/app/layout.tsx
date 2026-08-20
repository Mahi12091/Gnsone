import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GNSOne | Indian Investment Research Platform",
  description: "Production-grade foundation for Indian investment research workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
