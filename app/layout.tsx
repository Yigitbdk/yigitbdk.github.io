import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yiğit Badik",
  description: "Full-Stack Developer - Portfolio",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90' font-family='monospace' font-weight='bold' fill='%235B8DEF'>YB</text></svg>",
        type: "image/svg+xml",
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
    <html lang="tr">
      <body>
        <div className="scanline"></div>
        <div className="noise"></div>
        {children}
      </body>
    </html>
  );
}