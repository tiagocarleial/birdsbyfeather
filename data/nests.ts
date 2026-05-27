import { BirdNest } from '@/types/birdnest';

export const birdNests: BirdNest[] = [
  {
    id: 'eagle-nest-1',
    name: 'Big Bear Eagle Nest',
    species: 'Bald Eagle',
    location: 'Big Bear Valley, California',
    liveUrl: 'https://www.youtube.com/channel/UCsFgbVuhRrPV5FqyN7kOD8g/live',
    youtubeId: 'B4-L2nfGcuE',
    cameras: [
      {
        id: 'cam1',
        name: 'Cam 1',
        liveUrl: 'https://www.youtube.com/channel/UCsFgbVuhRrPV5FqyN7kOD8g/live',
        youtubeId: 'B4-L2nfGcuE',
      },
      {
        id: 'cam2',
        name: 'Cam 2',
        liveUrl: 'https://www.youtube.com/channel/UCexLjK6HR3XTLZ2BNZGujkw/live',
        youtubeId: '41eq4VzCYc4',
      },
    ],
    status: 'active',
    description: 'Watch a family of majestic bald eagles in their natural habitat in Big Bear Valley, California.',
    family: {
      parents: [
        {
          name: 'Jackie',
          description: 'Jackie is the female bald eagle who has been nesting in Big Bear Valley for several years. She is a dedicated mother known for her protective nature and excellent hunting skills.',
        },
        {
          name: 'Shadow',
          description: 'Shadow is the male bald eagle and Jackie\'s mate. He is responsible for bringing food to the nest and protecting the family territory. Shadow is known for his impressive wingspan and distinctive markings.',
        },
      ],
      offspring: [
        {
          name: 'Eaglet 1',
          hatchDate: '2026-03-15',
          description: 'The first eaglet to hatch this season. Strong and healthy, showing rapid growth and development.',
        },
        {
          name: 'Eaglet 2',
          hatchDate: '2026-03-17',
          description: 'The second eaglet, slightly smaller but equally spirited. Often seen competing with its sibling for food.',
        },
      ],
    },
  },
  {
    id: 'bluetit-nest-1',
    name: 'Blue Tit Nest Cam',
    species: 'Blue Tit',
    location: 'Garden Bird Box',
    liveUrl: 'https://www.youtube.com/channel/UCCWeRUKoA_hUPDRw3wSZHKw/live',
    youtubeId: '_8TEuV4qaHo',
    status: 'active',
    description: 'Watch charming blue tits in their cozy nest box. Observe these colorful songbirds as they care for their young with remarkable dedication and energy.',
    family: {
      parents: [
        {
          name: 'Male Blue Tit',
          description: 'The male blue tit is easily recognized by his bright blue crown, azure wings and tail, and vibrant yellow breast. He works tirelessly bringing caterpillars and insects to the nest.',
        },
        {
          name: 'Female Blue Tit',
          description: 'The female blue tit is the primary caregiver, keeping the chicks warm and maintaining nest hygiene. She has slightly duller plumage than the male but shows equal dedication to raising the brood.',
        },
      ],
      offspring: [],
    },
  },
  {
    id: 'eagle-nest-2',
    name: 'Bald Eagle Nest Live Cam',
    species: 'Bald Eagle',
    location: 'Santa Cruz Island, CA',
    liveUrl: 'https://www.youtube.com/channel/UCOvL8IpWKSRzGu77i_Y7uMA/live',
    youtubeId: 'OY4V_AppZ6s',
    cameras: [
      {
        id: 'cam1',
        name: 'Cam 1',
        liveUrl: 'https://www.youtube.com/channel/UCOvL8IpWKSRzGu77i_Y7uMA/live',
        youtubeId: 'OY4V_AppZ6s',
      },
      {
        id: 'cam2',
        name: 'Cam 2',
        liveUrl: 'https://www.youtube.com/channel/UCOvL8IpWKSRzGu77i_Y7uMA/live',
        youtubeId: 'PtTZIRwGTF0',
      },
    ],
    status: 'active',
    description: 'Experience the majesty of bald eagles in their natural habitat. Watch these powerful birds of prey as they nest, hunt, and raise their young.',
  },
  {
    id: 'eagle-nest-3',
    name: 'Bald Eagle Family Nest',
    species: 'Bald Eagle',
    location: 'Wildlife Reserve',
    liveUrl: 'https://www.youtube.com/channel/UCexLjK6HR3XTLZ2BNZGujkw/live',
    youtubeId: '2CP8QA_xKx4',
    status: 'active',
    description: 'Observe a bald eagle family in their natural environment. Watch daily activities including feeding, parenting, and the growth of eaglets.',
  },
  {
    id: 'kestrel-nest-1',
    name: 'Common Kestrel Nest Cam',
    species: 'Common Kestrel',
    location: 'European Countryside',
    liveUrl: 'https://www.youtube.com/channel/UCGENkSG26zqbIvNK91L6gEg/live',
    youtubeId: 'G8lAvNqZvb4',
    thumbnail: 'https://i.ytimg.com/vi/G8lAvNqZvb4/hqdefault.jpg',
    status: 'active',
    description: 'Watch common kestrels, small birds of prey known for their distinctive hovering hunting technique. Observe these beautiful falcons as they raise their young.',
    family: {
      parents: [
        {
          name: 'Male Kestrel',
          description: 'The male common kestrel has distinctive blue-grey head and tail feathers with spotted chestnut back. An agile hunter specializing in small mammals and insects.',
        },
        {
          name: 'Female Kestrel',
          description: 'The female kestrel has rufous brown plumage with black barring. She is the primary incubator of eggs and protector of the nest.',
        },
      ],
      offspring: [],
    },
  },
  {
    id: 'eagle-nest-4',
    name: 'Bald Eagle Nest Cam',
    species: 'Bald Eagle',
    location: 'North America',
    liveUrl: 'https://www.youtube.com/channel/UClW_2-fZBUJbaFPR9OFlSCA/live',
    youtubeId: '-avHO4C9C2I',
    thumbnail: 'https://i.ytimg.com/vi/-avHO4C9C2I/hqdefault.jpg',
    status: 'active',
    description: 'Live stream of a bald eagle nest. Watch these magnificent birds of prey as they care for their nest and raise their young in their natural habitat.',
  },
  {
    id: 'osprey-nest-1',
    name: 'Osprey Nest Live Cam',
    species: 'Osprey',
    location: 'Coastal Area',
    liveUrl: 'https://www.youtube.com/channel/UCzb2wqPoBecAyANKCD-Jl6A/live',
    youtubeId: 'e8h5iqy8o-A',
    thumbnail: 'https://i.ytimg.com/vi/e8h5iqy8o-A/hqdefault.jpg',
    status: 'active',
    description: 'Watch ospreys, magnificent fish-eating raptors, in their natural habitat. Observe their impressive fishing skills and parenting behaviors.',
    family: {
      parents: [
        {
          name: 'Male Osprey',
          description: 'The male osprey is an expert fisherman, providing food for the family. Distinguished by their white underparts and dark brown upperparts with distinctive eye stripe.',
        },
        {
          name: 'Female Osprey',
          description: 'The female osprey tends the nest and protects the young. Slightly larger than the male, she is equally skilled at fishing when needed.',
        },
      ],
      offspring: [],
    },
  },
  {
    id: 'osprey-nest-2',
    name: 'Osprey Nest Cam',
    species: 'Osprey',
    location: 'Wildlife Area',
    liveUrl: 'https://www.youtube.com/channel/UC9kQgdFA9KZgfW9x1RJXcEQ/live',
    youtubeId: 'mKC7TvH5t9I',
    thumbnail: 'https://i.ytimg.com/vi/mKC7TvH5t9I/hqdefault.jpg',
    status: 'active',
    description: 'Live view of an osprey nest. Watch these amazing fish hawks as they raise their young and demonstrate their incredible hunting abilities.',
    family: {
      parents: [
        {
          name: 'Male Osprey',
          description: 'The male osprey is responsible for catching fish and bringing them back to the nest. Known for their distinctive hovering and diving techniques.',
        },
        {
          name: 'Female Osprey',
          description: 'The female osprey guards the nest and cares for the young. She is larger and stays close to protect the chicks from predators.',
        },
      ],
      offspring: [],
    },
  },
  {
    id: 'osprey-nest-3',
    name: 'Osprey Family Nest',
    species: 'Osprey',
    location: 'Natural Reserve',
    liveUrl: 'https://www.youtube.com/channel/UC9kQgdFA9KZgfW9x1RJXcEQ/live',
    youtubeId: 'CKvLj6ZFNcA',
    thumbnail: 'https://i.ytimg.com/vi/CKvLj6ZFNcA/hqdefault.jpg',
    status: 'active',
    description: 'Follow an osprey family through their nesting season. Witness fishing expeditions, feeding time, and the development of osprey chicks.',
    family: {
      parents: [
        {
          name: 'Male Osprey',
          description: 'The male osprey provides fish for the entire family. Watch as he demonstrates spectacular diving techniques to catch prey from the water.',
        },
        {
          name: 'Female Osprey',
          description: 'The female osprey is the primary caretaker of the nest. She carefully manages the nest and ensures the safety of the young.',
        },
      ],
      offspring: [],
    },
  },
  {
    id: 'eagle-nest-5',
    name: 'Bald Eagle Nest Live',
    species: 'Bald Eagle',
    location: 'Eagle Sanctuary',
    liveUrl: 'https://www.youtube.com/channel/UCexLjK6HR3XTLZ2BNZGujkw/live',
    youtubeId: 'GNue2tsz3Ok',
    thumbnail: 'https://i.ytimg.com/vi/GNue2tsz3Ok/hqdefault.jpg',
    status: 'active',
    description: 'Live stream from a bald eagle nest sanctuary. Watch these iconic American birds as they nest, hunt, and raise their young in a protected environment.',
  },
  {
    id: 'eagle-nest-6',
    name: 'Bald Eagle Nest Dual Cam',
    species: 'Bald Eagle',
    location: 'Protected Wildlife Area',
    liveUrl: 'https://www.youtube.com/channel/UCexLjK6HR3XTLZ2BNZGujkw/live',
    youtubeId: 'vMW-S6ZoYgY',
    thumbnail: 'https://i.ytimg.com/vi/vMW-S6ZoYgY/hqdefault.jpg',
    cameras: [
      {
        id: 'cam1',
        name: 'Cam 1',
        liveUrl: 'https://www.youtube.com/channel/UCexLjK6HR3XTLZ2BNZGujkw/live',
        youtubeId: 'vMW-S6ZoYgY',
      },
      {
        id: 'cam2',
        name: 'Cam 2',
        liveUrl: 'https://www.youtube.com/channel/UCexLjK6HR3XTLZ2BNZGujkw/live',
        youtubeId: 'pUHXFVYn0-E',
      },
    ],
    status: 'active',
    description: 'Two camera angles of a bald eagle nest. Watch from multiple perspectives as these majestic birds care for their nest and raise their eaglets.',
    family: {
      parents: [
        {
          name: 'Adult Male Eagle',
          description: 'The male bald eagle is a powerful hunter and provider for the family. He brings fish and other prey to the nest and helps protect the territory from intruders.',
        },
        {
          name: 'Adult Female Eagle',
          description: 'The female bald eagle is the primary nest guardian. She spends most of her time at the nest, keeping the eggs warm during incubation and protecting the young eaglets.',
        },
      ],
      offspring: [
        {
          name: 'Eaglet 1',
          description: 'The first eaglet to hatch. Watch as it grows from a small fluffy chick to a powerful fledgling ready for its first flight.',
        },
        {
          name: 'Eaglet 2',
          description: 'The second eaglet, slightly younger but equally eager to grow. Observe sibling interactions and feeding behaviors.',
        },
      ],
    },
  },
  {
    id: 'eagle-nest-7',
    name: 'Little Miami Conservancy Bald Eagle Nest',
    species: 'Bald Eagle',
    location: 'Little Miami Conservancy, Ohio',
    liveUrl: 'https://www.youtube.com/channel/UCeqxP2daMHeokryrNoZsF-Q/live',
    youtubeId: 'kHOdKaPsFk8',
    cameras: [
      {
        id: 'cam1',
        name: 'Cam 1',
        liveUrl: 'https://www.youtube.com/channel/UCeqxP2daMHeokryrNoZsF-Q/live',
        youtubeId: 'kHOdKaPsFk8',
      },
      {
        id: 'cam2',
        name: 'Cam 2',
        liveUrl: 'https://www.youtube.com/channel/UCeqxP2daMHeokryrNoZsF-Q/live',
        youtubeId: '5C93_ZzJd1U',
      },
    ],
    status: 'active',
    description: 'Watch bald eagles nesting in the Little Miami Conservancy area. This dual camera setup provides excellent views of these magnificent birds as they nest along the Little Miami River watershed.',
    family: {
      parents: [
        {
          name: 'Male Bald Eagle',
          description: 'The male bald eagle patrols the territory along the Little Miami River, bringing fish and waterfowl to the nest. He shares incubation duties and is a dedicated protector of the family.',
        },
        {
          name: 'Female Bald Eagle',
          description: 'The female bald eagle is the primary nest tender, carefully maintaining the large nest structure and keeping the eggs warm. She is larger than her mate and equally vigilant in protecting the nest site.',
        },
      ],
      offspring: [],
    },
  },
  {
    id: 'kestrel-nest-2',
    name: 'Kestrel Nest Live Cam',
    species: 'Common Kestrel',
    location: 'Netherlands',
    liveUrl: 'https://www.youtube.com/channel/UCSW31FtKp8QR3pRA-_XPYhw/live',
    youtubeId: 'Tpu3qAh4S0k',
    thumbnail: 'https://i.ytimg.com/vi/G8lAvNqZvb4/hqdefault.jpg',
    status: 'active',
    description: 'Watch common kestrels in their natural nest in the Netherlands. Observe these agile falcons known for their distinctive hovering hunting technique as they raise their young in a tower nest.',
    family: {
      parents: [
        {
          name: 'Male Kestrel',
          description: 'The male kestrel has distinctive blue-grey head and tail feathers with spotted rufous back. He hunts tirelessly for small mammals and insects to feed the family.',
        },
        {
          name: 'Female Kestrel',
          description: 'The female kestrel has beautiful rufous-brown plumage with black barring. She is the primary caretaker of the nest and incubates the eggs.',
        },
      ],
      offspring: [],
    },
  },
];
