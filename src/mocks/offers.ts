import { Offer } from '../types/offer.interface.js';

export const offers: Offer[] = [
  {
    id: 'b34640ce-30a3-4811-9cbb-a1a95bcdaa46',
    title: 'Apartment at Amsterdam',
    type: 'Apartment',
    price: 330,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168
      }
    },
    isFavorite: true,
    isPremium: true,
    rating: 90,
    preview: 'img/amsterdam@2x.jpg',
    description: 'Good neighbors here!',
  },
  {
    id: '17ea709a-ec05-4ac8-9dfe-026360c021db',
    title: 'Luxury Downtown Loft',
    type: 'Apartment',
    price: 210,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499
      }
    },
    isFavorite: false,
    isPremium: false,
    rating: 60,
    preview: 'img/apartment-02.jpg',
    description: 'Stylish industrial loft in city center, panoramic views, fully equipped.',
  },
  {
    id: '7901d551-154e-411b-ab82-068b27e4c11a',
    title: 'Small room',
    type: 'Room',
    price: 90,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314
      }
    },
    isFavorite: true,
    isPremium: false,
    rating: 80,
    preview: 'img/room-small.jpg',
    description: 'Bright ground-floor unit, private patio, quiet neighborhood, near metro.',
  },
  {
    id: 'c6f97764-f401-491d-acf7-19b8b60b0b77',
    title: 'Minimalist Designer Home',
    type: 'Apartment',
    price: 250,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974
      }
    },
    isFavorite: true,
    isPremium: true,
    rating: 90,
    preview: 'img/apartment-01.jpg',
    description: 'Clean Scandinavian design, smart home features, peaceful and functional.',
  },
];
