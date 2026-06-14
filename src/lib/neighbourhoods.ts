export const NEIGHBOURHOODS = [
  {
    slug: 'northern-quarter',
    label: 'Northern Quarter',
    strapline: 'Indie records, exposed brick, and menus that don\'t explain themselves.',
    pullQuote: 'The Northern Quarter has always had more opinions per square metre than anywhere else in the city.',
  },
  {
    slug: 'ancoats',
    label: 'Ancoats',
    strapline: 'The mill district reborn. Serious cooking in converted spaces that remember what they used to be.',
    pullQuote: 'Ancoats is where Manchester\'s food scene makes its best argument for itself. Ambitious, considered, and still broadly affordable.',
  },
  {
    slug: 'chorlton',
    label: 'Chorlton',
    strapline: 'South Manchester\'s village with a chip on its shoulder and good reason for it.',
    pullQuote: 'Chorlton has a habit of doing things quietly and doing them well.',
  },
  {
    slug: 'didsbury',
    label: 'Didsbury',
    strapline: 'Leafy, unhurried, and quietly excellent. South Manchester at its most considered.',
    pullQuote: 'Didsbury doesn\'t shout. It doesn\'t need to.',
  },
  {
    slug: 'spinningfields',
    label: 'Spinningfields',
    strapline: 'The city\'s sleek financial quarter, with restaurants to match the ambition.',
    pullQuote: 'Spinningfields trades in polish. When it\'s good, it\'s very good.',
  },
  {
    slug: 'rusholme',
    label: 'Rusholme',
    strapline: 'The Curry Mile and beyond — one of the most vibrant eating streets in England.',
    pullQuote: 'Rusholme is Manchester\'s most honest street. What you see is what you get, and it\'s brilliant.',
  },
  {
    slug: 'deansgate',
    label: 'Deansgate',
    strapline: 'Central Manchester at its most ambitious, from rooftop dining to heritage pubs.',
    pullQuote: 'Deansgate contains multitudes. Go for the views, stay for the food.',
  },
] as const;

export type NeighbourhoodSlug = typeof NEIGHBOURHOODS[number]['slug'];
