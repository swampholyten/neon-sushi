import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neon Sushi | All You Can Eat",
  description:
    "An open source template for sushi restaurants featuring an elegant, modern design with an all-you-can-eat menu management system.",
  keywords: [
    "sushi",
    "restaurant",
    "all you can eat",
    "template",
    "Next.js",
    "modern design",
  ],
  openGraph: {
    title: "Neon Sushi | All You Can Eat",
    description:
      "An open source template for sushi restaurants featuring an elegant, modern design with an all-you-can-eat menu management system.",
    url: "https://neon-sushi.vercel.app",
    siteName: "Neon Sushi",
    images: [
      {
        url: "https://neon-sushi.vercel.app/og-image.jpeg",
        width: 800,
        height: 600,
        alt: "Neon Sushi Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Sushi | All You Can Eat",
    description:
      "An open source template for sushi restaurants featuring an elegant, modern design with an all-you-can-eat menu management system.",
    images: ["https://neon-sushi.vercel.app/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
