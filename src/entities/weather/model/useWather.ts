import { fetchWeather } from "@/shared/api/weather/weatherApi";
import { useEffect, useState } from "react";
import type { WeatherRes, WeatherState } from "./types";

export const useWeather = () => {
  const [data, setData] = useState<WeatherState | null>(null);

  useEffect(() => {
    const FETCH_INTERVAL = 30 * 60 * 1000;

    const updateWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const resp = await fetchWeather(latitude, longitude);
            const weatherData: WeatherRes = {
              coord: resp.coord,
              weather: resp.weather,
              main: {temp: Math.round(resp.main?.temp)},
              name: resp.name
            };
  
            setData({
              data: weatherData,
              default: !latitude && !longitude
            });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    };

    updateWeather();

    const intervalId = setInterval(updateWeather, FETCH_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  return data;
}