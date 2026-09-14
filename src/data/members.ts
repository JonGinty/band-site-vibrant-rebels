export type BandMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
};

// Add an image such as `images/members/member-01.jpg` after placing it in public/.
export const bandMembers: BandMember[] = [
  {
    slug: 'luke-kevin',
    name: 'Luke Kevin',
    role: 'Drums',
    bio: 'Luke Kevin is a versatile actor and musician, gaining musical influence from a wide array of genres including Jazz, Funk, Pop, Rock, Soul and more. Using Buddy Rich\'s signature sticks, he\'s a prolific drummer with hopes of being endorsed by Gretsch one day.',
    image: 'images/luke-bio-pic.png',
  },
  {
    slug: 'oz',
    name: 'Oz',
    role: 'Vocals',
    bio: 'Oz is an Edinburgh born lyricist who has been making himself a part of the UK hip hop scene for years. Releasing music and collaborating with well known and respected artists all over the country. Known for powerful and meaningful lyrics, confident flows, punchlines and catchy hooks, he is an emcee who puts his value of crafting lyrics at the forefront of his music. A regular host of live jams at music festivals he\'s been known to freestyle whole sets of different genres of music with ease and keep crowds entertained with every moment. Whether it\'s getting the party jumping or pouring out his soul on stage if you see Oz on the bill you know you are going to witness to something special.',
    image: 'images/oz-bio-pic.png',
  },
  {
    slug: 'boyd-mckay',
    name: 'Boyd',
    role: 'Lead Guitar, and Vocals',
    bio: 'The incredible driving force behind the band, Boyd is a legendary guitarist and veteran of the Scottish music scene with a career spanning over a decade!',
    image: 'images/boyd-mckay-bio-pic.png',
  },
  {
    slug: 'jonji',
    name: 'Jonji',
    role: 'Tenor Saxophone, Acoustic Guitar, and More!',
    bio: `"Hey Boyd, can we put some bouzouki on this track?" - Jonji, multi-instrumentalist and all-round musical wizard, Jonji is a master of both music and writing boring copy for a website nobody will actually read, AND THAT INCLUDES YOU!`,
    image: 'images/jonji-bio-pic.png',
  },
  { 
    slug: 'christie',
    name: 'Christie C',
    role: 'Keys',
    bio: '[jonji here] Christie, send me your bio!',
  },
  {
    slug: 'christian',
    name: 'Christian',
    role: 'Also Saxophone',
    bio: '[jonji here] Christian, send me your bio!',
  },
  {
    slug: 'matt',
    name: 'Matt',
    role: 'Trumpet',
    bio: '[jonji here] Matt, send me your bio!',
  },
  {
    slug: 'sparky',
    name: 'Sparky',
    role: 'Percussion and Electronics',
    bio: '[jonji here] Sparky, send me your bio!',
  },
  {
    slug: 'sarah',
    name: 'Sarah',
    role: 'Vocals',
    bio: '[jonji here] Sarah, send me your bio!',
  },
  {
    slug: 'chats',
    name: 'Chats',
    role: 'Bass',
    bio: 'The man, the myth… The pseudo funk magician, Chatonda Ridley (Chats for short) appeared one day when the rebels repeated the word “bass” three times in front of a mirror. Some say that he only speaks in song titles. Others, say that when listening to his heart beat with a stethoscope, they have heard the unmistakable sound of slap bass… all we know is that if you feed him and water him that he turns up and makes any gig you\'re playing 10 times groovier!',
    image: 'images/chats-bio-pic.png',
  },
];
