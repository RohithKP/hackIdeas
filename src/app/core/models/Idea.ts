export interface Idea {
  id: number;
  userId: number;
  username: string;
  title: string;
  description: string;
  likeCount: number;
  createdOn:string;
  isFavorite?: boolean;
  tags: Array<string>
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  favorites: Array<number>;
}
