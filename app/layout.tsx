import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["600", "700"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StepLock | The alarm you can't snooze",
    template: "%s | StepLock"
  },
  description:
    "StepLock is a walk-to-dismiss alarm app for Android. Set steps, choose difficulty, and force momentum before you stop your alarm.",
  openGraph: {
    title: "StepLock | The alarm you can't snooze",
    description:
      "StepLock stays on until you walk a set number of steps. Better mornings with deliberate wakeups.",
    url: "/",
    siteName: "StepLock",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "StepLock logo"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="font-[var(--font-outfit)]">
        <ThemeProvider>
          <div className="min-h-screen bg-hero-gradient">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
