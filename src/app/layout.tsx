import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nowaitt — Skip the Wait, Not the Experience",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/logo.jpg",
  },
  description:
    "Book appointments instantly at salons, clinics, hospitals, garages, and service centers. Skip the queue with Nowaitt — the smarter way to manage your time.",
  keywords: [
    "appointment booking",
    "queue management",
    "salon booking",
    "clinic appointment",
    "skip the queue",
    "Nowaitt",
    "instant booking",
  ],
  authors: [{ name: "Nowaitt" }],
  creator: "Nowaitt",
  metadataBase: new URL("https://nowaitt.com"),
  openGraph: {
    title: "Nowaitt — Skip the Wait, Not the Experience",
    description:
      "Book appointments instantly at salons, clinics, hospitals, and more. Download Nowaitt today.",
    type: "website",
    locale: "en_US",
    siteName: "Nowaitt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nowaitt — Skip the Wait, Not the Experience",
    description: "Instant appointment booking. No more waiting in queues.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-white dark:bg-[#050b1a] text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
