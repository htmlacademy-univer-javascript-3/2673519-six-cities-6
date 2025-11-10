import { User } from './user.interface';

export interface Review {
  id: string;
  offerId: string;
  date: Date;
  author: User;
  rating: number;
  comment: string;
}
