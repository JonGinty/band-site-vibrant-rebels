import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { getShowDate, getShowHighlight, getShowsPreviewVersion, getUpcomingShows } from '../../../data/shows';

const width = 1200;
const height = 630;
const shortDateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
});
const logoTreatment: 'halo' | 'tour-pass' = 'tour-pass';

const escapeXml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const showLine = (label: string, x: number, y: number, size: number, weight = 700) =>
  `<text x="${x}" y="${y}" fill="#21112f" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}">${escapeXml(label)}</text>`;

export function getStaticPaths() {
  return [{ params: { version: getShowsPreviewVersion() } }];
}

export const GET: APIRoute = async () => {
  const upcomingShows = getUpcomingShows().slice(0, 2);
  const logo = await sharp(`${process.cwd()}/public/images/vibrant-rebels-logo-horizontal.png`)
    .resize({ width: 300, height: 68, fit: 'inside' })
    .png()
    .toBuffer();

  const eventRows = upcomingShows.length
    ? upcomingShows.map((show, index) => {
      const y = 275 + (index * 195);
      const detail = show.venue ? `${show.city} · ${show.venue}` : show.city;
      const accent = index % 2 === 0 ? '#18c7ff' : '#ff2fad';

      return `
        <rect x="70" y="${y - 77}" width="1060" height="155" rx="10" fill="#fff9e8" stroke="#180725" stroke-width="4" />
        <path d="M80 ${y - 77} H94 V${y + 78} H80 Q70 ${y + 78} 70 ${y + 68} V${y - 67} Q70 ${y - 77} 80 ${y - 77}Z" fill="${accent}" />
        <rect x="108" y="${y - 32}" width="164" height="64" rx="6" fill="${accent}" stroke="#180725" stroke-width="3" />
        ${showLine(shortDateFormatter.format(getShowDate(show.date)).toUpperCase(), 126, y + 9, 26, 900)}
        ${showLine(getShowHighlight(show), 304, y - 7, 45, 800)}
        ${showLine(detail, 304, y + 35, 27, 500)}
      `;
    }).join('')
    : `
      <rect x="70" y="330" width="1060" height="118" rx="10" fill="#fff9e8" stroke="#180725" stroke-width="4" />
      ${showLine('New live dates coming soon', 112, 401, 34, 800)}
    `;
  const logoBackdrop = logoTreatment === 'tour-pass'
    ? `
      <g transform="rotate(-1.15 925 97)">
        <rect x="745" y="50" width="360" height="94" rx="10" fill="#180725" fill-opacity="0.84" stroke="#18c7ff" stroke-width="4" />
        <rect x="753" y="58" width="344" height="78" rx="6" fill="none" stroke="#ff2fad" stroke-width="2" />
      </g>
    `
    : '<ellipse cx="925" cy="97" rx="184" ry="58" fill="#180725" opacity="0.78" filter="url(#logo-halo)" />';
  const artwork = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="night" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#351157" />
          <stop offset="1" stop-color="#180725" />
        </linearGradient>
        <pattern id="coral-stripe" width="51" height="51" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
          <rect width="14" height="51" fill="#ff4f3f" opacity="0.24" />
        </pattern>
        <pattern id="teal-stripe" width="61" height="61" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="13" height="61" fill="#00d1b2" opacity="0.18" />
        </pattern>
        <filter id="logo-halo" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#night)" />
      <rect width="${width}" height="${height}" fill="url(#coral-stripe)" />
      <rect width="${width}" height="${height}" fill="url(#teal-stripe)" />
      ${logoBackdrop}
      <text x="70" y="130" fill="#fffdf5" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="900">UPCOMING SHOWS</text>
      <rect x="70" y="151" width="1060" height="8" rx="4" fill="#ff2fad" />
      ${eventRows}
    </svg>
  `);

  const image = await sharp({
    create: { width, height, channels: 4, background: '#fff7df' },
  })
    .composite([
      { input: artwork },
      { input: logo, left: 775, top: 65 },
    ])
    .png()
    .toBuffer();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
