export default function Features() {
  // 功能数据
  const features = [
    {
      id: 1,
      title: 'No Downloads Required',
      description: 'Play Age of Empires DS games directly in your browser without downloading any software or emulators.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Free to Play',
      description: 'All games on our site are completely free to play, with no hidden costs or subscriptions.',
      icon: '🆓'
    },
    {
      id: 3,
      title: 'Cross-Platform',
      description: 'Play on any device with a web browser, including desktop, laptop, tablet, and smartphone.',
      icon: '📱'
    },
    {
      id: 4,
      title: 'High Quality',
      description: 'Experience the original gameplay with enhanced performance and smooth emulation.',
      icon: '🎮'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-game">Why Choose Our Site</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer the best way to play Age of Empires DS retro games online, with features designed for the ultimate gaming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
