'use client';

export default function FAQ() {
  // FAQ 数据
  const faqs = [
    {
      id: 1,
      question: 'What is Age of Empires DS and how does it differ from PC versions?',
      answer: 'Age of Empires DS is a portable adaptation of the legendary real-time strategy franchise for the Nintendo DS handheld console. Unlike the PC versions, Age of Empires DS is specifically designed for the dual-screen format and touch-based controls, making it uniquely suited for on-the-go gameplay. The game maintains the core strategic elements that fans love while optimizing the interface for handheld play, including intuitive stylus controls and a dual-screen layout that provides both battlefield action and strategic overview simultaneously. Age of Empires DS offers the same depth of civilization building, resource management, and military conquest as the PC games, but in a portable format that fits in your pocket.'
    },
    {
      id: 2,
      question: 'Do I need to download anything to play Age of Empires DS on your platform?',
      answer: 'No, you do not need to download anything to play Age of Empires DS on our platform. All games run directly in your browser through our advanced emulator technology, which means you can start playing within seconds of visiting our site. There are no downloads, installations, or special software required. Our browser-based approach ensures that Age of Empires DS is accessible to players on any modern device without the need for additional software or hardware.'
    },
    {
      id: 3,
      question: 'Is it free to play Age of Empires DS on your platform?',
      answer: 'Yes, Age of Empires DS is completely free to play on our platform with no hidden costs, subscriptions, or premium tiers. We believe that classic gaming should be accessible to everyone, which is why we offer the complete Age of Empires DS experience at no charge. You can enjoy all campaigns, civilizations, and game modes without spending a single penny, making it easy for both longtime fans and newcomers to experience the magic of Age of Empires DS.'
    },
    {
      id: 4,
      question: 'What devices can I play Age of Empires DS on?',
      answer: 'You can play Age of Empires DS on any device with a modern web browser, including desktop computers, laptops, tablets, and smartphones. Our platform is fully responsive and optimized for all screen sizes, automatically adjusting the interface to provide the best possible experience on your chosen device. Whether you prefer gaming on a large desktop monitor or a small smartphone screen, Age of Empires DS will adapt to your device and provide an authentic handheld gaming experience.'
    },
    {
      id: 5,
      question: 'How do the controls work for Age of Empires DS on your platform?',
      answer: 'The controls for Age of Empires DS on our platform are designed to replicate the original Nintendo DS experience while adapting to modern devices. On touchscreen devices, you can use your finger or stylus to select units and issue commands, just like on the original console. On desktop computers, keyboard controls are available for precise unit selection and management. The dual-screen layout that defines Age of Empires DS is preserved through our emulator, giving you the same strategic overview and battlefield awareness that made the original game so beloved.'
    },
    {
      id: 6,
      question: 'Can I save my progress in Age of Empires DS?',
      answer: 'Yes, our platform supports save states for Age of Empires DS, allowing you to save your progress at any point and continue playing later. This feature ensures that you can pick up right where you left off, whether you need to take a break or switch between devices. The save functionality preserves your entire game state, including your civilization development, resource stockpiles, and military forces, so you never have to worry about losing your progress while playing Age of Empires DS.'
    },
    {
      id: 7,
      question: 'What Age of Empires DS games are available on your platform?',
      answer: 'Our platform offers the complete Age of Empires DS collection, including Age of Empires: The Age of Kings and Age of Empires: Mythologies. These titles represent the pinnacle of handheld strategy gaming, offering rich historical campaigns, diverse civilizations, and deep strategic gameplay. Each Age of Empires DS title provides hundreds of hours of entertainment, with multiple civilizations to master, technologies to research, and historical scenarios to conquer.'
    },
    {
      id: 8,
      question: 'How does your platform ensure the quality of the Age of Empires DS experience?',
      answer: 'Our platform uses cutting-edge emulation technology to ensure that Age of Empires DS runs smoothly with enhanced visuals, reduced loading times, and improved clarity while maintaining the authentic feel of the original game. We regularly update our emulation software to provide the best possible Age of Empires DS experience, with optimizations for modern browsers and devices. Our dedicated team works tirelessly to maintain compatibility and performance, ensuring that Age of Empires DS remains playable for generations to come.'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-game">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about playing Age of Empires DS games on our site.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
