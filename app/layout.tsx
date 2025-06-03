import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://secret-couture.vercel.app"),
  title: "Secret Couture 2025 | SMKN 1 Kota Bekasi",
  description: "Fashion showcase by students of Fashion Design and Production program at SMKN 1 Kota Bekasi",
  keywords: "fashion, couture, SMKN 1 Bekasi, fashion design, student showcase",
  openGraph: {
    title: "Secret Couture 2025 | SMKN 1 Kota Bekasi",
    description: "Fashion showcase by students of Fashion Design and Production program at SMKN 1 Kota Bekasi",
    images: [{ url: "/images/logo-acara.jpg" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
