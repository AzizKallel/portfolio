import type { Metadata } from "next";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { site } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
