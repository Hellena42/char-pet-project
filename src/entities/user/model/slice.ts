import { create } from "zustand";
import type { User, UserStore } from "./types";
import { storage } from "@/shared/lib";

export const useUserStore = create<UserStore>((set, get) => ({
  _inited: false,
  authData: undefined,

  isAuth: () => !!get().token,
  setAuthData: (user: User, token: string) => {
    set({ authData: user, token: token });
    storage.setAuth(user, token);
  },
  // updateUser: (updatedUser: User) => {
  //   set(state => ({
  //     authData: {...state, ...updatedUser}
  //   }));
  //   storage.set('user', updatedUser);
  // },
  initAuthData: () => {
    const userData = storage.get<User>('user');
    const token = storage.get<string>('token');

    if (userData && token) {
      set({ authData: userData, token: token });
    }

    set({ _inited: true });
  },
  logout: () => {
    set({ authData: undefined });
    storage.remove('all');
  }
}));

useUserStore.getState().initAuthData();