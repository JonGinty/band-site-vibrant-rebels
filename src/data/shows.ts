export type Show = {
  date: string;
  event?: string;
  city: string;
  venue?: string;
  region?: string;
  address?: string;
  website?: string;
  ticketUrl?: string;
  doorPrice?: string;
};

export const showBufferDays = 1;

export const getShowDate = (date: string) => new Date(`${date}T00:00:00`);

export const getShowHighlight = (show: Show) => show.event || show.city;

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
];

// Prefer the next show, while keeping a show visible for the day after it has happened.
// This is shared by the shows list and the silent-auction call to action.
export const getCurrentAuctionShow = (now = new Date()): Show | undefined => {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const cutoff = new Date(today);

  cutoff.setDate(today.getDate() - showBufferDays);

  return shows
    .filter((show) => getShowDate(show.date) >= cutoff)
    .sort((first, second) => getShowDate(first.date).getTime() - getShowDate(second.date).getTime())[0];
};
