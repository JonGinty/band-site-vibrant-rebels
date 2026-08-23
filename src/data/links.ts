import { siFacebook, siInstagram, siSpotify, siYoutube, type SimpleIcon } from 'simple-icons';

export type SocialLink = {
  label: string;
  handle?: string;
  href: string;
  description: string;
  icon?: SimpleIcon;
  featured?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    handle: '@vibrantrebels',
    href: 'https://instagram.com/vibrantrebels',
    description: 'Gig photos, rehearsal noise, and the quickest updates.',
    icon: siInstagram,
    featured: true,
  },
  // {
  //   label: 'TikTok',
  //   handle: '@vibrantrebels',
  //   href: 'https://www.tiktok.com/@vibrantrebels',
  //   description: 'Short clips, rough demos, and backstage bits.',
  //   featured: false,
  // },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/1BHgPpsXuUASHiCFCSLW0V',
    description: 'Stream the latest singles and save the band.',
    icon: siSpotify,
    featured: true,
  },
  // {
  //   label: 'Bandcamp',
  //   href: 'https://vibrantrebels.bandcamp.com',
  //   description: 'Buy music direct and support the next release.',
  // },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@VibrantRebelsBand',
    description: 'Live sessions, videos, and show footage.',
    icon: siYoutube,
    featured: true,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1Dm2Dxv1ej',
    description: 'Updates from the band.',
    icon: siFacebook,
    featured: true
  },
  // {
  //   label: 'Mailing list',
  //   href: 'mailto:hello@vibrantrebels.com?subject=Mailing%20list',
  //   description: 'Get show announcements and release news by email.',
  // },
  // {
  //   label: 'Bookings',
  //   href: 'mailto:hello@vibrantrebels.com?subject=Booking%20Vibrant%20Rebels',
  //   description: 'For venues, festivals, press, and other serious business.',
  // },
];
