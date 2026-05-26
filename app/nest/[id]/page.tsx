import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { birdNests } from '@/data/nests';
import Navigation from '@/components/Navigation';
import NestDetailClient from '@/components/NestDetailClient';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const nest = birdNests.find(n => n.id === id);

  if (!nest) {
    return {
      title: 'Nest Not Found',
    };
  }

  return {
    title: `${nest.name} - Live ${nest.species} Nest Camera`,
    description: nest.description || `Watch ${nest.name} live. ${nest.species} nest camera streaming 24/7 from ${nest.location}. Observe nesting behavior, feeding routines, and wildlife in real-time.`,
    keywords: [
      nest.species,
      'bird nest camera',
      'live bird cam',
      nest.location,
      'wildlife stream',
      'bird watching',
      `${nest.species} nest`,
      'nature camera',
      'live animal cam',
    ],
    openGraph: {
      title: `${nest.name} - Live ${nest.species} Nest Camera`,
      description: nest.description || `Watch ${nest.name} live from ${nest.location}. 24/7 streaming.`,
      type: 'video.other',
      url: `https://birdsbyfeather.com/nest/${nest.id}`,
      images: [
        {
          url: nest.thumbnail || `https://i.ytimg.com/vi/${nest.youtubeId}/maxresdefault.jpg`,
          width: 1280,
          height: 720,
          alt: nest.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${nest.name} - Live ${nest.species} Nest Camera`,
      description: nest.description || `Watch ${nest.name} live from ${nest.location}.`,
      images: [nest.thumbnail || `https://i.ytimg.com/vi/${nest.youtubeId}/maxresdefault.jpg`],
    },
    alternates: {
      canonical: `https://birdsbyfeather.com/nest/${nest.id}`,
    },
  };
}

export async function generateStaticParams() {
  return birdNests.map((nest) => ({
    id: nest.id,
  }));
}

export default async function NestDetailPage({ params }: PageProps) {
  const { id } = await params;
  const nest = birdNests.find(n => n.id === id);

  if (!nest) {
    notFound();
  }

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: nest.name,
    description: nest.description,
    thumbnailUrl: nest.thumbnail || `https://i.ytimg.com/vi/${nest.youtubeId}/maxresdefault.jpg`,
    uploadDate: new Date().toISOString(),
    contentUrl: `https://www.youtube.com/watch?v=${nest.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${nest.youtubeId}`,
    publisher: {
      '@type': 'Organization',
      name: 'Birds by Feather',
      url: 'https://birdsbyfeather.com',
    },
    location: {
      '@type': 'Place',
      name: nest.location,
    },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero Section with Video */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <Link href="/nests" className="hover:text-white transition-colors">Nests</Link>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <span className="text-white">{nest.name}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Video Player with Camera Selection */}
            <NestDetailClient nest={nest} />

            {/* Nest Info */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
                <span className="text-green-400 font-semibold text-sm">{nest.species}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {nest.name}
              </h1>

              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <i className="fa-solid fa-location-dot text-green-500"></i>
                <span className="text-lg">{nest.location}</span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {nest.description}
              </p>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-circle-info text-blue-400"></i>
                  Viewing Tips
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Best viewing times are early morning and late afternoon when parents are most active</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Use the YouTube chat to connect with other viewers and share observations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Be patient - nature operates on its own schedule</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Information */}
      {nest.family && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-10 bg-green-500 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Family</h2>
              </div>
              <p className="text-gray-400 text-lg">
                Get to know the eagles that call this nest home
              </p>
            </div>

            {/* Parents */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fa-solid fa-heart text-red-400"></i>
                The Parents
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {nest.family.parents.map((parent, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-dove text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{parent.name}</h4>
                        <span className="text-green-400 text-sm">{index === 0 ? 'Female' : 'Male'}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{parent.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Offspring */}
            {nest.family.offspring && nest.family.offspring.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-baby text-yellow-400"></i>
                  The Chicks
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {nest.family.offspring.map((chick, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                          <i className="fa-solid fa-egg text-white text-xl"></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{chick.name}</h4>
                          {chick.hatchDate && (
                            <span className="text-yellow-400 text-sm">
                              Hatched: {new Date(chick.hatchDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{chick.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Species Facts Section */}
      <section className="bg-gray-800/30 border-y border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{nest.species} Facts</h2>

            {/* Bald Eagle Facts */}
            {nest.species === 'Bald Eagle' && (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">7-8 ft</div>
                    <div className="text-gray-400">Wingspan</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">30+ years</div>
                    <div className="text-gray-400">Lifespan in Wild</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">120 mph</div>
                    <div className="text-gray-400">Diving Speed</div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Did You Know?</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Bald eagles mate for life and often return to the same nest year after year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Eagle nests can weigh up to 2,000 pounds and measure 8 feet across</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Young eagles don't develop their distinctive white head and tail until 4-5 years old</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Bald eagles were removed from the endangered species list in 2007 after successful conservation efforts</span>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/* Blue Tit Facts */}
            {nest.species === 'Blue Tit' && (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">7-9 inches</div>
                    <div className="text-gray-400">Wingspan</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">2-3 years</div>
                    <div className="text-gray-400">Average Lifespan</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">7-14 eggs</div>
                    <div className="text-gray-400">Clutch Size</div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Did You Know?</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Blue tits are one of the most common and recognizable garden birds in Europe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Parents may make up to 1,000 feeding trips per day to satisfy their hungry chicks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Blue tits are acrobatic birds, often hanging upside down while foraging for insects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>They prefer to nest in tree holes or nest boxes, and will readily use garden nest boxes</span>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/* Common Kestrel Facts */}
            {nest.species === 'Common Kestrel' && (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">24 inches</div>
                    <div className="text-gray-400">Wingspan</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">15 years</div>
                    <div className="text-gray-400">Maximum Lifespan</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">4-6 eggs</div>
                    <div className="text-gray-400">Clutch Size</div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Did You Know?</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Common kestrels are known for their distinctive hovering hunting technique, staying stationary in the air while scanning for prey</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>They can see ultraviolet light, which helps them track vole trails marked by urine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Kestrels are cavity nesters and often use old nests of crows or other birds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>They are one of the most common birds of prey in Europe, found in diverse habitats from cities to farmland</span>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/* Osprey Facts */}
            {nest.species === 'Osprey' && (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">5 ft</div>
                    <div className="text-gray-400">Wingspan</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">15-20 years</div>
                    <div className="text-gray-400">Lifespan in Wild</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">2-4 eggs</div>
                    <div className="text-gray-400">Clutch Size</div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Did You Know?</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Ospreys are expert fishermen, diving feet-first into water to catch fish with their reversible outer toe and sharp talons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>They have a 99% diet of live fish, making them one of the most specialized raptors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>Ospreys are found on every continent except Antarctica, making them one of the most widespread raptor species</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fa-solid fa-feather text-green-500 mt-1"></i>
                      <span>They build large stick nests that can be reused and added to for many years, sometimes weighing over 400 pounds</span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-600/20 inline-flex items-center gap-2">
              <i className="fa-solid fa-arrow-left"></i>
              Back to Home
            </button>
          </Link>
        </div>
      </section>

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
