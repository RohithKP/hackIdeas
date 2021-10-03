export interface Idea {
  id: String;
  userId: String;
  username: String;
  title: String;
  description: String;
  likeCount: Number;
  createdDate: String;
}

export interface User {
  id: Number;
  name: String;
  username: String;
  email: String;
  favorites: Array<Number>;
}
