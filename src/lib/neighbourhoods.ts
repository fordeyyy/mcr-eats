export const NEIGHBOURHOODS = [
  { slug: 'northern-quarter', label: 'Northern Quarter' },
  { slug: 'ancoats',          label: 'Ancoats' },
  { slug: 'chorlton',         label: 'Chorlton' },
  { slug: 'didsbury',         label: 'Didsbury' },
  { slug: 'spinningfields',   label: 'Spinningfields' },
  { slug: 'rusholme',         label: 'Rusholme' },
  { slug: 'deansgate',        label: 'Deansgate' },
] as const;

export type NeighbourhoodSlug = typeof NEIGHBOURHOODS[number]['slug'];
