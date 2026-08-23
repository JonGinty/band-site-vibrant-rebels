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
    role: 'Drummer',
    bio: 'Luke Kevin is a versatile actor and musician, gaining musical influence from a wide array of genres including Jazz, Funk, Pop, Rock, Soul and more. Using Buddy Rich\'s signature sticks, he\'s a prolific drummer with hopes of being endorsed by Gretsch one day.',
    image: 'images/luke-bio-pic.png',
  },
  {
    slug: 'Oz',
    name: 'oz',
    role: 'Vocals',
    bio: 'Oz is an Edinburgh born lyricist who has been making himself a part of the UK hip hop scene for years. Releasing music and collaborating with well known and respected artists all over the country. Known for powerful and meaningful lyrics, confident flows, punchlines and catchy hooks, he is an emcee who puts his value of crafting lyrics at the forefront of his music. A regular host of live jams at music festivals he\'s been known to freestyle whole sets of different genres of music with ease and keep crowds entertained with every moment. Whether it\'s getting the party jumping or pouring out his soul on stage if you see Oz on the bill you know you are going to witness to something special.',
    image: 'images/oz-bio-pic.png',
  },
  {
    slug: 'member-03',
    name: 'Member 03',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    slug: 'member-04',
    name: 'Member 04',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    slug: 'member-05',
    name: 'Member 05',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    slug: 'member-06',
    name: 'Member 06',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    slug: 'member-07',
    name: 'Member 07',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    slug: 'member-08',
    name: 'Member 08',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    slug: 'member-09',
    name: 'Member 09',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    slug: 'member-10',
    name: 'Member 10',
    role: 'ROLE PLACEHOLDER',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
];
