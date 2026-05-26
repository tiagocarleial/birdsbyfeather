import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Privacy Policy - Birds by Feather',
  description: 'Privacy Policy for Birds by Feather - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="privacy" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Birds by Feather ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages you visit and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device identifiers</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Cookies and Tracking Technologies</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the website and improve your experience. When you access our website, your personal information is not collected through the use of tracking technology.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most browsers are set to accept cookies by default. You can remove or reject cookies, but this could affect the availability and functionality of our website.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and support</li>
              <li>Send you updates and information about bird watching and conservation</li>
              <li>Find and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>

            <h3 className="text-xl font-semibold text-white mb-3">YouTube Embedded Videos</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website embeds live stream videos from YouTube. When you view these videos, YouTube may collect information about your viewing activity. YouTube's use of information is governed by the Google Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Google AdSense</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Analytics</h3>
            <p className="text-gray-300 leading-relaxed">
              We may use third-party analytics services to monitor and analyze website traffic. These services may use cookies and similar technologies to collect information about your use of the website.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Any information transmitted through our website is done at your own risk. We cannot guarantee the security of information transmitted through our website.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website is intended for general audiences and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">California Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you are a California resident, you have specific rights regarding access to your personal information under the California Consumer Privacy Act (CCPA). This includes the right to request information about what personal data we collect, use, and disclose.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">European Privacy Rights (GDPR)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal information.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <p className="text-white font-semibold">Birds by Feather</p>
              <p className="text-gray-400">Email: privacy@birdsbyfeather.com</p>
            </div>
          </div>

          <div className="text-center py-8">
            <Link href="/">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
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
