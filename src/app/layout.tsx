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

const SITE_URL = "https://interior.thesavecompany.com";
const SITE_NAME = "더세이브인테리어";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "더세이브인테리어 | 서울 주거·상업 전체인테리어",
    template: "%s | 더세이브인테리어",
  },

  description:
    "서울 주거·상업 전체인테리어 전문 더세이브인테리어. 아파트, 빌라, 주택, 오피스텔부터 상가, 매장, 카페, 음식점, 사무실까지 공간 전체 인테리어 상담.",

  keywords: [
    "더세이브인테리어",
    "서울 인테리어",
    "서울 인테리어업체",
    "서울 전체인테리어",
    "서울 아파트 인테리어",
    "서울 아파트 전체인테리어",
    "서울 주거 인테리어",
    "서울 상업 인테리어",
    "서울 상가 인테리어",
    "서울 매장 인테리어",
    "서울 사무실 인테리어",
    "주거 전체인테리어",
    "상업 전체인테리어",
    "아파트 전체인테리어",
    "상가 전체인테리어",
    "매장 전체인테리어",
    "사무실 전체인테리어",
  ],

  authors: [
    {
      name: SITE_NAME,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "더세이브인테리어 | 서울 주거·상업 전체인테리어",
    description:
      "서울 아파트·주택·상가·매장·카페·사무실 전체인테리어. 공간의 목적과 동선을 고려한 주거·상업 전체인테리어 상담.",
  },

  twitter: {
    card: "summary_large_image",
    title: "더세이브인테리어 | 서울 주거·상업 전체인테리어",
    description:
      "서울 주거·상업 전체인테리어 전문. 아파트부터 상가·매장·사무실까지 전체인테리어 상담.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "인테리어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}