import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Birds by Feather
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Connecting People with Nature
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-600/20">
              About Us
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
