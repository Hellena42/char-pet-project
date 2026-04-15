import type { User } from "@/entities/user";

type DataType = 'isLoggedIn' | 'user' | 'token' | 'settings' | 'lastMeal';
type RemoveKey = Exclude<DataType, 'lastMeal'> | 'all';

const PROJECT_NAME = 'amp-pet';
const getStorageKey = (key: string) => `${PROJECT_NAME}-${key}`;
const IMMUTABLE_KEYS = [getStorageKey('lastMeal')];

export const storage = {
  set: (key: DataType, value: any) => {
    try {
      const storageKey = getStorageKey(key);
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (e) {
      console.error('LocalStorage Set Error:', e);
    }
  },
  get: <T>(key: DataType): T | null => {
    try {
      const storageKey = getStorageKey(key);
      const item = localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.warn('LocalStorage Get Error:', e);
      return null;
    }
  },
  remove: (key: RemoveKey) => {
    if (key === 'all') {
      Object.keys(localStorage).forEach((storageKey) => {
        if (storageKey.startsWith(PROJECT_NAME) && !IMMUTABLE_KEYS.includes(storageKey)) {
          localStorage.removeItem(storageKey);
        }
      });
    } else {
      localStorage.removeItem(getStorageKey(key));
    }
  },
  setAuth: (user: User, token: string) => {
    storage.set('user', user);
    storage.set('token', token);
  }
};