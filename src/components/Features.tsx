export default function Features() {
  // 功能数据
  const features = [
    {
      id: 1,
      title: 'Play Instantly in Your Browser',
      description: 'Experience the legendary Age of Empires DS directly in your browser without any downloads or installations. Our platform brings the complete gaming experience to your fingertips, allowing you to dive into epic real-time strategy battles within seconds. This Nintendo DS classic captures the essence of the beloved franchise while adapting it perfectly for handheld systems. Whether you are a longtime fan of the series or discovering this title for the first time, our browser-based emulator ensures seamless gameplay that preserves every strategic depth and historical detail. Simply click and start building your empire, managing resources, and commanding armies right from your web browser. The intuitive interface makes it easy to navigate through complex military campaigns and diplomatic negotiations. You will find that this classic strategy game offers the same depth and complexity as the original PC versions, with controls optimized for handheld play. Start your conquest today and experience the thrill of medieval warfare with dozens of civilizations to choose from. Each civilization features unique units, technologies, and historical bonuses that reflect their real-world strengths and cultural heritage. Master the art of war and lead your armies to victory across multiple historical campaigns that span centuries of human civilization and conquest.',
      icon: '💻',
      image: '/images/feature1-age-of-empires-ds.png'
    },
    {
      id: 2,
      title: 'Free Access to Complete Collection',
      description: 'Enjoy the entire game library completely free of charge, with no hidden fees, subscriptions, or premium tiers required. We believe that classic gaming should be accessible to everyone, which is why this beloved strategy title and all related games are available at zero cost. Our commitment means you can explore every campaign, master every civilization, and complete every historical scenario without spending a single penny. The experience includes multiple game modes, challenging AI opponents, and rich historical content that delivers hundreds of hours of entertainment. Join thousands of players who are already enjoying Age of Empires DS and discover why this Nintendo DS adaptation remains one of the most beloved strategy games on the platform. Build your civilization from scratch and lead your people to glory through countless historical battles and epic conquests. Train your armies, construct magnificent wonders, and research advanced technologies to outsmart your opponents in every engagement and secure your legacy.',
      icon: '🆓',
      image: '/images/feature2-age-of-empires-ds.jpg'
    },
    {
      id: 3,
      title: 'Gaming on Any Device',
      description: 'Play across all your devices with full cross-platform compatibility that adapts to your gaming lifestyle. Whether you prefer gaming on your desktop computer, laptop, tablet, or smartphone, our platform delivers a consistent and optimized experience on every screen size. Advanced browser technology ensures smooth performance regardless of your operating system, be it Windows, macOS, Linux, iOS, or Android. The responsive design automatically adjusts the interface to fit your device perfectly, maintaining intuitive controls and clear visibility of the battlefield. Take your empire-building adventure anywhere you go, switching between devices seamlessly while preserving your progress and continuing your strategic conquest without interruption. Age of Empires DS looks and plays beautifully on any modern device, bringing the classic experience to your pocket wherever you travel and whenever you want to play. Cloud save functionality ensures your progress is always synchronized across all platforms and devices.',
      icon: '📱',
      image: '/images/feature3-age-of-empires-ds.jpg'
    },
    {
      id: 4,
      title: 'Premium Emulation Quality',
      description: 'Experience premium emulation quality that faithfully reproduces every aspect of the original Nintendo DS gaming experience. Our cutting-edge technology ensures smooth performance with enhanced visuals, reduced loading times, and improved clarity while maintaining the authentic feel that fans love. Every unit animation, resource gathering mechanic, and combat sequence has been carefully preserved and optimized for modern browsers. The dual-screen layout that defines gameplay is perfectly replicated, giving you complete access to both the main battlefield view and the strategic overview panel. With regular updates and performance improvements, our platform continues to enhance the experience, ensuring this classic strategy game remains playable for generations to come. The Age of Empires DS gaming experience has never been better, with enhanced graphics and responsive controls that make every battle feel authentic and immersive. Our dedicated team works tirelessly to maintain compatibility with the latest browsers and devices.',
      icon: '🎮',
      image: '/images/feature4-age-of-empires-ds.jpg'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-game">Why Choose Our Age of Empires DS Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the ultimate destination for playing Age of Empires DS online. Our platform combines convenience, quality, and accessibility to deliver the best gaming experience available anywhere on the web. Whether you are a casual player or a dedicated strategist, you will find everything you need to enjoy this timeless classic and relive the glory days of handheld gaming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
