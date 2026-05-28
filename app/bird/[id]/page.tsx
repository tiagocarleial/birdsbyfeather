'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Bird data type
type BirdData = {
  id: string;
  number: number;
  species: string;
  liveUrl: string;
  title: string;
  description: string;
  fullDescription: string;
  location: string;
  thumbnail: string;
  channelName: string;
  videoId?: string;
  aboutSpecies: string;
  habitat: string;
  behavior: string;
  bestTime: string;
  whatToWatch: string[];
};

// Bird data - in a real app, this would come from a database or API
const birdsData: Record<string, BirdData> = {
  'dale-hollow-eagle': {
    id: 'dale-hollow-eagle',
    number: 1,
    species: 'Bald Eagle',
    liveUrl: 'https://www.youtube.com/@DaleHollowEagleCamera/live',
    title: 'Dale Hollow Eagle Nest',
    description: 'Watch majestic bald eagles in their natural habitat. Observe these powerful birds of prey as they nest, hunt, and raise their young.',
    fullDescription: 'Experience the daily life of a bald eagle family in Dale Hollow. This live camera provides an intimate view of one of nature\'s most majestic birds. Watch as eagles build and maintain their massive nests, hunt for fish, and raise their young from eggs to fledglings.',
    location: 'Dale Hollow, USA',
    thumbnail: 'https://i.ytimg.com/vi/8aaFcTNcCLA/maxresdefault.jpg',
    channelName: 'Dale Hollow Eagle Camera',
    videoId: undefined,
    aboutSpecies: 'Bald eagles are large birds of prey found in North America. They are known for their distinctive white head and tail feathers, powerful build, and impressive wingspan of up to 7.5 feet. These magnificent raptors are skilled hunters and fishers.',
    habitat: 'Bald eagles typically nest near large bodies of water with abundant fish populations. They build massive nests in tall trees, often returning to the same nest year after year, adding to it each season.',
    behavior: 'Eagles are devoted parents, with both male and female sharing incubation and feeding duties. They hunt primarily for fish but will also take waterfowl and small mammals. Their eyesight is 4-8 times sharper than humans.',
    bestTime: 'Early morning and late afternoon are the most active times. During breeding season (January-July), you can observe nest building, egg incubation, and feeding of eaglets.',
    whatToWatch: [
      'Eagles bringing fish to the nest',
      'Parent eagles taking turns on the nest',
      'Eaglets growing and developing',
      'Territorial displays and vocalizations',
      'Nest maintenance and building',
    ],
  },
  'osprey-carnyx': {
    id: 'osprey-carnyx',
    number: 2,
    species: 'Osprey',
    liveUrl: 'https://www.youtube.com/@CarnyxWildTwo/live',
    title: 'Osprey Nest Live Cam',
    description: 'Watch ospreys, magnificent fish-eating raptors, in their natural habitat. Observe their impressive fishing skills and parenting behaviors.',
    fullDescription: 'Observe the fascinating world of ospreys through this live camera. These skilled fish hawks demonstrate incredible hunting abilities, diving feet-first into water to catch fish. Watch the complete nesting cycle from pair bonding to fledging.',
    location: 'Wildlife Area',
    thumbnail: 'https://i.ytimg.com/vi/1JmvBGTkxbE/hqdefault.jpg',
    channelName: 'Carnyx Wild Two',
    videoId: '1JmvBGTkxbE',
    aboutSpecies: 'Ospreys are large raptors that feed almost exclusively on fish. They have reversible outer toes, sharp spines on their feet, and closeable nostrils - all adaptations for catching and holding slippery fish. Their wingspan reaches up to 6 feet.',
    habitat: 'Ospreys nest near rivers, lakes, and coastal areas where fish are plentiful. They build large stick nests on top of dead trees, telephone poles, or artificial platforms. Many pairs return to the same nest site year after year.',
    behavior: 'Ospreys are spectacular hunters, hovering 30-100 feet above water before plunging feet-first to catch fish. They can dive completely underwater and emerge with prey. Both parents share nest duties, with males doing most of the hunting.',
    bestTime: 'Morning hours (6-10 AM) are prime fishing time. During breeding season (March-August), you can observe courtship displays, nest building, incubation, and chick rearing.',
    whatToWatch: [
      'Dramatic fishing dives',
      'Fish delivery to nest',
      'Chick feeding behaviors',
      'Nest defense against intruders',
      'Fledglings learning to fly',
    ],
  },
  'garden-birds-nest': {
    id: 'garden-birds-nest',
    number: 3,
    species: 'Blue Tit',
    liveUrl: 'https://www.youtube.com/@NestCamLive/live',
    title: 'Blue Tit Nest Cam',
    description: 'Watch beautiful blue tits in their nest box. Observe these colorful, energetic songbirds as they build nests, incubate eggs, and raise their young.',
    fullDescription: 'Get an intimate look at blue tits as they nest, raise their young, and go about their daily lives in this cozy nest box. These vibrant little songbirds are among the most beloved garden visitors. This camera provides a unique window into the private world of blue tits throughout the breeding season, from nest building to fledging.',
    location: 'Garden Nest Box',
    thumbnail: 'https://i.ytimg.com/vi/_8TEuV4qaHo/hqdefault.jpg',
    channelName: 'Nest Cam Live',
    videoId: undefined,
    aboutSpecies: 'Blue tits are small, colorful songbirds with distinctive blue and yellow plumage. They measure about 12cm in length and weigh only 11 grams. These acrobatic birds are cavity nesters that readily use nest boxes. They are intelligent, curious, and play a vital role in controlling caterpillar and insect populations in gardens and woodlands.',
    habitat: 'Blue tits thrive in gardens, parks, and deciduous woodlands across Europe. They prefer nest boxes or natural tree cavities with small entrance holes that exclude larger competitors. A good habitat includes mature trees, native plants, water sources, and abundant insects for feeding their young.',
    behavior: 'Blue tits are incredibly active parents, making 100+ feeding trips per day during peak chick rearing. They consume vast quantities of caterpillars, with a single brood eating thousands of caterpillars before fledging. Both parents share nest building and feeding duties. These acrobatic birds are known for their ability to hang upside down while foraging.',
    bestTime: 'Active throughout the day, with peak feeding times in early morning (6-9 AM) and late afternoon (4-7 PM). Breeding season runs from April to July. Nest building begins in April, egg laying in late April/May, with chicks fledging in June.',
    whatToWatch: [
      'Intricate nest building with moss, feathers, and hair',
      'Egg laying (typically 7-12 eggs)',
      'Frequent feeding visits with caterpillars',
      'Rapid chick development from hatching to fledging',
      'Parent birds removing fecal sacs to keep nest clean',
    ],
  },
  'forestry-england-osprey': {
    id: 'forestry-england-osprey',
    number: 4,
    species: 'Osprey',
    liveUrl: 'https://www.youtube.com/@ForestryEngland/live',
    title: 'Forestry England Osprey Nest',
    description: 'Watch ospreys in a stunning UK forest setting. Observe these magnificent fish hawks as they raise their young in a nest managed by Forestry England.',
    fullDescription: 'Experience the remarkable return of ospreys to England through this live camera in a managed forest nest site. Forestry England has created the perfect habitat for these magnificent raptors to thrive. Watch the complete breeding cycle from nest preparation to fledging in one of the UK\'s most successful osprey conservation sites.',
    location: 'United Kingdom',
    thumbnail: 'https://i.ytimg.com/vi/d2HIkb2BHdw/hq720.jpg',
    channelName: 'Forestry England',
    videoId: 'd2HIkb2BHdw',
    aboutSpecies: 'Ospreys are large fish-eating raptors with a wingspan of up to 6 feet. They have unique adaptations including reversible outer toes, spiny foot pads for gripping slippery fish, and closeable nostrils for diving. These remarkable birds migrate thousands of miles between breeding grounds and wintering areas in Africa.',
    habitat: 'In the UK, ospreys nest in forests near lakes, reservoirs, and rivers with abundant fish populations. They build massive stick nests on top of tall trees or artificial platforms. Forestry England manages numerous sites to provide ideal nesting conditions with mature trees and nearby fishing waters.',
    behavior: 'Ospreys are specialist fishers, plunging feet-first into water from heights of 30-100 feet. They can carry fish weighing up to 2kg back to the nest. Both parents share incubation duties, though females do most of the brooding while males hunt. UK ospreys migrate to West Africa for winter, returning to the same nest sites each spring.',
    bestTime: 'Best viewing during UK breeding season (April-August). Morning hours (6-10 AM) are prime for hunting activity. Watch for dramatic arrivals with fish, feeding sessions, and chick development. Migration preparations begin in late August.',
    whatToWatch: [
      'Spectacular fish catches and deliveries',
      'Chick feeding and development',
      'Nest maintenance and material gathering',
      'Territorial defense displays',
      'Flight training and fledging attempts',
    ],
  },
  'fobb-bald-eagle': {
    id: 'fobb-bald-eagle',
    number: 5,
    species: 'Bald Eagle',
    liveUrl: 'https://www.youtube.com/@FOBBVCAM/live',
    title: 'FOBB Bald Eagle Nest',
    description: 'Watch a magnificent bald eagle pair at their nest. Observe these powerful raptors as they care for their nest, hunt, and raise their eaglets throughout the breeding season.',
    fullDescription: 'Watch a dedicated bald eagle pair through this intimate nest camera. This live stream provides an incredible view into the daily lives of these majestic birds. Observe every aspect of the nesting cycle, from courtship and nest building through incubation, hatching, and the growth of eaglets into powerful young eagles ready to take their first flights.',
    location: 'USA',
    thumbnail: 'https://i.ytimg.com/vi/B4-L2nfGcuE/hqdefault.jpg',
    channelName: 'FOBBVCAM',
    videoId: 'B4-L2nfGcuE',
    aboutSpecies: 'Bald eagles are large, powerful raptors and the national symbol of the United States. Adults are unmistakable with their white head and tail contrasting against dark brown body. With a wingspan reaching 7.5 feet and weighing 10-14 pounds, these birds are formidable hunters. Their eyesight is 4-8 times sharper than humans, allowing them to spot prey from great distances.',
    habitat: 'Bald eagles prefer habitats near coastlines, rivers, and large lakes where fish are abundant. They build enormous nests in tall, sturdy trees with clear views of water. These nests can weigh over 2,000 pounds and are often reused and expanded each year. Eagles choose nest sites that provide easy flight access and proximity to prime fishing areas.',
    behavior: 'Bald eagles are skilled hunters, primarily feeding on fish but also taking waterfowl, small mammals, and carrion. They mate for life and perform spectacular courtship flights. Both parents share all nesting duties including incubation (35 days), brooding, and feeding. Parents bring fish to the nest multiple times daily, tearing pieces to feed their young. Eaglets remain in the nest for 10-13 weeks before fledging.',
    bestTime: 'Best viewing varies by season. Winter (December-February): courtship and nest building. Spring (March-May): egg laying, incubation, and hatching. Summer (June-August): chick rearing and fledging. Early morning and late afternoon show peak activity with feeding times.',
    whatToWatch: [
      'Fish deliveries and feeding sessions',
      'Nest maintenance with fresh material',
      'Eaglet development and wing exercises',
      'Parent changeovers during incubation',
      'Fledging attempts and first flights',
    ],
  },
  'uist-white-tailed-eagle': {
    id: 'uist-white-tailed-eagle',
    number: 6,
    species: 'White-tailed Eagle',
    liveUrl: 'https://www.youtube.com/@uistforestretreat/live',
    title: 'Uist White-tailed Eagle Nest',
    description: 'Watch the magnificent white-tailed eagles at their nest in Scotland. Observe these impressive sea eagles as they care for their young in the beautiful Scottish Highlands.',
    fullDescription: 'Experience the remarkable return of white-tailed eagles to Scotland through this stunning nest camera on the Isle of Uist. These magnificent sea eagles, once extinct in Britain, have made a triumphant comeback thanks to conservation efforts. Watch as these powerful birds raise their young against the backdrop of Scotland\'s dramatic coastal landscape, demonstrating nature\'s resilience and the success of wildlife restoration.',
    location: 'Scotland, UK',
    thumbnail: 'https://i.ytimg.com/vi/aivQQnNPwZ8/hqdefault.jpg',
    channelName: 'Uist Forest Retreat',
    videoId: 'aivQQnNPwZ8',
    aboutSpecies: 'White-tailed eagles are Europe\'s largest bird of prey, with a wingspan reaching up to 8 feet (2.4m) and weighing 4-7 kg. Also known as sea eagles, they have distinctive broad "barn door" wings, a short wedge-shaped tail, and pale head. Adults develop the characteristic white tail after 5 years. These magnificent raptors are one of the most successful conservation stories in the UK.',
    habitat: 'White-tailed eagles inhabit coastal areas, sea lochs, and large inland waters where they can hunt fish and waterfowl. In Scotland, they nest on cliff ledges, in large trees, or on rocky outcrops near water. The Scottish Highlands and Islands provide ideal habitat with abundant fish populations, seabirds, and minimal human disturbance. Pairs are highly territorial, defending large areas around their nests.',
    behavior: 'White-tailed eagles are powerful hunters and opportunistic feeders, taking fish, seabirds, rabbits, and carrion. They hunt by swooping low over water to snatch fish with their massive talons. Pairs mate for life and perform spectacular aerial displays. Both parents share nest duties, with incubation lasting 38 days. Chicks fledge at 70-90 days but remain dependent on parents for several more months, learning essential hunting skills.',
    bestTime: 'Peak viewing during Scottish breeding season (February-August). Late winter (February-March): courtship and nest building. Spring (April-May): egg laying and incubation. Summer (June-August): chick rearing, feeding, and eventual fledging. Early morning (6-9 AM) shows highest activity with fishing and feeding.',
    whatToWatch: [
      'Dramatic fish catches from coastal waters',
      'Both parents bringing prey to eaglets',
      'Chick growth from fluffy white down to juvenile plumage',
      'Nest defense against corvids and other eagles',
      'Wing-strengthening exercises before fledging',
    ],
  },
  'explore-osprey': {
    id: 'explore-osprey',
    number: 7,
    species: 'Osprey',
    liveUrl: 'https://www.youtube.com/@ExploreOspreyandFalcons/live',
    title: 'Explore Osprey Nest Cam',
    description: 'Watch ospreys at their nest through this dedicated wildlife camera. Observe these skilled fish hunters as they raise their young and demonstrate their impressive fishing abilities.',
    fullDescription: 'Follow the complete breeding cycle of ospreys through this expertly positioned nest camera. The Explore Osprey and Falcons channel provides an exceptional view into the daily lives of these remarkable fish hawks. From the first arrival in spring to the dramatic departure of fledglings, witness every stage of osprey family life with crystal-clear detail and expert commentary from wildlife enthusiasts.',
    location: 'Wildlife Area',
    thumbnail: 'https://i.ytimg.com/vi/3VVoYO-ZFPE/hqdefault.jpg',
    channelName: 'Explore Osprey and Falcons',
    videoId: '3VVoYO-ZFPE',
    aboutSpecies: 'Ospreys are medium-large raptors specialized for fishing, with a wingspan of 5-6 feet and weighing 3-4 pounds. They have distinctive dark brown upperparts and white underparts, with a characteristic dark eye stripe. Their feet feature reversible outer toes and spiny pads perfectly adapted for gripping slippery fish. Found on every continent except Antarctica, ospreys are one of the most widespread raptor species.',
    habitat: 'Ospreys require large bodies of clear water with abundant fish populations for successful breeding. They build large stick nests on elevated structures including dead trees, artificial platforms, utility poles, and channel markers. Nest sites must provide unobstructed flight approaches for carrying fish. Ospreys prefer areas with minimal human disturbance but have adapted well to coexisting near human activity when nest sites are protected.',
    behavior: 'Ospreys are spectacular hunters, hovering 30-130 feet above water before plunging feet-first to catch fish. They can fully submerge and will shake off water mid-flight. Males perform most hunting duties, bringing fish to females and chicks. Both parents share incubation for 36-42 days. Chicks grow rapidly, going from helpless hatchlings to flight-capable juveniles in just 50-55 days. Ospreys are highly migratory, with many populations traveling to Central and South America for winter.',
    bestTime: 'Best viewing during breeding season (March-September in Northern Hemisphere). Spring (March-April): migration arrival, courtship, and nest building. Late spring/early summer (May-June): egg laying, incubation, and hatching. Summer (July-August): intensive chick feeding and fledging. Morning hours (6-11 AM) typically show most fishing activity.',
    whatToWatch: [
      'Spectacular fishing dives and catches',
      'Fish deliveries with prey carried headfirst',
      'Chick feeding with torn fish pieces',
      'Nest maintenance and stick arrangement',
      'Fledgling flight training and practice landings',
    ],
  },
  'bad-salzungen-stork': {
    id: 'bad-salzungen-stork',
    number: 8,
    species: 'White Stork',
    liveUrl: 'https://www.youtube.com/@StadtverwaltungBadSalzungen/live',
    title: 'Bad Salzungen Stork Nest',
    description: 'Watch white storks at their nest in Bad Salzungen, Germany. Observe these iconic birds as they raise their young on historic rooftops in this charming German town.',
    fullDescription: 'Experience the beloved tradition of white storks nesting in the historic town of Bad Salzungen, Germany. This nest camera, maintained by the city administration, offers a front-row seat to one of Europe\'s most cherished wildlife spectacles. White storks have nested on German rooftops for centuries, and this camera allows viewers worldwide to witness this cultural and natural heritage. Watch as these elegant birds perform their famous bill-clattering displays and raise their young above the medieval streets.',
    location: 'Bad Salzungen, Germany',
    thumbnail: 'https://i.ytimg.com/vi/Dr5zebXpO-M/hqdefault.jpg',
    channelName: 'Stadtverwaltung Bad Salzungen',
    videoId: 'Dr5zebXpO-M',
    aboutSpecies: 'White storks are large, elegant wading birds standing over 3 feet tall with a wingspan of 6-7 feet. They are instantly recognizable with their white plumage, black wing feathers, long red legs, and pointed red bills. These iconic birds are deeply embedded in European folklore and are symbols of good luck, fertility, and new beginnings. The famous legend that storks deliver babies originated from their habit of nesting near human habitation.',
    habitat: 'White storks traditionally nest on rooftops, chimneys, church steeples, and specially erected platforms in European towns and villages. They prefer open wetlands, grasslands, and agricultural areas for feeding. In Germany, storks are particularly associated with rural communities where they build massive stick nests that can weigh hundreds of pounds. Towns often welcome and protect stork nests, viewing them as symbols of good fortune and community pride.',
    behavior: 'White storks are opportunistic feeders, hunting insects, frogs, small mammals, and fish in meadows and wetlands. They are famous for their elaborate greeting ceremonies, standing on the nest and throwing their heads back while loudly clattering their bills. Both parents share incubation duties for 33-34 days and feeding responsibilities. Storks are long-distance migrants, with European populations flying to sub-Saharan Africa for winter, covering over 6,000 miles. They return to the same nests year after year.',
    bestTime: 'Best viewing during European breeding season (March-August). Spring (late March-April): dramatic arrival from Africa, nest renovation, and courtship displays. Late spring (May): egg laying and incubation. Summer (June-July): chick rearing with frequent feeding. Late summer (August): fledging and preparation for migration to Africa.',
    whatToWatch: [
      'Bill-clattering greeting displays between mates',
      'Nest building and maintenance with sticks',
      'Parents feeding chicks regurgitated food',
      'Chicks growing from small downy white to full-sized juveniles',
      'Flight practice and eventual migration preparation',
    ],
  },
  'dna-stork': {
    id: 'dna-stork',
    number: 9,
    species: 'White Stork',
    liveUrl: 'https://www.youtube.com/@DNA-eV/live',
    title: 'DNA White Stork Nest',
    description: 'Watch white storks at their nest through this DNA conservation camera. Observe these elegant birds in their natural habitat as they nest and raise their young.',
    fullDescription: 'Follow the lives of white storks through this conservation-focused nest camera operated by DNA-eV, a German nature conservation organization. This camera provides intimate views of stork family life while supporting important research and conservation efforts. DNA-eV is dedicated to protecting white storks and their habitats in Germany, monitoring breeding success, and educating the public about these magnificent birds and the wetland ecosystems they depend on.',
    location: 'Germany',
    thumbnail: 'https://i.ytimg.com/vi/6IRSJR3KDUY/hqdefault.jpg',
    channelName: 'DNA-eV',
    videoId: '6IRSJR3KDUY',
    aboutSpecies: 'White storks are large, elegant wading birds standing over 3 feet tall with a wingspan of 6-7 feet. They are instantly recognizable with their white plumage, black wing feathers, long red legs, and pointed red bills. These iconic birds are deeply embedded in European folklore and are symbols of good luck, fertility, and new beginnings. White storks nearly disappeared from many parts of Europe in the 20th century due to habitat loss and hunting, but conservation efforts have led to remarkable population recoveries.',
    habitat: 'White storks nest on man-made structures including rooftops, telephone poles, and specially built platforms in rural European landscapes. They feed in wet meadows, shallow wetlands, agricultural fields, and grasslands where they can find abundant prey. Successful stork populations require a mosaic of nesting sites near productive feeding areas with diverse invertebrate and small vertebrate populations. Conservation efforts focus on protecting and restoring these critical wetland and grassland habitats.',
    behavior: 'White storks are visual hunters, stalking through grass and shallow water to catch insects, earthworms, frogs, small rodents, and fish. They are famous for their pair bonding rituals including synchronized bill-clattering and head-bobbing displays. Both parents incubate eggs for about 33 days and share feeding duties. Chicks are fed regurgitated food and grow rapidly, fledging at 58-64 days. European white storks are long-distance migrants, flying to Africa using thermal currents to soar efficiently over thousands of miles.',
    bestTime: 'Optimal viewing during European breeding season (March-August). Early spring (March-April): return from African wintering grounds, dramatic courtship displays, and nest claiming. Late spring (May): egg laying and incubation period. Early summer (June-July): peak chick rearing with constant feeding. Late summer (August): fledging and pre-migration gathering.',
    whatToWatch: [
      'Synchronized bill-clattering courtship displays',
      'Nest renovation with fresh sticks and grass',
      'Parent-chick feeding interactions',
      'Chick development from helpless to independent',
      'Pre-migration behaviors and family groups',
    ],
  },
  'ashgrove-peregrine': {
    id: 'ashgrove-peregrine',
    number: 10,
    species: 'Peregrine Falcon',
    liveUrl: 'https://www.youtube.com/@TheAshgroveClinic/live',
    title: 'Ashgrove Peregrine Falcon Nest',
    description: 'Watch peregrine falcons at their urban nest. Observe the world\'s fastest birds as they hunt, nest, and raise their young in a city environment.',
    fullDescription: 'Witness the extraordinary adaptation of peregrine falcons to urban life through this nest camera hosted by The Ashgrove Clinic. These magnificent raptors have made skyscrapers and tall buildings their modern cliff nesting sites, thriving in cities worldwide. Watch as these aerial masters demonstrate why they\'re considered the fastest animals on Earth, diving at speeds exceeding 200 mph to catch prey. This camera offers a rare glimpse into how these once-endangered birds have become successful urban residents.',
    location: 'Urban Area',
    thumbnail: 'https://i.ytimg.com/vi/TmgP8BhtffE/hqdefault.jpg',
    channelName: 'The Ashgrove Clinic',
    videoId: 'TmgP8BhtffE',
    aboutSpecies: 'Peregrine falcons are medium-sized raptors renowned as the fastest animals on Earth, capable of reaching speeds over 240 mph during hunting dives (stoops). They measure 14-19 inches in length with a wingspan of 3.3-3.6 feet. Adults have distinctive slate-blue backs, barred white underparts, and striking black "mustache" markings. These powerful predators nearly went extinct in the 1960s due to DDT pesticide but have made a remarkable recovery, becoming one of conservation\'s greatest success stories.',
    habitat: 'Traditionally nesting on cliff ledges and rocky outcrops, peregrine falcons have successfully adapted to urban environments worldwide. Cities provide abundant prey (pigeons, starlings) and tall buildings that mimic natural cliff faces. Urban peregrines nest on window ledges, bridge supports, and specially installed nest boxes on skyscrapers. The absence of natural predators and year-round food availability make cities ideal peregrine habitat, leading to thriving urban populations.',
    behavior: 'Peregrine falcons are spectacular aerial hunters, catching birds in mid-flight after breathtaking high-speed dives. They spot prey from great heights, fold their wings, and plummet at incredible speeds, striking prey with their talons. Urban peregrines primarily hunt pigeons, doves, and starlings. Pairs mate for life and are highly territorial. Both parents share incubation (29-32 days) and chick-rearing duties. Fledglings remain with parents for several weeks after leaving the nest, learning essential hunting skills.',
    bestTime: 'Best viewing during breeding season (March-June in Northern Hemisphere). Spring (March-April): courtship displays including aerial acrobatics and food transfers. Late spring (April-May): egg laying and incubation. Early summer (May-June): hatching and intensive chick feeding. Late summer (June-July): fledging and flight training.',
    whatToWatch: [
      'Spectacular high-speed hunting dives (stoops)',
      'Prey deliveries and feeding sessions',
      'Chick development from downy white to sleek juveniles',
      'Fledgling flight practice and landing attempts',
      'Territorial defense against other raptors',
    ],
  },
  'cornell-bird-cams': {
    id: 'cornell-bird-cams',
    number: 11,
    species: 'Various Birds',
    liveUrl: 'https://www.youtube.com/@CornellBirdCams/live',
    title: 'Cornell Bird Cams Live',
    description: 'Watch a variety of birds at Cornell Lab of Ornithology\'s live bird feeders and cams. See different species visiting throughout the day in this world-renowned birding location.',
    fullDescription: 'Experience the incredible diversity of bird life through the Cornell Lab of Ornithology\'s live bird cameras. Located in Ithaca, New York, these cameras capture a remarkable variety of bird species visiting feeders, bird baths, and natural areas throughout the year. Cornell Lab is a world leader in bird research, conservation, and education, and these live cams provide an unparalleled opportunity to observe bird behavior, learn species identification, and connect with nature from anywhere in the world.',
    location: 'Cornell Lab, New York, USA',
    thumbnail: 'https://i.ytimg.com/vi/BRNsaDSzpnk/hqdefault.jpg',
    channelName: 'Cornell Bird Cams',
    videoId: 'BRNsaDSzpnk',
    aboutSpecies: 'Cornell\'s bird cameras feature an incredible diversity of species throughout the year. Common visitors include cardinals, blue jays, chickadees, nuthatches, woodpeckers, goldfinches, sparrows, and mourning doves. Seasonal migrants add variety, with warblers, thrushes, and other species passing through during spring and fall. In winter, you might see pine siskins, redpolls, and evening grosbeaks. The cameras also occasionally capture special moments with hawks, owls, and other unexpected visitors.',
    habitat: 'The Cornell Lab campus in Ithaca, New York features diverse habitats including mature forests, edge habitat, wetlands, and carefully maintained feeding stations. The area\'s rich biodiversity attracts both year-round residents and seasonal migrants. Feeders are stocked with various seeds, suet, and nectar to attract different species. Natural vegetation provides cover, nesting sites, and natural food sources. The location\'s position along migration routes makes it an excellent spot for observing seasonal changes in bird populations.',
    behavior: 'Feeder cams reveal fascinating bird behaviors including feeding preferences, social hierarchies, and interspecies interactions. Watch cardinals cracking seeds, woodpeckers hammering suet, and chickadees performing their acrobatic feeding techniques. Observe dominance displays, courtship behaviors, and territorial disputes. The cameras capture seasonal patterns including migration arrivals and departures, winter feeding frenzies, and breeding season activities. Different species visit at different times of day, with peak activity typically in early morning and late afternoon.',
    bestTime: 'Excellent viewing year-round with seasonal variety. Winter (December-February): high feeder activity with northern finches and year-round residents. Spring (March-May): migration brings warblers, thrushes, and returning summer residents. Summer (June-August): breeding birds and fledglings visiting feeders. Fall (September-November): migration spectacle with diverse species passing through. Early morning (6-9 AM) and late afternoon (3-6 PM) typically show peak activity.',
    whatToWatch: [
      'Diverse species identification opportunities',
      'Feeding behaviors and food preferences',
      'Social interactions and dominance hierarchies',
      'Seasonal migration patterns and arrivals',
      'Rare or unexpected species appearances',
    ],
  },
  'great-lakes-eagle': {
    id: 'great-lakes-eagle',
    number: 12,
    species: 'Bald Eagle',
    liveUrl: 'https://www.youtube.com/@GreatLakesBaldEagleCam/live',
    title: 'Great Lakes Bald Eagle Cam',
    description: 'Watch bald eagles at their nest near the Great Lakes. Observe these magnificent raptors as they nest, hunt, and raise their young in this pristine northern habitat.',
    fullDescription: 'Experience the majesty of bald eagles in the pristine Great Lakes region through this captivating nest camera. The Great Lakes provide ideal habitat for these magnificent raptors, with abundant fish populations, towering trees for nesting, and vast wilderness areas. This camera offers intimate views of eagle family life in one of North America\'s most important freshwater ecosystems. Watch as these powerful birds navigate the challenges of northern nesting, from harsh winter weather to the abundance of summer fishing season.',
    location: 'Great Lakes Region, USA',
    thumbnail: 'https://i.ytimg.com/vi/pUHXFVYn0-E/hqdefault.jpg',
    channelName: 'Great Lakes Bald Eagle Cam',
    videoId: 'pUHXFVYn0-E',
    aboutSpecies: 'Bald eagles are iconic North American raptors and the national symbol of the United States. These powerful birds stand 28-38 inches tall with wingspans reaching 6-7.5 feet and weighing 6.5-14 pounds (females are larger). Adults are unmistakable with brilliant white heads and tails contrasting against dark brown bodies. The Great Lakes region hosts one of the largest concentrations of bald eagles in the lower 48 states, with populations rebounding dramatically since DDT was banned in 1972.',
    habitat: 'Great Lakes bald eagles nest in tall trees (typically white pines, cottonwoods, or oaks) with commanding views of water. They require large, old-growth trees capable of supporting massive nests that can weigh over a ton. The Great Lakes provide exceptional habitat with extensive shorelines, islands, and abundant fish including lake trout, whitefish, and alewives. Eagles prefer nest sites within 1-2 miles of water, with clear flight paths and minimal human disturbance. The region\'s vast forests and protected areas provide ideal breeding territory.',
    behavior: 'Great Lakes eagles are skilled fishers, swooping low over water to snatch fish with their powerful talons. They also scavenge, particularly during ice-covered winters when fishing is difficult. Eagles mate for life, performing spectacular aerial courtship displays where pairs lock talons and cartwheel through the sky. Both parents share nesting duties, with incubation lasting 35 days. Adults are attentive parents, shading chicks from sun, sheltering them from rain, and bringing fish multiple times daily. Eaglets fledge at 10-13 weeks but remain dependent on parents for several more weeks.',
    bestTime: 'Year-round viewing with seasonal highlights. Winter (January-February): courtship and early nest preparation, often in harsh weather. Spring (March-April): egg laying and incubation. Late spring/early summer (May-June): hatching and rapid chick growth. Summer (July-August): fledging and flight training. Fall (September-November): juveniles learning to fish. Early morning (6-9 AM) shows peak fishing activity.',
    whatToWatch: [
      'Fish catches from Great Lakes waters',
      'Nest building and maintenance with massive sticks',
      'Parent-chick bonding and feeding rituals',
      'Eaglet development from downy white to brown juvenile plumage',
      'Flight training and first fishing attempts',
    ],
  },
  'rspb-multi-camera': {
    id: 'rspb-multi-camera',
    number: 13,
    species: 'Multi-Camera',
    liveUrl: 'https://www.youtube.com/RSPBvideo/live',
    title: 'RSPB Multi-Camera Feed',
    description: 'Watch multiple bird species from RSPB\'s live camera network. Features swift, osprey, goshawk, and goldeneye nests. Switch between different nest cameras to observe various birds in their natural habitats.',
    fullDescription: 'Experience the incredible diversity of British bird life through the Royal Society for the Protection of Birds (RSPB) multi-camera network. RSPB is the UK\'s largest nature conservation charity, dedicated to protecting birds and their habitats. This live stream features multiple nest cameras showcasing different species including swifts, ospreys, goshawks, and goldeneyes. Each camera provides unique insights into the breeding behaviors and conservation efforts for these remarkable birds across various UK locations.',
    location: 'United Kingdom',
    thumbnail: 'https://i.ytimg.com/vi/3VVoYO-ZFPE/hqdefault.jpg',
    channelName: 'RSPBvideo',
    videoId: 'eAaBgV2kgro',
    aboutSpecies: 'This multi-camera feed showcases several British bird species. Swifts are aerial specialists that spend most of their lives in flight. Ospreys are magnificent fish-eating raptors that migrate from Africa. Goshawks are powerful forest hawks that hunt birds and mammals. Goldeneyes are diving ducks that nest in tree cavities. Each species represents different conservation challenges and success stories in the UK.',
    habitat: 'The cameras cover diverse habitats across the UK. Swift cameras monitor urban nesting sites under eaves. Osprey cameras overlook large Scottish lochs and reservoirs. Goshawk cameras are positioned in dense forest areas. Goldeneye cameras monitor woodland lakes with mature trees. Each location is carefully managed by RSPB to provide optimal breeding conditions.',
    behavior: 'Each species exhibits unique behaviors. Swifts perform spectacular aerial displays and feed exclusively on flying insects. Ospreys demonstrate incredible fishing skills, plunging into water to catch fish. Goshawks are stealthy hunters, navigating through dense forest to catch prey. Goldeneyes dive underwater to feed on aquatic invertebrates and nest in tree holes. All species show devoted parental care during breeding season.',
    bestTime: 'Best viewing varies by species. Swifts (May-August): breeding season with constant aerial activity. Ospreys (April-August): migration arrival, nesting, and chick rearing. Goshawks (March-July): courtship, nesting, and fledging. Goldeneyes (April-July): nesting and brood rearing. Each camera offers different peak viewing times throughout spring and summer.',
    whatToWatch: [
      'Swift aerial acrobatics and nest visits',
      'Osprey fishing dives and prey deliveries',
      'Goshawk hunting and chick feeding',
      'Goldeneye diving and duckling development',
      'Multiple species breeding behaviors',
    ],
  },
  'kotkaklubi-stork': {
    id: 'kotkaklubi-stork',
    number: 14,
    species: 'White Stork',
    liveUrl: 'https://www.youtube.com/@Kotkaklubi/live',
    title: 'Kotkaklubi White Stork Nest',
    description: 'Watch white storks at their nest in Estonia. Kotkaklubi (Eagle Club) has been running live cameras on protected bird species nests since 2007, providing a unique window into the lives of these magnificent birds.',
    fullDescription: 'Experience the majesty of white storks through this live camera operated by Kotkaklubi, Estonia\'s premier bird conservation organization. Since 2007, Kotkaklubi (Eagle Club) has pioneered live nest cameras to monitor and protect endangered bird species including white storks, eagles, and black storks. This camera provides an intimate view into stork family life in the Estonian countryside, where these elegant birds have nested for centuries. Watch as these symbols of good fortune perform their traditional bill-clattering displays and raise their young.',
    location: 'Estonia',
    thumbnail: 'https://i.ytimg.com/vi/ldThVtNVYJQ/hqdefault.jpg',
    channelName: 'Kotkaklubi',
    videoId: 'qbkEpXowA2o',
    aboutSpecies: 'White storks are large, elegant wading birds standing over 3 feet tall with a wingspan of 6-7 feet. They are instantly recognizable with their white plumage, black wing feathers, long red legs, and pointed red bills. These iconic birds are deeply embedded in European folklore and are symbols of good luck, fertility, and new beginnings. Estonia hosts important breeding populations of white storks, with Kotkaklubi monitoring and protecting numerous nest sites.',
    habitat: 'In Estonia, white storks traditionally nest on rooftops, chimneys, telephone poles, and specially erected platforms in rural areas. They feed in wet meadows, shallow wetlands, agricultural fields, and grasslands. Estonian stork populations benefit from the country\'s extensive wetland systems and traditional farming practices that provide abundant prey including frogs, insects, small rodents, and fish. Kotkaklubi works to preserve and enhance these critical habitats.',
    behavior: 'White storks are skilled hunters, stalking through grass and shallow water to catch prey with quick bill strikes. They are famous for their spectacular bill-clattering greeting ceremonies, performed when mates reunite at the nest. Both parents share all nesting duties including incubation (33-34 days) and feeding. Estonian storks are long-distance migrants, flying to sub-Saharan Africa each autumn and returning in spring, covering over 6,000 miles. Kotkaklubi\'s cameras document the complete breeding cycle and migration patterns.',
    bestTime: 'Best viewing during Estonian breeding season (April-August). Spring (late April-May): dramatic arrival from Africa, nest renovation, and courtship displays. Late spring (May-June): egg laying and incubation. Summer (June-July): chick rearing with frequent feeding. Late summer (August): fledging and pre-migration gathering. Early morning (6-9 AM) shows peak feeding activity.',
    whatToWatch: [
      'Bill-clattering greeting displays',
      'Nest building with sticks and grass',
      'Parents feeding chicks regurgitated food',
      'Chick development from small downy to full-sized',
      'Migration preparation behaviors',
    ],
  },
  'kotkaklubi-various': {
    id: 'kotkaklubi-various',
    number: 15,
    species: 'Various Birds',
    liveUrl: 'https://www.youtube.com/@Kotkaklubi/live',
    title: 'Kotkaklubi Multi-Species Cameras',
    description: 'Watch multiple bird species from Kotkaklubi\'s camera network in Estonia. Features live cameras on eagles (white-tailed, spotted, golden), ospreys, and storks. Experience diverse Estonian wildlife from one premier conservation organization.',
    fullDescription: 'Explore the remarkable diversity of Estonian birds of prey and storks through Kotkaklubi\'s comprehensive camera network. Since 2007, this pioneering conservation organization has installed cameras on nests of rare and protected species across Estonia. The multi-species feed rotates between white-tailed eagles, lesser spotted eagles, greater spotted eagles, golden eagles, ospreys, white storks, and black storks. Each camera provides crucial data for conservation while allowing viewers worldwide to witness these magnificent birds in their natural habitats.',
    location: 'Estonia',
    thumbnail: 'https://i.ytimg.com/vi/7uUmdtXSgwU/hqdefault.jpg',
    channelName: 'Kotkaklubi',
    videoId: 'qbkEpXowA2o',
    aboutSpecies: 'This network features Estonia\'s most impressive birds. White-tailed eagles are Europe\'s largest raptors with 8-foot wingspans. Lesser and greater spotted eagles are endangered forest raptors. Golden eagles are powerful mountain predators. Ospreys are specialist fish hunters. White and black storks are iconic wading birds. Estonia provides crucial breeding habitat for all these species, making Kotkaklubi\'s conservation work internationally significant.',
    habitat: 'The cameras span diverse Estonian ecosystems. Eagle cameras overlook forests, lakes, and coastal areas. Osprey cameras monitor fish-rich lakes and rivers. Stork cameras are positioned in wetlands and rural villages. Estonia\'s extensive forests, clean waterways, and low human density create ideal conditions for these sensitive species. Kotkaklubi works to protect and manage these critical habitats.',
    behavior: 'Each species shows unique behaviors. Eagles demonstrate powerful hunting and impressive aerial displays. Ospreys perform spectacular fishing dives. Storks execute bill-clattering ceremonies and long-distance migrations. All species show devoted parental care, with both parents typically sharing nesting duties. The cameras capture courtship, hunting, feeding, chick development, and fledging across multiple species.',
    bestTime: 'Viewing opportunities vary by species. Eagles (February-July): early nesters with long breeding seasons. Ospreys (April-August): return from Africa migration through fledging. Storks (April-August): arrival, nesting, and Africa migration preparation. Different cameras show peak activity at different times, providing year-round viewing opportunities. Early morning and late afternoon typically show most activity.',
    whatToWatch: [
      'Multiple eagle species hunting and nesting',
      'Osprey fishing techniques and prey deliveries',
      'Stork bill-clattering and feeding behaviors',
      'Diverse chick development across species',
      'Conservation efforts protecting rare birds',
    ],
  },
  'explore-penguins-puffins': {
    id: 'explore-penguins-puffins',
    number: 16,
    species: 'Various Birds',
    liveUrl: 'https://www.youtube.com/@ExplorePenguinsandPuffins/live',
    title: 'Explore Penguins and Puffins',
    description: 'Watch penguins and puffins through Explore.org\'s live camera network. Observe these charming seabirds in their natural habitats, featuring both Antarctic penguins and Atlantic puffins from various locations around the world.',
    fullDescription: 'Experience the enchanting world of seabirds through Explore.org\'s penguin and puffin camera network. Explore.org is the world\'s leading philanthropic live nature cam network, bringing wildlife into homes and classrooms globally. This multi-camera feed showcases charismatic seabirds from different locations: Magellanic penguins at rescue facilities, Atlantic puffins on Maine islands, and various other seabird colonies. Each camera provides educational content about seabird conservation, marine ecosystems, and the challenges these birds face.',
    location: 'Multiple Locations',
    thumbnail: 'https://i.ytimg.com/vi/sWQtnUoBy1w/hqdefault.jpg',
    channelName: 'Explore Penguins and Puffins',
    videoId: 'F5yLGZp5nsA',
    aboutSpecies: 'This feed features diverse seabirds. Penguins are flightless birds specialized for swimming, with species ranging from Antarctic to temperate regions. Atlantic puffins are colorful diving seabirds known as "sea parrots" with distinctive bills. Both groups are excellent swimmers, feeding on fish and marine invertebrates. These charismatic birds face conservation challenges from climate change, overfishing, and ocean pollution.',
    habitat: 'Cameras monitor different seabird habitats. Penguin cameras show coastal colonies and rehabilitation centers where rescued birds recover. Puffin cameras overlook rocky Atlantic islands where these birds nest in burrows and rock crevices. Maine\'s islands provide crucial breeding habitat for Atlantic puffins, which nest in colonies and feed in surrounding waters. Conservation efforts focus on protecting these fragile island ecosystems.',
    behavior: 'Penguins and puffins share similar lifestyles despite being unrelated. Both are skilled swimmers using wings to "fly" underwater. Penguins are more aquatic, while puffins can fly in air. Both species are colonial nesters with devoted pair bonds. Parents share incubation and chick-rearing duties. Puffins are famous for carrying multiple fish crosswise in their bills. Both groups face predators including gulls, skuas, and marine mammals.',
    bestTime: 'Best viewing varies by location and species. Puffins (April-August): breeding season on Maine islands with frequent burrow visits and fish deliveries. Penguins (year-round): activity varies by species and location, with rehabilitation cameras showing daily life. Summer months (June-August) typically show highest activity across most cameras. Morning and evening show peak feeding times.',
    whatToWatch: [
      'Puffin fish deliveries with multiple catches',
      'Penguin swimming and diving behaviors',
      'Chick feeding and development',
      'Colonial nesting behaviors and interactions',
      'Conservation and rehabilitation efforts',
    ],
  },
  'faucon-crecerelle': {
    id: 'faucon-crecerelle',
    number: 17,
    species: 'Peregrine Falcon',
    liveUrl: 'https://www.youtube.com/@fauconcrecerelle/live',
    title: 'Faucon Crécerelle Nest Cam',
    description: 'Watch peregrine falcons at their nest through this French wildlife camera. Observe these incredible aerial hunters as they hunt, nest, and raise their young with stunning detail and expert monitoring.',
    fullDescription: 'Experience the world of peregrine falcons through this expertly positioned nest camera from France. This camera provides exceptional views of one of nature\'s most spectacular predators in their European habitat. Watch these magnificent raptors demonstrate their legendary hunting prowess, reaching speeds over 240 mph during hunting dives. The camera captures intimate family moments from courtship through fledging, offering viewers a rare glimpse into the private lives of these remarkable birds.',
    location: 'France',
    thumbnail: 'https://i.ytimg.com/vi/TmgP8BhtffE/hqdefault.jpg',
    channelName: 'Faucon Crécerelle',
    videoId: 'DSQxEryTLw8',
    aboutSpecies: 'Peregrine falcons are medium-sized raptors renowned as the fastest animals on Earth, capable of reaching speeds exceeding 240 mph during hunting dives. They measure 14-19 inches in length with a wingspan of 3.3-3.6 feet. Adults feature striking slate-blue backs, barred white underparts, and distinctive black "mustache" markings on their faces. In France and across Europe, peregrines have made a remarkable recovery from near extinction in the 1960s due to DDT pesticides, becoming one of conservation\'s greatest success stories.',
    habitat: 'In France, peregrine falcons nest on cliff faces, rocky outcrops, quarries, and increasingly on tall buildings and bridges in urban areas. European peregrines prefer areas with open hunting grounds including coastlines, river valleys, and agricultural lands where prey birds are abundant. French populations benefit from the country\'s diverse landscapes, from Alpine cliffs to Atlantic coastal regions. Conservation efforts have protected key nesting sites and helped populations recover across Europe.',
    behavior: 'Peregrine falcons are spectacular aerial hunters, catching birds in mid-flight after breathtaking high-speed stoops (hunting dives). They spot prey from great heights, fold their wings into a streamlined bullet shape, and plummet at incredible speeds, striking prey with their talons. European peregrines primarily hunt pigeons, doves, starlings, and other medium-sized birds. Pairs mate for life and are fiercely territorial. Both parents share incubation duties (29-32 days) and chick-rearing responsibilities. French peregrines typically raise 2-4 young per year.',
    bestTime: 'Best viewing during European breeding season (March-July). Early spring (March-April): spectacular courtship displays including aerial acrobatics, talon-grappling, and food transfers between mates. Late spring (April-May): egg laying and intensive incubation period. Early summer (May-June): hatching and frequent feeding sessions with prey deliveries. Late summer (June-July): fledging period with young birds learning to fly and hunt. Morning hours (6-10 AM) typically show most hunting activity.',
    whatToWatch: [
      'Spectacular high-speed hunting stoops',
      'Prey deliveries and feeding sessions',
      'Courtship aerial displays and bonding',
      'Chick development from downy white to sleek juveniles',
      'Fledgling flight practice and landing attempts',
    ],
  },
};

