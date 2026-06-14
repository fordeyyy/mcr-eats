import { defineConfig } from 'tinacms';

const NEIGHBOURHOODS = [
  { label: 'Northern Quarter', value: 'northern-quarter' },
  { label: 'Ancoats',          value: 'ancoats' },
  { label: 'Chorlton',         value: 'chorlton' },
  { label: 'Didsbury',         value: 'didsbury' },
  { label: 'Spinningfields',   value: 'spinningfields' },
  { label: 'Rusholme',         value: 'rusholme' },
  { label: 'Deansgate',        value: 'deansgate' },
];

const MOODS = [
  'Date night',
  'Sunday lunch',
  'Cheap & cheerful',
  'Special occasion',
  'Good for groups',
  'Solo dining',
  'Quick bite',
  'Worth the journey',
];

const DAYS = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday',
];

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token:    process.env.TINA_TOKEN    || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot:    'images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name:   'restaurant',
        label:  'Restaurants',
        path:   'src/content/restaurants',
        format: 'md',
        fields: [
          {
            type:     'string',
            name:     'name',
            label:    'Name',
            required: true,
            isTitle:  true,
          },
          {
            type:     'string',
            name:     'neighbourhood',
            label:    'Neighbourhood',
            required: true,
            options:  NEIGHBOURHOODS,
          },
          {
            type:     'string',
            name:     'cuisine',
            label:    'Cuisine',
            required: true,
          },
          {
            type:     'string',
            name:     'price',
            label:    'Price',
            required: true,
            options:  ['£', '££', '£££', '££££'],
          },
          {
            type:     'string',
            name:     'address',
            label:    'Address',
            required: true,
          },
          {
            type:  'string',
            name:  'summary',
            label: 'Summary (card teaser)',
            ui:    { component: 'textarea' },
          },
          {
            type:  'string',
            name:  'website',
            label: 'Website URL',
          },
          {
            type:  'string',
            name:  'mapsUrl',
            label: 'Google Maps URL',
          },
          {
            type:  'image',
            name:  'image',
            label: 'Image',
          },
          {
            type:  'boolean',
            name:  'pick',
            label: "Editor's pick",
          },
          {
            type:    'string',
            name:    'moods',
            label:   'Moods',
            list:    true,
            options: MOODS,
          },
          {
            type:  'string',
            name:  'dishes',
            label: 'Top dishes',
            list:  true,
          },
          {
            type:    'string',
            name:    'openDays',
            label:   'Open days',
            list:    true,
            options: DAYS,
          },
          {
            type:   'rich-text',
            name:   'body',
            label:  'Full description',
            isBody: true,
          },
        ],
      },
    ],
  },
});
