import Link from 'next/link';
import BirdsHomeCam from '@/components/BirdsHomeCam';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Birds by Feather</h1>
            <nav className="flex gap-4">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Live Bird Cameras
            </h2>
            <p className="text-xl text-gray-400">
              Watch magnificent birds in their natural habitat
            </p>
          </div>

          {/* Bird Camera Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BirdsHomeCam
              species="Bald Eagle"
              liveUrl="https://www.youtube.com/@DaleHollowEagleCamera/live"
              title="Dale Hollow Eagle Nest"
              description="Watch majestic bald eagles in their natural habitat. Observe these powerful birds of prey as they nest, hunt, and raise their young."
              location="Dale Hollow, USA"
            />

            <BirdsHomeCam
              species="Osprey"
              liveUrl="https://www.youtube.com/@CarnyxWildTwo/live"
              title="Osprey Nest Live Cam"
              description="Watch ospreys, magnificent fish-eating raptors, in their natural habitat. Observe their impressive fishing skills and parenting behaviors."
              location="Wildlife Area"
              thumbnail="https://i.ytimg.com/vi/1JmvBGTkxbE/hqdefault.jpg"
              videoId="1JmvBGTkxbE"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 Birds by Feather - Connecting People with Nature</p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
