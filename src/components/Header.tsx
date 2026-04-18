'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark text-white py-2 shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Desktop Logo */}
          <Link href="/" className="flex items-center mb-2 md:mb-0 hidden md:flex">
            <img src="/images/logo.png" alt="retrotrove" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            <button className="bg-secondary hover:bg-yellow-600 text-dark px-2 py-1 rounded font-bold transition-colors text-sm">
              Login / Register
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center w-full justify-between">
            <button 
              className="text-white focus:outline-none mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" alt="retrotrove" className="h-12" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />
      <div className={`fixed top-0 left-0 h-full w-32 bg-dark border-r border-gray-700 z-50 md:hidden transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-2 border-b border-gray-700 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="retrotrove" className="h-12" />
          </Link>
          <button 
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-2">
          <ul className="flex flex-col space-y-2">
            <li className="mt-3">
              <button className="bg-secondary hover:bg-yellow-600 text-dark px-2 py-1 rounded font-bold transition-colors w-full text-sm">
                Login / Register
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