// Get embed URL
function getEmbedUrl(liveUrl: string, videoId?: string): string {
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  if (liveUrl.includes('@DaleHollowEagleCamera')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UClW_2-fZBUJbaFPR9OFlSCA&autoplay=1';
  }

  if (liveUrl.includes('@CarnyxWildTwo') || liveUrl.includes('@CarnyxWild')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCzb2wqPoBecAyANKCD-Jl6A&autoplay=1';
  }

  if (liveUrl.includes('@NestCamLive')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UC99XoaIwg7oS7z-wY25WDKg&autoplay=1';
  }

  if (liveUrl.includes('@ForestryEngland')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCspfY4rpODprWA_9zeZ_9EQ&autoplay=1';
  }

  if (liveUrl.includes('@FOBBVCAM')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCsFgbVuhRrPV5FqyN7kOD8g&autoplay=1';
  }

  if (liveUrl.includes('@uistforestretreat')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCMLIrAbhJmZEP4M32R8Ocyg&autoplay=1';
  }

  if (liveUrl.includes('@ExploreOspreyandFalcons')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCv0In2Sw_YabIhMHHOoTSkA&autoplay=1';
  }

  if (liveUrl.includes('@StadtverwaltungBadSalzungen')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCzAuBgdr5YC8ARNRMWgIAXg&autoplay=1';
  }

  if (liveUrl.includes('@DNA-eV')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCTafwp7XV4wG6kL4Dp6iAJQ&autoplay=1';
  }

  if (liveUrl.includes('@TheAshgroveClinic')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCN23mw22ip82ip_XdNCkynQ&autoplay=1';
  }

  if (liveUrl.includes('@CornellBirdCams')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCZXZQxS3d6NpR-eH_gdDwYA&autoplay=1';
  }

  if (liveUrl.includes('@GreatLakesBaldEagleCam')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCob_chLKvtrcg8KE-KpQiig&autoplay=1';
  }

  if (liveUrl.includes('RSPBvideo')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCl8QdQ9ZaBT65tF1yOmbMBQ&autoplay=1';
  }

  if (liveUrl.includes('@Kotkaklubi')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCCvBXTVqksM0wSaqd19N0Sg&autoplay=1';
  }

  if (liveUrl.includes('@ExplorePenguinsandPuffins')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCyre4OfIuo5f-3vQ-c9BxzS&autoplay=1';
  }

  if (liveUrl.includes('@fauconcrecerelle')) {
    return 'https://www.youtube.com/embed/live_stream?channel=UCGjtF72qHEOkEn-9PLf1t7g&autoplay=1';
  }

  return liveUrl;
}

