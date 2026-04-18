import Link from 'next/link';

export default function HomePage() {
  // 游戏分类数据
  const gameCategories = [
    { id: 1, name: 'Action', icon: '⚡', link: '/category/action' },
    { id: 2, name: 'Adventure', icon: '🧭', link: '/category/adventure' },
    { id: 3, name: 'Basketball', icon: '🏀', link: '/category/basketball' },
    { id: 4, name: 'Bike', icon: '🚲', link: '/category/bike' },
    { id: 5, name: 'Car', icon: '🚗', link: '/category/car' },
    { id: 6, name: 'Card', icon: '🃏', link: '/category/card' },
    { id: 7, name: 'Casual', icon: '🎮', link: '/category/casual' },
    { id: 8, name: 'Clicker', icon: '🖱️', link: '/category/clicker' },
    { id: 9, name: 'Driving', icon: '🚘', link: '/category/driving' },
    { id: 10, name: 'Escape', icon: '🔓', link: '/category/escape' },
    { id: 11, name: 'Flash', icon: '⚡', link: '/category/flash' },
    { id: 12, name: 'FPS', icon: '🔫', link: '/category/fps' },
    { id: 13, name: 'Horror', icon: '👻', link: '/category/horror' },
    { id: 14, name: 'Strategy', icon: '♟️', link: '/category/strategy' },
    { id: 15, name: 'Mahjong', icon: '🎴', link: '/category/mahjong' },
    { id: 16, name: 'Minecraft', icon: '🏗️', link: '/category/minecraft' },
    { id: 17, name: 'Pool', icon: '🎱', link: '/category/pool' },
    { id: 18, name: 'Puzzle', icon: '🧩', link: '/category/puzzle' },
    { id: 19, name: 'Shooting', icon: '🔫', link: '/category/shooting' },
    { id: 20, name: 'Soccer', icon: '⚽', link: '/category/soccer' },
    { id: 21, name: 'Sports', icon: '🏅', link: '/category/sports' },
    { id: 22, name: 'Stickman', icon: '🥷', link: '/category/stickman' },
    { id: 23, name: 'Thinky', icon: '🤔', link: '/category/thinky' },
    { id: 24, name: 'Tower Defense', icon: '🏰', link: '/category/tower-defense' }
  ];

  // 推荐游戏数据
  const recommendedGames = [
    {
      id: 1,
      title: 'Super Smash Bros. Ultimate',
      platform: 'Switch'
    },
    {
      id: 2,
      title: 'The Legend of Zelda: Breath of the Wild',
      platform: 'Switch'
    },
    {
      id: 3,
      title: 'Mario Kart 8 Deluxe',
      platform: 'Switch'
    },
    {
      id: 4,
      title: 'Animal Crossing: New Horizons',
      platform: 'Switch'
    },
    {
      id: 5,
      title: 'Super Mario Odyssey',
      platform: 'Switch'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 主内容区 */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 左侧 8*5 布局游戏导航栏 */}
        <div className="lg:w-3/4">
          <h2 className="text-2xl font-bold mb-4">Game Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {gameCategories.map((category) => (
              <Link key={category.id} href={category.link} className="flex items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="mr-1 text-lg">{category.icon}</span>
                <span className="font-medium text-xs">{category.name}</span>
              </Link>
            ))}
          </div>

          {/* 游戏列表区域 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              <Link href="/play/age-of-empires-the-age-of-kings" className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img src="/images/coverimage/feature-age-of-empires-ds.webp" alt="Age of Empires" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Age of Empires DS</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500 mr-2">Strategy</span>
                      <span className="text-xs text-gray-500">❤️ 254</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Tekken 3</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 612</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Super Smash Bros.</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 394</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Street Fighter II</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 167</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Dragon Ball Z - Super Sonic War</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 218</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Sonic the Hedgehog 2</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 173</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">JoJo's Bizarre Adventure</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 727</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Sonic The Hedgehog</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 140</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Sonic 2 Heroes</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 60</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Super Bomberman 4</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 167</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">DragonBall Z - Super Sonic War</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 99</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Top Gear</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Driving</span>
                    <span className="text-xs text-gray-500">❤️ 136</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Super Bomberman</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 44</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Sonic the Hedgehog 3</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 111</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Marvel vs Capcom</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 598</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Sonic & Knuckles</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 254</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Mortal Kombat</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 420</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Final Fantasy VII</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Adventure</span>
                    <span className="text-xs text-gray-500">❤️ 892</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">The Legend of Zelda</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Adventure</span>
                    <span className="text-xs text-gray-500">❤️ 756</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Super Mario 64</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Adventure</span>
                    <span className="text-xs text-gray-500">❤️ 921</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Metal Gear Solid</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 876</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Donkey Kong Country</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 654</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Kirby's Adventure</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 432</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Game Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Contra</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500 mr-2">Action</span>
                    <span className="text-xs text-gray-500">❤️ 512</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧边栏 */}
        <div className="lg:w-1/4 space-y-6">
          {/* 广告栏 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-3">Advertisement</h3>
            <div className="bg-gray-100 rounded p-4 text-center">
              <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">Ad Content</span>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
            </div>
          </div>

          {/* 推荐游戏区域 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-3">Recommended Games</h3>
            <ul className="space-y-3">
              {recommendedGames.map((game) => (
                <li key={game.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">{game.title}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{game.platform}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
