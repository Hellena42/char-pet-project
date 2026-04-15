import { WEATHER_OPTIONS } from "./weather.data";
import { create } from "zustand";

export interface WeatherStore {
  selectedWeatherId: string | null;
  selectWeather: (id: string) => void;
}

export const getInitialWeatherId = () => {
  return WEATHER_OPTIONS[0].id;
}

export const useWeatherMood = create<WeatherStore>((set) => ({
  selectedWeatherId: getInitialWeatherId(),
  selectWeather: (id) => {
    set({selectedWeatherId: id})
  }
}));