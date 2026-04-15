import { WidgetIcons } from "@/assets/images";
import type { WeatherRes } from "./types";
import { getWeatherIconName } from "./consts";
import type { SelectMoodWeather } from "@/shared/components/ui/Select/types";

const weatherIcons = WidgetIcons.weather;
const charIcons = WidgetIcons.character;

const TEMP_LIMITS = { HOT: 35, FREEZE: -25 } as const;

export const WEATHER_OPTIONS: SelectMoodWeather[] = [
  {
    id: 'defaultWeather',
    label: 'Unknown',
    icon: weatherIcons['defaultWeather'],
    moodBoost: 0,
    isActive: false
  },
  {
    id: 'hot',
    label: `${TEMP_LIMITS.HOT}`,
    icon: weatherIcons['clearSun'],
    moodBoost: 2,
    isActive: false,
    charIcon: charIcons['char-very-hot'],
    animationType: 'heat'
  },
  {
    id: 'freeze',
    label: `${TEMP_LIMITS.FREEZE}`,
    icon: weatherIcons['snow'],
    moodBoost: 2,
    isActive: false,
    charIcon: charIcons['char-frozen2'],
    animationType: 'snow'
  },
  {
    id: 'clearSun',
    label: 'Clear sun',
    icon: weatherIcons['clearSun'],
    moodBoost: -1,
    isActive: false,
  },
  {
    id: 'clearMoon',
    label: 'Clear moon',
    icon: weatherIcons['clearMoon'],
    moodBoost: -0.1,
    isActive: false,
    charIcon: charIcons['char-moon'],
    animationType: 'clearMoon'
  },
  {
    id: 'cloudy',
    label: 'Cloudy',
    icon: weatherIcons['cloudy'],
    moodBoost: -0.1,
    isActive: false,
  },
  {
    id: 'overcast',
    label: 'Overcast',
    icon: weatherIcons['overcast'],
    moodBoost: 0.5,
    isActive: false,
  },
  {
    id: 'rain',
    label: 'Rain',
    icon: weatherIcons['rain'],
    moodBoost: 1,
    isActive: false,
    charIcon: charIcons['char-rainy-mood'],
    animationType: 'rain'
  },
  {
    id: 'shower',
    label: 'Shower',
    icon: weatherIcons['shower'],
    moodBoost: 1,
    isActive: false,
    charIcon: charIcons['char-rainy-mood'],
    animationType: 'shower'
  },
  {
    id: 'snow',
    label: 'Snow',
    icon: weatherIcons['snow'],
    moodBoost: -0.5,
    isActive: false,
    animationType: 'snow'
  },
  {
    id: 'thunderstorm',
    label: 'Thunderstorm',
    icon: weatherIcons['thunderstorm'],
    moodBoost: 2,
    isActive: false,
    charIcon: charIcons['char-thunderstorm'],
    animationType: 'thunderstorm'
  }
];

export const findWeatherByKey = (key: string) => {
  return WEATHER_OPTIONS.find(o => o.id === key);
}

export const getWeatherBoost = (weatherData?: WeatherRes) => {
  if (!weatherData) return 0;

  const temp = weatherData.main?.temp ?? 0;
  const iconCode = weatherData.weather?.[0]?.icon;
  let targetId = 'defaultWeather';
  let extremeKey: string | null = null;

  if (temp >= TEMP_LIMITS.HOT) extremeKey = 'hot';
  if (temp <= TEMP_LIMITS.FREEZE) extremeKey = 'freeze';

  if (!extremeKey && iconCode) {
    targetId = getWeatherIconName(iconCode);
  }

  const key = extremeKey || targetId;
  const weather = findWeatherByKey(key);

  return weather ? weather.moodBoost : 0;
}