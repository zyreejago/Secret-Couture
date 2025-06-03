'use client'
import Link from "next/link"
import type { Metadata } from "next"


import { useRef, useState, useEffect } from "react"

export const metadata: Metadata = {
  title: "Secret Couture 2025 | SMKN 1 Kota Bekasi",
  description: "Fashion showcase by students of Fashion Design and Production program at SMKN 1 Kota Bekasi",
  keywords: "fashion, couture, SMKN 1 Bekasi, fashion design, student showcase",
  openGraph: {
    title: "Secret Couture 2025 | SMKN 1 Kota Bekasi",
    description: "Fashion showcase by students of Fashion Design and Production program at SMKN 1 Kota Bekasi",
    images: [{ url: "/images/logo-acara.jpg" }],
  },
}

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-6 py-6 px-4">
        <img src="/images/logo-sekolah.png" alt="SMKN 1 Kota Bekasi Logo" className="w-10 h-10" />
        <div className="text-center">
          <h1 className="text-xl font-light tracking-wider text-black">Secret Couture</h1>
        </div>
        <img src="/images/logo-acara.jpg" alt="Secret Couture Logo" className="w-15 h-10" />
      </div>

      <div className="relative px-4 mb-8">
        <div className="relative h-[200px] md:h-screen rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/PRAJAKARA_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Kontrol Video */}
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md"
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md"
            >
              {isMuted ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M16.5 12c0-1.77-.73-3.37-1.9-4.5L13 9.1V5h-2v6.18l-2.5-2.5V5H6v14h2v-4.18l6.5 6.5c1.17-1.13 1.9-2.73 1.9-4.5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M5 9v6h4l5 5V4L9 9H5zm13.5 3c0-1.77-.73-3.37-1.9-4.5L15 9.1v5.8l1.6 1.6c1.17-1.13 1.9-2.73 1.9-4.5z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-light tracking-wider text-black">Secret Couture 2025</h2>
        </div>
      </div>

      {/* Collection Sections */}
      <div className="space-y-1">
        {/* AAHAR */}
        <Link href="/collections/aahar" className="block">
          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7)), url('/images/BG Sub tema 1 (1).jpg')",
            }}
          >
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5l5 6 5-6c1-1 2-3 2-5 0-4-3-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-light tracking-wider mb-3 text-white">AAHAR</h2>
              <p className="text-lg opacity-90 text-white">Mystical Heritage</p>
            </div>
          </div>
        </Link>

        {/* HARSA */}
        <Link href="/collections/harsa" className="block">
          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(70, 130, 180, 0.7), rgba(70, 130, 180, 0.7)), url('/images/BG Sub tema 2 (1).png')",
            }}
          >
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12 2l-2 4-2-1 1 3-3-1 2 3-3 0 3 2-2 2 3-1-1 3 2-1 2 4 2-4 2 1-1-3 3 1-2-2 3-2-3 0 2-3-3 1 1-3-2 1z" />
                </svg>
              </div>
              <h2 className="text-3xl font-light tracking-wider mb-3 text-white">HARSA</h2>
              <p className="text-lg opacity-90 text-white">Theatrical Stories</p>
            </div>
          </div>
        </Link>

        {/* NISKALA */}
        <Link href="/collections/niskala" className="block">
          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(128, 0, 128, 0.7), rgba(128, 0, 128, 0.7)), url('/images/BG Sub tema 3 (1).jpg')",
            }}
          >
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12 2L2 20h20L12 2zm0 4l6 12H6l6-12z" />
                </svg>
              </div>
              <h2 className="text-3xl font-light tracking-wider mb-3 text-white">NISKALA</h2>
              <p className="text-lg opacity-90 text-white">Visual Form</p>
            </div>
          </div>
        </Link>

        {/* RENJANA */}
        <Link href="/collections/renjana" className="block">
          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(184, 134, 11, 0.7), rgba(184, 134, 11, 0.7)), url('/images/BG Sub tema 4 (1).jpg')",
            }}
          >
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12 2C8 2 5 5 5 9v6c0 2 1 4 3 5l4 1 4-1c2-1 3-3 3-5V9c0-4-3-7-7-7zm-3 8c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm6 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm-3 6c-2 0-4-1-4-3h8c0 2-2 3-4 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-light tracking-wider mb-3 text-white">RENJANA</h2>
              <p className="text-lg opacity-90 text-white">Sensory Experience</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center gap-8 py-8 px-4">
        <Link
          href="/designers"
          className="text-lg font-light tracking-wider hover:text-purple-600 transition-colors duration-300 text-black"
        >
          Designer
        </Link>
        <Link
          href="/booklet"
          className="text-lg font-light tracking-wider hover:text-purple-600 transition-colors duration-300 text-black"
        >
          Booklet
        </Link>
      </div>
    </div>
  )
}
