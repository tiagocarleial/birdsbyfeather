import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'About Us - Birds by Feather | Live Bird Nest Cameras',
  description: 'Learn about Birds by Feather, our mission to connect people with nature through live bird nest cameras, and how we support wildlife conservation and education.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Birds by Feather
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Connecting people with nature through live bird nest cameras from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Our Mission */}
          <section>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-bullseye text-green-400 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Birds by Feather is dedicated to bringing the wonder of nature into your home through carefully curated live bird nest cameras. Our mission is to foster a deeper connection between people and wildlife, promoting conservation awareness and environmental education through real-time observation of birds in their natural habitats.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe that by witnessing the daily lives of these magnificent creatures - from nest building and egg incubation to feeding and fledging - viewers develop a profound appreciation for wildlife and the importance of protecting their habitats for future generations.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-video text-blue-400 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white">What We Do</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We aggregate and showcase live bird nest cameras from wildlife organizations, conservancies, and nature reserves worldwide. Our platform provides:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">24/7 Live Streaming</h3>
                    <p className="text-gray-400">Access to live bird nest cameras broadcasting around the clock, capturing every moment of avian life.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Educational Content</h3>
                    <p className="text-gray-400">Detailed information about each bird species, their behaviors, habitats, and family dynamics.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Multiple Camera Angles</h3>
                    <p className="text-gray-400">Many nests feature multiple cameras for comprehensive viewing experiences.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-400 text-xl mt-1"></i>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Global Coverage</h3>
                    <p className="text-gray-400">Bird nest cameras from diverse locations worldwide, showcasing various species and ecosystems.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Why Bird Watching Matters */}
          <section>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-heart text-yellow-400 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white">Why Bird Watching Matters</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-brain text-purple-400"></i>
                    Mental Health Benefits
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Scientific research has shown that watching birds and connecting with nature significantly reduces stress, anxiety, and depression. The calming effect of observing wildlife provides a form of mindfulness meditation that improves overall mental wellbeing and emotional balance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-book-open text-blue-400"></i>
                    Educational Value
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Live nest cameras offer unprecedented educational opportunities for students, teachers, and lifelong learners. Viewers can observe real-time biological processes including courtship, nesting, incubation, hatching, feeding, and fledging - concepts that are difficult to teach from textbooks alone.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-leaf text-green-400"></i>
                    Conservation Awareness
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    By witnessing the challenges birds face in the wild - from weather events to predators - viewers develop a deeper understanding of conservation needs. This awareness often translates into support for habitat preservation, environmental protection policies, and wildlife conservation organizations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-users text-orange-400"></i>
                    Community Building
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bird watching creates connections among people worldwide who share a passion for wildlife. Online communities form around specific nests, with viewers sharing observations, celebrating milestones like hatchings and first flights, and supporting each other through the challenges of nature.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Technology Behind the Cameras */}
          <section>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-camera text-purple-400 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white">The Technology Behind Our Cameras</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The bird nest cameras we feature are carefully installed and maintained by professional wildlife organizations and conservancies. These cameras are:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Non-Invasive Installation</h3>
                  <p className="text-gray-400 text-sm">
                    Cameras are positioned to minimize disturbance to nesting birds, ensuring natural behavior is preserved.
                  </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">High-Quality Video</h3>
                  <p className="text-gray-400 text-sm">
                    HD streaming captures intricate details of bird behavior and nest activity in real-time.
                  </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Infrared Night Vision</h3>
                  <p className="text-gray-400 text-sm">
                    Many cameras feature infrared technology for nighttime viewing without disturbing the birds.
                  </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Weather Resistant</h3>
                  <p className="text-gray-400 text-sm">
                    Durable equipment designed to withstand harsh weather conditions throughout nesting seasons.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Species We Feature */}
          <section>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-dove text-emerald-400 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white">Species We Feature</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our platform showcases a diverse range of bird species, each with unique characteristics and behaviors:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-white font-semibold text-lg">Bald Eagles</h3>
                  <p className="text-gray-400">
                    North America's iconic raptors, known for their impressive size, powerful hunting abilities, and devoted parenting. Bald eagles mate for life and return to the same nest year after year, often adding to it until it becomes one of the largest bird nests in the world.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-white font-semibold text-lg">Ospreys</h3>
                  <p className="text-gray-400">
                    Expert fish hunters with spectacular diving abilities, ospreys are found on every continent except Antarctica. Their remarkable fishing techniques and long-distance migrations make them fascinating subjects for wildlife observation.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-white font-semibold text-lg">Blue Tits</h3>
                  <p className="text-gray-400">
                    Small, colorful songbirds native to Europe, blue tits are energetic parents that can make hundreds of feeding trips daily to satisfy their growing chicks. Their vibrant plumage and acrobatic movements delight viewers.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-white font-semibold text-lg">Common Kestrels</h3>
                  <p className="text-gray-400">
                    Small falcons known for their distinctive hovering hunting technique, kestrels are excellent mousers and adapt well to various habitats including urban environments. Their hovering flight is one of nature's most recognizable behaviors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Conservation */}
          <section>
            <div className="bg-gradient-to-br from-green-900/50 to-gray-800 border border-green-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-hand-holding-heart text-green-400 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white">Support Conservation Efforts</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The live camera streams we feature are made possible by dedicated wildlife organizations and conservancies. These organizations work tirelessly to protect bird habitats, conduct research, and educate the public about wildlife conservation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We encourage our viewers to support these organizations through donations, volunteering, or spreading awareness about their important work. Every contribution helps ensure that future generations can continue to enjoy these magnificent birds in the wild.
              </p>
              <Link href="/nests">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-600/20">
                  Explore Live Nest Cameras
                </button>
              </Link>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-gray-300 text-lg mb-6">
                Have questions, suggestions, or want to share a bird nest camera? We'd love to hear from you!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all">
                    Contact Us
                  </button>
                </Link>
                <Link href="/">
                  <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>

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
