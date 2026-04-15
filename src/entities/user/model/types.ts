export interface User {
  id: string;
  email: string;
  token: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
  token?: string;
  _inited: boolean;
}

export interface UserStore extends UserSchema {
  isAuth: () => boolean;
  setAuthData: (user: User, token: string) => void;
  // updateUser: (updatedUser: User) => void,
  initAuthData: () => void;
  logout: () => void;
}