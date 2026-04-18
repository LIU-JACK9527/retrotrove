'use client';

import Link from 'next/link';

interface GameCardProps {
  id: number;
  title: string;
  image: string;
  platform: string;
  likes: number;
  link: string;
}

export default function GameCard({ id, title, image, platform, likes, link }: GameCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={link} className="block">
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-semibold mb-1 truncate">{title}</h3>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{platform}</span>
            <span className="flex items-center">
              ❤️ {likes}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
