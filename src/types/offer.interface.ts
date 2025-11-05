import { City } from './city.type.js';
import { User } from './user.interface.js';

export interface Offer {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    isFavorite?: boolean;
    isPremium?: boolean;
    rating: number;
    preview: string;
    description: string;
    bedrooms: number;
    maxAdults: number;
    goods: string[];
    author: User;
    images: string[];
}
