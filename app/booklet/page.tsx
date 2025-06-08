import Head from "next/head"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Booklet | Secret Couture 2025",
  description: "View our digital booklet showcasing the Secret Couture 2025 fashion collection by SMKN 1 Kota Bekasi students",
  keywords: "fashion booklet, lookbook, Secret Couture, SMKN 1 Bekasi, fashion design",
  openGraph: {
    title: "Booklet | Secret Couture 2025",
    description: "View our digital booklet showcasing the Secret Couture 2025 fashion collection",
    images: [{ url: "/images/BOOKLET SECRET COUTURE 2025-01.png" }],
  },
}

export default function BookletPage() {
  const bookletImages = [
    "/images/BOOKLET SECRET COUTURE 2025-01.png",
    "/images/BOOKLET SECRET COUTURE 2025-58.png",
    "/images/BOOKLET SECRET COUTURE 2025-60.png",
    "/images/BOOKLET SECRET COUTURE 2025-112.png",
  ]

  const contactInfo = {
    phone: "08962456009",
    email: "1secretcouture@gmail.com",
    instagram: "@secretcouture_",
    address: "SMKN 1 Kota Bekasi",
    mapLocation: "https://maps.google.com/?q=SMKN+1+Kota+Bekasi",
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Add viewport meta tag using next/head */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Logo section - Horizontal Layout with smaller size */}
      <div className="bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-6 py-6">
          <img src="/images/Logo-sekolah.png" alt="SMKN 1 Kota Bekasi Logo" className="w-10 h-10" />
          <div className="text-center">
            <h1 className="text-xl font-light tracking-wider text-black">Secret Couture</h1>
          </div>
          <img src="/images/Logo-acara.jpg" alt="Secret Couture Logo" className="w-15 h-10" />
        </div>
      </div>

      <div className="px-4 py-8">
        <h1 className="text-4xl uppercase tracking-wider text-center mb-16 font-light text-black">Booklet</h1>

        {/* Booklet Preview - 2x2 grid */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-2 gap-6">
            {bookletImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden bg-gray-200 rounded-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Booklet page ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Section with blur background */}
        <div
          className="relative py-20 px-4 mb-16 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `linear-gradient(45deg, #E9D5FF, #C4B5FD), url('/placeholder.svg?height=400&width=800&text=Contact+Background')`,
          }}
        >
          <div className="absolute inset-0 bg-purple-900/30 backdrop-blur-sm rounded-lg"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl uppercase tracking-wider text-center mb-16 text-white font-light">
              Contact Us
            </h2>

            <div className="space-y-6 max-w-md mx-auto">
              {/* Instagram */}
              <div className="flex items-start p-6 rounded-2xl bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 shadow-lg">
                <svg className="w-6 h-6 mr-4 mt-1 text-purple-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div className="flex-1">
                  <a
                    href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-light mb-1 hover:text-purple-400 transition-colors block text-purple-900"
                  >
                    {contactInfo.instagram}
                  </a>
                  <p className="text-sm text-purple-700">
                  Ikuti kami di Instagram untuk update dan koleksi terbaru
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start p-6 rounded-2xl bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 shadow-lg">
              <svg className="w-6 h-6 mr-4 mt-1 text-purple-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>
                {/* <svg className="w-6 h-6 mr-4 mt-1 text-purple-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5z"/>
                </svg> */}
                <div className="flex-1">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-xl font-light mb-1 hover:text-purple-400 transition-colors block text-purple-900"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-sm text-purple-700">
                    Hubungi kami melalui email untuk pertanyaan atau dukungan
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start p-6 rounded-2xl bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 shadow-lg">
                <svg className="w-6 h-6 mr-4 mt-1 text-purple-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className="flex-1">
                  <a
                    href={contactInfo.mapLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-light mb-1 hover:text-purple-400 transition-colors block text-purple-900"
                  >
                    {contactInfo.address}
                  </a>
                  <p className="text-sm text-purple-700">
                    Jl. Bintara VIII No. 2, RT.005/RW.003, Bintara, Kec. Bekasi Barat, Kota Bekasi, Jawa Barat, 17134
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-xl uppercase tracking-wider hover:text-purple-600 transition-colors duration-300 font-light text-black"
          >
            Home
          </Link>
        </div>
      </div>

      <footer className="py-6 text-center border-t border-gray-300">
        <p className="text-sm opacity-70 text-black">© Secret Couture 2025</p>
      </footer>
    </div>
  )
}