export type User = {
  avatar: string;
  email: string;
  fullName: string;
  id: string;
};

export type Users = User[];

export type UsersData = {
  users: Users;
};
