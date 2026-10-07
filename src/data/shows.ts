type ShowDetails = {
  date: string;
  event?: string;
  city: string;
  venue?: string;
  region?: string;
  address?: string;
  website?: string;
  /** Show the audience that venue and ticket information will follow. */
  detailsComingSoon?: boolean;
  /** Entry price shown in the show details. Use 0 for a free event. */
  doorPrice?: string | number;
};

type UnticketedShow =
  | {
    /** Tickets are not required. Entry may still have a door price. */
    unticketed: true;
    startTime: string;
    endTime?: string;
    ticketUrl?: never;
  }
  | {
    unticketed: true;
    startTime?: never;
    endTime?: never;
    ticketUrl?: never;
  };

export type Show = ShowDetails & (
  | UnticketedShow
  | {
    unticketed?: false;
    startTime?: never;
    endTime?: never;
    ticketUrl?: string;
  }
);

export const showBufferDays = 1;

export const getShowDate = (date: string) => new Date(`${date}T00:00:00`);

export const getShowHighlight = (show: Show) => show.event || show.city;

export const getUpcomingShows = (now = new Date()): Show[] => {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const cutoff = new Date(today);

  cutoff.setDate(today.getDate() - showBufferDays);

  return shows
    .filter((show) => getShowDate(show.date) >= cutoff)
    .sort((first, second) => getShowDate(first.date).getTime() - getShowDate(second.date).getTime());
};

// This changes whenever the preview-card content changes, giving social platforms a new image URL.
export const getShowsPreviewVersion = (now = new Date()): string => {
  const previewShows = getUpcomingShows(now).slice(0, 2);
  const signature = previewShows
    .map((show) => [show.date, show.event, show.city, show.venue].filter(Boolean).join('|'))
    .join('~') || 'no-upcoming-shows';
  const hash = Array.from(signature)
    .reduce((value, character) => ((value * 31) + character.charCodeAt(0)) >>> 0, 0)
    .toString(36);

  return `upcoming-${previewShows.map((show) => show.date).join('-') || 'none'}-${hash}`;
};

export const shows: Show[] = [
  {
    date: '2026-04-30',
    city: 'Edinburgh',
    venue: 'Leith Arches',
  },
  {
    date: '2026-06-06',
    city: 'East Linton',
    venue: 'East Linton Town Hall',
    doorPrice: '£7 on the door',
  },
  {
    date: '2026-06-15',
    event: 'Eden Festival',
    website: 'https://edenfestival.co.uk/',
    city: 'Moffat',
  },
  {
    date: '2026-07-25',
    city: 'Kirkcudbright',
    venue: 'Kirkcudbright Harbour',
  },
  {
    date: '2026-08-21',
    city: 'Edinburgh',
    venue: 'The Biscuit Factory',
  },
  {
    date: '2026-09-26',
    event: 'Dunbar Music Festival',
    city: 'Dunbar',
    venue: 'The Royal British Legion',
    region: 'East Lothian, South East Scotland, UK',
    address: 'The Royal British Legion, 147 High Street, Dunbar, Scotland, EH42 1ES',
    website: 'https://www.dunbarmusicfestival.co.uk/',
    ticketUrl: 'https://www.dunbarmusicfestival.co.uk/programme/vibrant-rebels',
  },
  {
    date: '2026-10-31',
    event: 'Moray Festival',
    city: 'Fochabers',
    region: 'Moray, North East Scotland, UK',
    venue: 'Inchberry Hall',
    address: 'Inchberry Hall, Orton, Fochabers, Moray, IV32 7QB',
    website: 'https://www.artsforwellbeingscotland.co.uk/fochabers-music-day/'
  },
  {
    date: '2026-11-27',
    city: 'Edinburgh',
    region: 'Edinburgh, North East Scotland, UK',
    venue: 'Stramash',
    address: '207 Cowgate, Edinburgh, EH1 1JQ',
    unticketed: true,
    startTime: '10pm',
    endTime: 'midnight',
    doorPrice: 0,
  },
  {
    date: '2026-12-05',
    city: 'Haddington',
    region: 'East Lothian, North East Scotland, UK',
    detailsComingSoon: true,
  }
];

// Prefer the next show, while keeping a show visible for the day after it has happened.
// This is shared by the shows list and the silent-auction call to action.
export const getCurrentAuctionShow = (now = new Date()): Show | undefined => {
  return getUpcomingShows(now)[0];
};
