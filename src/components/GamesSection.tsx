import Link from 'next/link';

export default function GamesSection() {
  // 右侧游戏导航数据
  const rightNavGames = [
    {
      id: 1,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot02.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 2,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot01.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 3,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot03.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 4,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot02.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 5,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot04.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 6,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot03.jpg',
      link: '/play/age-of-empires-mythologies'
    }
  ];

  // 底部游戏导航数据
  const bottomNavGames = [
    {
      id: 1,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot01.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 2,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot01.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 3,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot02.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 4,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot02.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 5,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot03.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 6,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot03.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 7,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot04.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 8,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot04.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 9,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot01.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 10,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot01.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 11,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot02.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 12,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot02.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 13,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot03.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 14,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot03.jpg',
      link: '/play/age-of-empires-mythologies'
    },
    {
      id: 15,
      title: 'Age of Empires: The Age of Kings',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot04.jpg',
      link: '/play/age-of-empires-the-age-of-kings'
    },
    {
      id: 16,
      title: 'Age of Empires: Mythologies',
      image: 'https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_Mythologies_(USA)/screenshots/screenshot04.jpg',
      link: '/play/age-of-empires-mythologies'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 h-[8vh]">
          <h2 className="text-sm sm:text-2xl md:text-3xl font-bold mb-2 font-game">Play Age of Empires DS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Experience the classic real-time strategy game on your browser
          </p>
        </div>

        {/* 游戏区域主体 */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch">
          {/* 左侧 iframe 部分 */}
          <div className="lg:w-3/4">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              {/* 实际 iframe 内容 */}
              <div className="flex-grow h-[60vh] lg:h-auto">
                <iframe 
                  src="https://www.retrogames.cc/embed/35463-age-of-empires-the-age-of-kings-usa.html" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  webkitallowfullscreen="true" 
                  mozallowfullscreen="true" 
                  scrolling="no"
                  className="w-full h-full"
                ></iframe>
              </div>

            </div>
          </div>

          {/* 右侧游戏导航 */}
          <div className="lg:w-1/4 flex flex-col">
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {rightNavGames.map((game) => (
                <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold mb-2 truncate">{game.title}</h3>
                    <Link href={game.link} className="inline-block bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-bold transition-colors w-full text-center">
                      Play Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部游戏导航 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {bottomNavGames.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-2 truncate">{game.title}</h3>
                <Link href={game.link} className="inline-block bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-bold transition-colors w-full text-center">
                  Play Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
