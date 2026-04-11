import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold flex items-center mb-4">
              <span className="text-secondary mr-2">⚔️</span>
              <span className="font-game">Age of Empires DS</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Play classic Age of Empires DS games online for free in your browser. Relive the nostalgia of retro gaming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/games" className="hover:text-secondary transition-colors">Games</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Game Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Game Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/games/nes" className="hover:text-secondary transition-colors">NES Games</Link></li>
              <li><Link href="/games/snes" className="hover:text-secondary transition-colors">SNES Games</Link></li>
              <li><Link href="/games/arcade" className="hover:text-secondary transition-colors">Arcade Games</Link></li>
              <li><Link href="/games/genesis" className="hover:text-secondary transition-colors">Sega Genesis</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie" className="hover:text-secondary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2026 Age of Empires DS Retro Games. All rights reserved.</p>
          <p className="mt-2">
            Age of Empires is a trademark of Microsoft Corporation. This site is not affiliated with Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
