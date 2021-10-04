export interface Idea {
  id: Number;
  userId: String;
  username: String;
  title: String;
  description: String;
  likeCount: Number;
  createdDate: String;
  isFavorite?: Boolean;
}

export interface User {
  id: Number;
  name: String;
  username: String;
  email: String;
  favorites: Array<Number>;
}
