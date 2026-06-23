import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harish Pal — Premium Web Developer",
  description:
    "Vibe coded websites for YouTubers, startups, brands, and creators. Professional web design, development, and SEO by Harish Pal.",
  keywords: [
    "web developer",
    "freelance",
    "portfolio",
    "website design",
    "Harish Pal",
  ],
  openGraph: {
    title: "Harish Pal — Premium Web Developer",
    description:
      "I create highly professional websites people can't stop watching.",
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
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
