import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cuTB",
  description: "Sitio del comité de pruebas de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
