/**
 * Sections marked false are hidden from the published site, but remain visible
 * locally when running `npm run dev`.
 */
export const publishedSections = {
  about: true,
  gallery: false,
  press: false,
  shows: true,
  technical: false,
} as const;

export type SiteSection = keyof typeof publishedSections;

// `all` is for local work; every other value deliberately behaves as the
// safer, public-only mode.
export const isEverythingMode = import.meta.env.SITE_VISIBILITY === 'all';

export function isSectionVisible(section: SiteSection) {
  return isEverythingMode || publishedSections[section];
}
