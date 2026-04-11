import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-game">
              Age of Empires DS
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Relive the Classic Strategy Game Experience
            </p>
            <p className="text-lg mb-8">
              Play Age of Empires DS retro games online for free in your browser. Build civilizations, lead armies, and conquer empires without downloading any software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/play" className="retro-button text-center">
                Play Now
              </Link>
              <Link href="/games" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-6 py-3 rounded-md font-bold transition-all duration-200 text-center">
                Browse Games
              </Link>
            </div>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://www.retrogames.cc/media/Nintendo_DS/Age_of_Empires_-_The_Age_of_Kings_(USA)/screenshots/screenshot01.jpg" 
                alt="Age of Empires DS Gameplay" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-dark p-4 rounded-md shadow-lg">
                <p className="font-game text-sm">Free to Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
