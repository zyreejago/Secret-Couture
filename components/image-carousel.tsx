"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  texts?: string[]
  placeholderImages?: string[]
  designers?: string[]
}

export default function ImageCarousel({ 
  images, 
  texts = [], 
  placeholderImages = [], 
  designers = [] 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const displayImages = images.length > 0 ? images : placeholderImages
  const displayTexts = texts.length > 0 ? texts : Array(displayImages.length).fill("Teks pelengkap")

  const nextSlide = () => {
    const nextIndex = currentIndex + 2 >= displayImages.length ? 0 : currentIndex + 2
    setCurrentIndex(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = currentIndex - 2 < 0 ? Math.max(0, displayImages.length - 2) : currentIndex - 2
    setCurrentIndex(prevIndex)
  }

  // Get current two images and their texts
  const currentImages = [
    displayImages[currentIndex] || "/placeholder.svg?height=400&width=300",
    displayImages[currentIndex + 1] || "/placeholder.svg?height=400&width=300",
  ]

  const currentTexts = [
    displayTexts[currentIndex] || "Teks pelengkap",
    displayTexts[currentIndex + 1] || "Teks pelengkap",
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Navigation arrows */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-10"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            {Math.floor(currentIndex / 2) + 1} / {Math.ceil(displayImages.length / 2)}
          </p>
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-10"
          aria-label="Next images"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Two images side by side with smooth transition */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / 2) * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(displayImages.length / 2) }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[0, 1].map((imageOffset) => {
                  const imageIndex = slideIndex * 2 + imageOffset
                  const image = displayImages[imageIndex]
                  const text = displayTexts[imageIndex]

                  if (!image) return null

                  return (
                    <div key={imageIndex} className="transition-all duration-300">
                      <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-lg">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Collection ${imageIndex + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center px-2">
                        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Designers section below images */}
      {designers.length > 0 && (
        <div className="space-y-4 mt-6">
          <p className="text-xl font-semibold text-gray-800 text-center">Designed by</p>
          <div className="flex flex-wrap justify-center gap-4">
            {designers.map((designer, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-px bg-[#b8860b] w-8"></div>
                <p className="text-base font-light text-gray-800">{designer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pagination dots */}
      <div className="flex justify-center space-x-3 mt-6">
        {Array.from({ length: Math.ceil(displayImages.length / 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 2)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              Math.floor(currentIndex / 2) === index ? "bg-gray-600 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Touch/Swipe area for mobile */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400">Klik panah atau titik untuk navigasi</p>
      </div>
    </div>
  )
}