export interface FunnyContent {
  id: number;
  title: string;
  type: 'image' | 'video' | 'meme';
  source: string;
  thumbnail?: string;
  description: string;
}

export const funnyDogContent: FunnyContent[] = [
  {
    id: 1,
    title: 'Dog vs. Door Stopper',
    type: 'image',
    source: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This confused pupper can\'t figure out the door stopper'
  },
  {
    id: 2,
    title: 'When the Food Arrives',
    type: 'meme',
    source: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'That face when you hear the food bag opening'
  },
  {
    id: 3,
    title: 'Guilty Dog Compilation',
    type: 'video',
    source: 'https://www.youtube.com/embed/8HLcFZNje_w',
    thumbnail: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Dogs looking guilty after making a mess'
  },
  {
    id: 4,
    title: 'Zoom Zoomies',
    type: 'image',
    source: 'https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'When the zoomies hit during a Zoom call'
  },
  {
    id: 5,
    title: 'Dog vs. Lemon',
    type: 'video',
    source: 'https://www.youtube.com/embed/WGEufo9NeYA',
    thumbnail: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Hilarious reactions of dogs trying lemon for the first time'
  },
  {
    id: 6,
    title: 'Monday Mood',
    type: 'meme',
    source: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This pup represents how we all feel on Mondays'
  },
  {
    id: 7,
    title: 'Dog Fails Compilation',
    type: 'video',
    source: 'https://www.youtube.com/embed/6viR_Y5X2vM',
    thumbnail: 'https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Dogs failing in the most adorable ways'
  },
  {
    id: 8,
    title: 'Shower Thoughts',
    type: 'image',
    source: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'When you\'re having deep thoughts in the shower'
  },
  {
    id: 9,
    title: 'Drama Queen',
    type: 'meme',
    source: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The most dramatic dog reaction ever'
  },
  {
    id: 10,
    title: 'Dogs Who Can\'t Catch',
    type: 'video',
    source: 'https://www.youtube.com/embed/6w2UxDdhZPk',
    thumbnail: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'These pups struggle with the concept of catching'
  },
  {
    id: 11,
    title: 'Working From Home Reality',
    type: 'image',
    source: 'https://images.pexels.com/photos/6131182/pexels-photo-6131182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The reality of working from home with dogs'
  },
  {
    id: 12,
    title: 'Weekend Plans',
    type: 'meme',
    source: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'My weekend plans vs. social obligations'
  }
];