import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400 text-xs">
          <p>© 2026 retrotrove Retro Games. All rights reserved.</p>
          <p className="mt-1">
            retrotrove is a trademark of retrotrove. This site is not affiliated with Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
