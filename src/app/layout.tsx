import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nick Post | Product Designer",
  description:
    "Founding Product Designer with 12+ years experience crafting AI-first experiences, developer tools, and design systems at startups and global organizations.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "AI Design",
    "Design Systems",
    "Developer Tools",
  ],
  authors: [{ name: "Nick Post" }],
  openGraph: {
    title: "Nick Post | Product Designer",
    description:
      "Founding Product Designer crafting AI-first experiences and scaling design teams.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Post | Product Designer",
    description:
      "Founding Product Designer crafting AI-first experiences and scaling design teams.",
    creator: "@ncspost",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