export default function BirdDetailPage() {
  const params = useParams();
  const birdId = params.id as string;
  const bird = birdsData[birdId as keyof typeof birdsData];

  // Get channel URL (remove /live from liveUrl)
  const getChannelUrl = (url: string): string => {
    return url.replace('/live', '');
  };

  if (!bird) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Bird Not Found</h1>
          <Link href="/" className="text-green-400 hover:text-green-300">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const embedUrl = getEmbedUrl(bird.liveUrl, bird.videoId);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-dove text-white text-xl"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Birds by Feather</div>
                <div className="text-green-400 text-xs">Live Nest Cameras</div>
              </div>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2">
                <i className="fa-solid fa-home"></i>
                Home
              </Link>
              <Link href="/#nests" className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2">
                <i className="fa-solid fa-video"></i>
                Nests
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Home
          </Link>

          {/* Title Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center border border-gray-600">
                <span className="text-gray-300 font-bold">#{bird.number}</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{bird.title}</h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-green-500"></i>
                    <span>{bird.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">Live Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 font-medium">
              {bird.species}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Video Player */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="aspect-video bg-black rounded-xl overflow-hidden border border-gray-700 mb-4">
                  <iframe
                    className="w-full h-full"
                    src={embedUrl}
                    title={bird.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="space-y-4">
                  <a
                    href={bird.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all text-center"
                  >
                    <i className="fa-brands fa-youtube mr-2"></i>
                    Watch on YouTube
                  </a>

                  {/* Attribution Notice */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <i className="fa-brands fa-youtube text-red-500 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-xs leading-relaxed">
                          <span className="font-semibold text-white">Conteúdo Original:</span> Canal{' '}
                          <a
                            href={getChannelUrl(bird.liveUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 font-semibold underline"
                          >
                            {bird.channelName}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* About This Stream */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-circle-info text-green-500"></i>
                  About This Stream
                </h2>
                <p className="text-gray-300 leading-relaxed">{bird.fullDescription}</p>
              </div>

              {/* About the Species */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-feather text-blue-400"></i>
                  About {bird.species}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">{bird.aboutSpecies}</p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-tree text-green-400"></i>
                      Habitat
                    </h3>
                    <p className="text-gray-300 text-sm">{bird.habitat}</p>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-paw text-yellow-400"></i>
                      Behavior
                    </h3>
                    <p className="text-gray-300 text-sm">{bird.behavior}</p>
                  </div>
                </div>
              </div>

              {/* What to Watch */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-binoculars text-purple-400"></i>
                  What to Watch For
                </h2>
                <ul className="space-y-2">
                  {bird.whatToWatch.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <i className="fa-solid fa-check text-green-500 mt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Time to Watch */}
              <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-clock text-green-400"></i>
                  Best Time to Watch
                </h2>
                <p className="text-gray-300 leading-relaxed">{bird.bestTime}</p>
              </div>
            </div>
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
