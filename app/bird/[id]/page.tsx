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
