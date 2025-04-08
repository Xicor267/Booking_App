export interface IRoomList {
  roomId: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  maxAdults: number;
  maxChildren: number;
  isAvailable: boolean;
  imageUrls: string[];
}
