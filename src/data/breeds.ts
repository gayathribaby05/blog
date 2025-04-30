import { type Dog } from '@/types/dog';

export const dogBreeds: Dog[] = [
  {
    id: 1,
    name: 'Labrador Retriever',
    description: 'Friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Large',
    weight: '55-80 pounds',
    lifespan: '10-12 years',
    temperament: 'Friendly, Active, Outgoing',
    grooming: 'Weekly brushing, occasional baths',
    exercise: 'High; requires daily exercise',
    trainability: 'Highly trainable, eager to please',
    health: 'Hip dysplasia, eye disorders, obesity',
    funFacts: [
      'Originally bred as fishing dogs in Newfoundland',
      'America\'s most popular dog breed for 31 consecutive years',
      'Exceptional swimmers with water-resistant coats'
    ],
    energyLevel: 'High',
    friendliness: 'Very High',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 2,
    name: 'German Shepherd',
    description: 'Smart, confident, and courageous dogs. They are extremely loyal and make excellent guard dogs and police/military working dogs.',
    image: 'https://images.pexels.com/photos/1598167/pexels-photo-1598167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Large',
    weight: '50-90 pounds',
    lifespan: '7-10 years',
    temperament: 'Loyal, Confident, Courageous',
    grooming: 'Regular brushing, seasonal heavy shedding',
    exercise: 'High; needs physical and mental stimulation',
    trainability: 'Highly intelligent and trainable',
    health: 'Hip dysplasia, elbow dysplasia, bloat',
    funFacts: [
      'First breed used as guide dogs for the blind',
      'Can learn simple tasks after only 5 repetitions',
      'Featured in many films, including Rin Tin Tin'
    ],
    energyLevel: 'High',
    friendliness: 'Medium',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 3,
    name: 'Golden Retriever',
    description: 'Intelligent, friendly, and devoted dogs. They are eager to please and have a keen desire to learn, making them excellent family pets.',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Large',
    weight: '55-75 pounds',
    lifespan: '10-12 years',
    temperament: 'Friendly, Reliable, Trustworthy',
    grooming: 'Regular brushing, occasional trimming',
    exercise: 'High; daily activity needed',
    trainability: 'Highly trainable, eager to please',
    health: 'Hip dysplasia, cancer, heart issues',
    funFacts: [
      'Originally bred as hunting dogs to retrieve waterfowl',
      'One of the most popular therapy dog breeds',
      'Golden Retrievers rarely bark, which makes them poor guard dogs'
    ],
    energyLevel: 'High',
    friendliness: 'Very High',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 4,
    name: 'Bulldog',
    description: 'Friendly but dignified, courageous but not aggressive. Despite their sourmug, Bulldogs are among the gentlest of dogs.',
    image: 'https://images.pexels.com/photos/2069931/pexels-photo-2069931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Medium',
    weight: '40-50 pounds',
    lifespan: '8-10 years',
    temperament: 'Docile, Willful, Friendly',
    grooming: 'Regular facial fold cleaning, minimal brushing',
    exercise: 'Low; short walks sufficient',
    trainability: 'Can be stubborn but responds to consistent training',
    health: 'Breathing issues, overheating, joint problems',
    funFacts: [
      'Originally bred for bull-baiting in England',
      'Cannot swim well due to their body structure',
      'Many Bulldogs are delivered by C-section due to their large heads'
    ],
    energyLevel: 'Low',
    friendliness: 'Medium',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 5,
    name: 'Beagle',
    description: 'Curious, clever, and energetic hound dogs that require plenty of playtime. Known for their howling bays and keen sense of smell.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Small to Medium',
    weight: '20-30 pounds',
    lifespan: '10-15 years',
    temperament: 'Merry, Curious, Friendly',
    grooming: 'Weekly brushing, occasional baths',
    exercise: 'High; daily walks and playtime needed',
    trainability: 'Can be stubborn, needs consistent training',
    health: 'Ear infections, obesity, epilepsy',
    funFacts: [
      'Exceptional sense of smell with 220 million scent receptors',
      'NASA sent a pair of Beagles to live with a family of wolves in the \'70s to study socializing patterns',
      'The only breed to rank in the AKC top 10 every decade since founding'
    ],
    energyLevel: 'High',
    friendliness: 'High',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 6,
    name: 'Poodle',
    description: 'Extremely intelligent and active dogs. Despite their elegant appearance, they are athletic dogs that excel in obedience training.',
    image: 'https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Toy, Miniature, or Standard',
    weight: '6-70 pounds (depending on variety)',
    lifespan: '10-18 years',
    temperament: 'Intelligent, Active, Alert',
    grooming: 'High; requires regular professional grooming',
    exercise: 'Moderate to High; daily activity needed',
    trainability: 'Highly intelligent and easily trained',
    health: 'Hip dysplasia, eye disorders, skin issues',
    funFacts: [
      'One of the most hypoallergenic dog breeds',
      'Originally bred as water retrievers in Germany',
      'The official dog of France'
    ],
    energyLevel: 'High',
    friendliness: 'Medium',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 7,
    name: 'Siberian Husky',
    description: 'Athletic, energetic working dogs with a striking appearance. Known for their endurance, they were bred to pull sleds in harsh Arctic conditions.',
    image: 'https://images.pexels.com/photos/2853422/pexels-photo-2853422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Medium',
    weight: '35-60 pounds',
    lifespan: '12-14 years',
    temperament: 'Outgoing, Mischievous, Loyal',
    grooming: 'Heavy seasonal shedding, weekly brushing',
    exercise: 'Very High; needs vigorous daily exercise',
    trainability: 'Independent and sometimes stubborn',
    health: 'Eye problems, hip dysplasia',
    funFacts: [
      'Can maintain a pace of 10-15 mph for hours',
      'Known as "escape artists" due to their ability to jump fences and slip collars',
      'Their thick double coat allows them to withstand temperatures as low as -60°F'
    ],
    energyLevel: 'Very High',
    friendliness: 'High',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 8,
    name: 'Dachshund',
    description: 'Bold, curious dogs with an unmistakable long-backed body and short legs. They have a big personality despite their small size.',
    image: 'https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Small',
    weight: '11-32 pounds (standard and miniature)',
    lifespan: '12-16 years',
    temperament: 'Clever, Courageous, Lively',
    grooming: 'Varies by coat type (smooth, wirehaired, longhaired)',
    exercise: 'Moderate; daily walks, careful with jumping',
    trainability: 'Smart but stubborn, needs patient training',
    health: 'Back problems, obesity',
    funFacts: [
      'Name means "badger dog" in German, as they were bred to hunt badgers',
      'The first Olympic mascot was a Dachshund named Waldi in 1972',
      'Their unique body shape makes them excellent tunnel hunters'
    ],
    energyLevel: 'Medium',
    friendliness: 'Medium',
    goodWithKids: true,
    goodWithPets: false
  },
  {
    id: 9,
    name: 'Boxer',
    description: 'Fun-loving, bright, and active dogs. Their patience and protective nature have earned them a reputation as great family dogs.',
    image: 'https://images.pexels.com/photos/733702/pexels-photo-733702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Medium to Large',
    weight: '50-70 pounds',
    lifespan: '10-12 years',
    temperament: 'Playful, Energetic, Intelligent',
    grooming: 'Easy; occasional brushing',
    exercise: 'High; requires daily vigorous exercise',
    trainability: 'Responds well to consistent, positive training',
    health: 'Cancer, heart conditions, hip dysplasia',
    funFacts: [
      'Named "Boxer" because they use their front paws to play, looking like they\'re boxing',
      'Boxers are known to "kidney bean" - twisting their bodies into a semicircle shape when excited',
      'Starred in a Disney movie called "The Ugly Dachshund" where a Great Dane thinks he\'s a Dachshund'
    ],
    energyLevel: 'High',
    friendliness: 'High',
    goodWithKids: true,
    goodWithPets: true
  },
  {
    id: 10,
    name: 'Shih Tzu',
    description: 'Affectionate, playful companion dogs. Their name means "little lion," but there\'s nothing fierce about this loving lapdog.',
    image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    size: 'Small',
    weight: '9-16 pounds',
    lifespan: '10-18 years',
    temperament: 'Affectionate, Outgoing, Friendly',
    grooming: 'High; daily brushing, regular haircuts',
    exercise: 'Low; short walks and indoor play',
    trainability: 'Can be stubborn but responds to positive methods',
    health: 'Breathing problems, eye issues, skin allergies',
    funFacts: [
      'One of the oldest dog breeds, dating back to at least 800 BCE',
      'Bred to be companions for Chinese royalty',
      'Their name translates to "lion dog" because of their resemblance to Chinese guardian lions'
    ],
    energyLevel: 'Low to Medium',
    friendliness: 'High',
    goodWithKids: true,
    goodWithPets: true
  },
];

// This is a small sample of breeds
// In a real application, you would have a more comprehensive dataset with all 50+ breeds