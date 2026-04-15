import { WidgetIcons } from "@/assets/images"

export const WEATHER_ICONS: {[key: string]: string} = {
  '01d': 'clearSun',
  '01n': 'clearMoon',

  // Clouds
  '02d': 'cloudy', // Partly cloudy (day)
  '02n': 'cloudy', // Partly cloudy (night)
  '03d': 'cloudy', // Scattered clouds
  '03n': 'cloudy',
  '04d': 'overcast', // Cloudy (broken/solid clouds)
  '04n': 'overcast',

  // Rain
  '09d': 'shower',
  '09n': 'shower',
  '10d': 'rain',
  '10n': 'rain',

  // Thunderstorm
  '11d': 'thunderstorm',
  '11n': 'thunderstorm',

  // Snow
  '13d': 'snow',
  '13n': 'snow',

  // Mist/Fog
  '50d': 'overcast',
  '50n': 'overcast',
}

export const getWeatherIconName = (iconCode: string) => {
  return WEATHER_ICONS[iconCode] || 'defaultWeather';
}

export const getWeatherIcon = (iconCode: string) => {
  const iconName = getWeatherIconName(iconCode);
  return WidgetIcons.weather[iconName as keyof typeof WidgetIcons.weather];
}