"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        className="fixed top-5 right-5 z-50 w-12 h-12 flex items-center justify-center bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>

          <div className="flex flex-col items-center gap-6">
            <h2 className="text-lg text-purple-400 font-light tracking-wider">Collections</h2>
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/sub/aahar"
                className="text-xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                AAHAR
              </Link>
              <Link
                to="/sub/harsaa"
                className="text-xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                HARSA
              </Link>
              <Link
                to="/sub/niskala"
                className="text-xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                NISKALA
              </Link>
              <Link
                to="/sub/renjana"
                className="text-xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                RENJANA
              </Link>
            </div>
          </div>

          <Link
            to="/designers"
            className="text-2xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Designers
          </Link>
          <Link
            to="/booklet"
            className="text-2xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Booklet
          </Link>
          <Link
            to="/contact"
            className="text-2xl font-light tracking-wider text-white hover:text-purple-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default MobileNavigation
