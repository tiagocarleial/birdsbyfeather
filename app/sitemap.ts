import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://birdsbyfeather.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Bird nest detail pages
  const birdIds = [
    'dale-hollow-eagle',
    'osprey-carnyx',
    'garden-birds-nest',
    'forestry-england-osprey',
    'fobb-bald-eagle',
    'uist-white-tailed-eagle',
    'explore-osprey',
    'bad-salzungen-stork',
    'dna-stork',
    'ashgrove-peregrine',
    'cornell-bird-cams',
    'great-lakes-eagle',
    'rspb-multi-camera',
    'kotkaklubi-stork',
    'kotkaklubi-various',
    'explore-penguins-puffins',
    'faucon-crecerelle',
  ];

  const birdPages = birdIds.map((id) => ({
    url: `${baseUrl}/bird/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...birdPages];
}
