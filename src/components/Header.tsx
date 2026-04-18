'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark text-white py-4 shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Desktop Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center mb-4 md:mb-0 hidden md:flex">
            <img src="/images/logo.png" alt="retrotrove" className="h-20 mr-2" />
            <span className="font-game text-lg">retrotrove</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/games" className="hover:text-secondary transition-colors">Games</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
            <button className="bg-secondary hover:bg-yellow-600 text-dark px-4 py-2 rounded font-bold transition-colors">
              Play Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center w-full justify-between">
            <button 
              className="text-white focus:outline-none mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
            <Link href="/" className="text-base font-bold flex items-center">
              <img src="/images/logo.png" alt="retrotrove" className="h-16 mr-2" />
              <span className="font-game text-sm">retrotrove</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />
      <div className={`fixed top-0 left-0 h-full w-64 bg-dark border-r border-gray-700 z-50 md:hidden transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center">
            <img src="/images/logo.png" alt="retrotrove" className="h-16 mr-2" />
            <span className="font-game text-sm">retrotrove</span>
          </Link>
          <button 
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="block hover:text-secondary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/games" className="block hover:text-secondary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Games</Link></li>
            <li><Link href="/about" className="block hover:text-secondary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="block hover:text-secondary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li className="mt-6">
              <button className="bg-secondary hover:bg-yellow-600 text-dark px-4 py-2 rounded font-bold transition-colors w-full">
                Play Now
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
