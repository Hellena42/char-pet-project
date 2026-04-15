import { BASE_URL, WEATHER_API_KEY } from "@/shared/config/apiConfig";
import axios from "axios";

const DEFAULT_COORDS = {
  lat: 50.4501,
  lon: 30.5234
};

export const fetchWeather = async (lat: number, lon: number) => {
  // const { data } = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat: lat ?? DEFAULT_COORDS.lat,
      lon: lon ?? DEFAULT_COORDS.lon,
      appid: WEATHER_API_KEY,
      units: 'metric'
    }
  });
  return data;
}