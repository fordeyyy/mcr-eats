export const MOODS = [
  { label: 'Date night',       slug: 'date-night' },
  { label: 'Sunday lunch',     slug: 'sunday-lunch' },
  { label: 'Cheap & cheerful', slug: 'cheap-cheerful' },
  { label: 'Special occasion', slug: 'special-occasion' },
  { label: 'Good for groups',  slug: 'good-for-groups' },
  { label: 'Solo dining',      slug: 'solo-dining' },
  { label: 'Quick bite',       slug: 'quick-bite' },
  { label: 'Worth the journey', slug: 'worth-the-journey' },
] as const;

export type MoodSlug = typeof MOODS[number]['slug'];
