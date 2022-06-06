import ocean from './products/ocean.jpg';
import fall2 from './products/fall2.jpg';
import mist from './products/mist.jpg';
import nature from './products/nature.jpg';
import paris from './products/paris.jpg';
import rocks from './products/rocks.jpg';
import underwater from './products/underwater.jpg';
import wedding from './products/wedding.jpg';

const images = [
  {
    thumbnail: ocean,
    src: ocean,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: 'After Rain (Jeshu John - designerspics.com)',
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
  },
  {
    thumbnail: fall2,
    src: fall2,
  },
  {
    thumbnail: mist,
    src: mist,
  },
  {
    thumbnail: nature,
    src: nature,
  },
  {
    thumbnail: paris,
    src: paris,
  },
  {
    thumbnail: rocks,
    src: rocks,
  },
  {
    thumbnail: underwater,
    src: underwater,
  },
  {
    thumbnail: wedding,
    src: wedding,
  },
];

export default images;
