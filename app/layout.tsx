import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdSense from "@/components/AdSense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://birdsbyfeather.com'),
  title: {
    default: "Birds by Feather - Live Bird Nest Cameras & Wildlife Streams",
    template: "%s | Birds by Feather",
  },
  description: "Watch live bird nest cameras from around the world. Follow bald eagle families, ospreys, blue tits and more. Observe nesting behavior, feeding routines, and connect with nature through real-time 24/7 wildlife streams.",
  keywords: [
    "bird cams",
    "live bird cameras",
    "eagle nest cam",
    "bird nest cameras",
    "live bird watching",
    "wildlife streams",
    "eagle cam",
    "osprey cam",
    "nature live cameras",
    "bird watching online",
    "live animal cams",
    "wildlife webcams",
    "bald eagle nest",
    "bird nesting",
    "wildlife conservation",
    "bird photography",
    "nature education",
    "live nature streams",
  ],
  authors: [{ name: "Birds by Feather" }],
  creator: "Birds by Feather",
  publisher: "Birds by Feather",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://birdsbyfeather.com",
    title: "Birds by Feather - Live Bird Nest Cameras & Wildlife Streams",
    description: "Watch live bird nest cameras from around the world. Follow bald eagle families, ospreys, and more. 24/7 real-time wildlife streams.",
    siteName: "Birds by Feather",
    images: [
      {
        url: "https://birdsbyfeather.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Birds by Feather - Live Bird Nest Cameras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birds by Feather - Live Bird Nest Cameras",
    description: "Watch live bird nest cameras from around the world. Follow eagle families and connect with nature through 24/7 wildlife streams.",
    creator: "@birdsbyfeather",
    images: ["https://birdsbyfeather.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://birdsbyfeather.com",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' fill='%2316a34a'%3E%3Cpath d='M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z'/%3E%3C/svg%3E",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' fill='%2316a34a'%3E%3Cpath d='M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z'/%3E%3C/svg%3E",
      },
    ],
  },
  // Uncomment and add your verification codes when needed
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#064e3b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Birds by Feather',
    description: 'Watch live bird nest cameras from around the world. Follow eagle families, observe nesting behavior, and connect with nature through real-time wildlife streams.',
    url: 'https://birdsbyfeather.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://birdsbyfeather.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Birds by Feather',
      url: 'https://birdsbyfeather.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://birdsbyfeather.com/logo.png',
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0XCGKKEFN4"
          suppressHydrationWarning
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0XCGKKEFN4');
            `,
          }}
          suppressHydrationWarning
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AdSense />
        {children}
      </body>
    </html>
  );
}
