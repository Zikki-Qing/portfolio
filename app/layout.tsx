import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-five-black-0rx8xlcgf1.vercel.app'),
  title: "Zikki Qing | Full-Stack Developer",
  description: "Melbourne-based Full-Stack Developer building reliable interfaces, backend/API integrations, workflow tooling, automated testing, and distributed systems.",
  openGraph: {
    title: "Zikki Qing | Full-Stack Developer",
    description: "Melbourne-based Full-Stack Developer. Recent work spans workflow platforms, distributed systems, and cross-platform mobile/web.",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zikki Qing — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zikki Qing | Full-Stack Developer",
    description: "Melbourne-based Full-Stack Developer.",
    images: ["/og-image.png"],
  },
  // TODO: update metadataBase to https://zikkiqing.dev when custom domain configured
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
