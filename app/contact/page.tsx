import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Contact Us - Birds by Feather',
  description: 'Get in touch with Birds by Feather. Share your feedback, suggestions, or bird nest camera recommendations.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="contact" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              We'd love to hear from you! Share your feedback, suggestions, or bird nest camera recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-envelope text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-3">Send us a message anytime</p>
              <a href="mailto:contact@birdsbyfeather.com" className="text-green-400 hover:text-green-300 transition-colors">
                contact@birdsbyfeather.com
              </a>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-camera text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Submit a Camera</h3>
              <p className="text-gray-400 mb-3">Know of a great bird cam?</p>
              <a href="mailto:submit@birdsbyfeather.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                submit@birdsbyfeather.com
              </a>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-shield-halved text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Privacy</h3>
              <p className="text-gray-400 mb-3">Questions about privacy?</p>
              <a href="mailto:privacy@birdsbyfeather.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                privacy@birdsbyfeather.com
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-green-400"></i>
                  How do I submit a bird nest camera to be featured?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-7">
                  We're always looking for high-quality bird nest cameras to feature! Please email us at <span className="text-green-400">submit@birdsbyfeather.com</span> with the YouTube live stream link, information about the bird species, location, and any details about the organization running the camera. We review all submissions and prioritize cameras with consistent uptime, good video quality, and active nests.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-green-400"></i>
                  Are all the streams live 24/7?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-7">
                  Most of our featured cameras stream 24/7 throughout the nesting season. However, some cameras may have temporary outages due to weather, technical issues, or when birds are not actively nesting. We regularly monitor stream status and update our listings accordingly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-green-400"></i>
                  Can I use your content on my website or social media?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-7">
                  The video streams are hosted on YouTube and are subject to the respective wildlife organizations' terms of use. Our written content and website design are protected by copyright. If you'd like to share or reference our content, please contact us for permission. We're generally happy to grant permission with proper attribution.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-green-400"></i>
                  How can I support the wildlife organizations?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-7">
                  Each bird nest camera is maintained by dedicated wildlife organizations and conservancies. We encourage viewers to visit the YouTube channels of the streams you enjoy and look for donation links or membership information. Supporting these organizations helps them continue their important conservation work and maintain the cameras we all love watching.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-green-400"></i>
                  Why is a camera no longer working?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-7">
                  Cameras can go offline for various reasons including weather events, technical issues, the end of nesting season, or changes in bird behavior. We strive to keep our listings current, but sometimes streams end unexpectedly. If you notice a camera that's been offline for an extended period, please let us know at <span className="text-green-400">contact@birdsbyfeather.com</span>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-green-400"></i>
                  Do you have cameras from my region?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-7">
                  We feature bird nest cameras from locations around the world. Our collection is constantly growing, and we're actively seeking cameras from diverse regions to showcase different species and ecosystems. If you know of a great camera from your area, please submit it to us!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-green-400"></i>
                  How do you choose which cameras to feature?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-7">
                  We select cameras based on several criteria: video quality, stream reliability, bird species diversity, educational value, and the reputation of the managing organization. We prioritize cameras that offer unique viewing opportunities, feature interesting behaviors, or showcase species that are important for conservation awareness.
                </p>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="bg-gradient-to-br from-green-900/30 to-gray-800 border border-green-700/50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">We Value Your Input</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your feedback helps us improve Birds by Feather and create a better experience for wildlife enthusiasts worldwide. Whether you have suggestions for new features, want to report a technical issue, or just want to share your bird watching experiences, we're all ears!
            </p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What We're Looking For:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span>New bird nest camera recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span>Website feature suggestions and improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span>Error reports or technical issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span>Partnership and collaboration opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span>Educational content suggestions</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-400 mt-1"></i>
                  <span>Your bird watching stories and experiences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Connect With Our Community</h2>
            <p className="text-gray-300 text-lg mb-6">
              Join our growing community of bird enthusiasts and nature lovers. Share observations, celebrate hatchings, and connect with fellow bird watchers from around the world.
            </p>
            <div className="flex justify-center gap-4">
              <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-twitter text-white text-xl"></i>
              </button>
              <button className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-facebook text-white text-xl"></i>
              </button>
              <button className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-instagram text-white text-xl"></i>
              </button>
              <button className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all">
                <i className="fa-brands fa-youtube text-white text-xl"></i>
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-8">
            <Link href="/nests">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-600/20 mr-4">
                Explore Live Cameras
              </button>
            </Link>
            <Link href="/">
              <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all">
                Back to Home
              </button>
            </Link>
          </div>

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
