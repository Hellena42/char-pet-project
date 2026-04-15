import { DataNodeCard, type DataNodeCardProps } from "@/shared/components/ui"
import { useWeather } from "../model/useWather";
import { useEffect, useMemo } from "react";
import type { WeatherRes, WeatherState } from "../model/types";
import { getWeatherIcon } from "../model/consts";
import { useMoodStore } from "@/widgets/MoodIndicator/model/useMoodStore";
import { getWeatherBoost } from "../model/weather.data";
import { MapPin } from "lucide-react";
import styles from './WeatherMood.module.scss';

export const WeatherNode = () => {
  const weatherResp: WeatherState | null = useWeather();
  const weatherData = weatherResp?.data;

  const updateMood = useMoodStore(s => s.updateFactor);

  const getTemp = (data?: WeatherRes) => typeof data?.main?.temp === 'number' ? `${data.main.temp}°C` : 'n/a °C';
  const getIcon = (data?: WeatherRes) => {
    const iconCode = data?.weather[0]?.icon || '';
    return getWeatherIcon(iconCode);
  }
  const getCityName = (data?: WeatherRes) => data?.name || 'n/a';

  const rightSlot = (
    <div className={styles.placePinBox} title={getCityName(weatherData)}>
      <MapPin color="#ef4040" />
    </div>
  );

  const weatherDataNode: DataNodeCardProps = useMemo(() => (
    {
    icon: getIcon(weatherData),
    title: '',
    value: getTemp(weatherData),
    note: {
      show: false,
      flag: '',
      value: ''
    },
    valueClassName: 'dataNodeValue--lg',
    isClickable: false,
    rightSlot: weatherData ? rightSlot : undefined
  }), [weatherResp]);

  useEffect(() => {
    if (weatherData) {
      const weatherBoost = getWeatherBoost(weatherData);
      updateMood('weather', weatherBoost);
    }
  }, [updateMood, weatherData]);

  return (
    <DataNodeCard {...weatherDataNode}></DataNodeCard>
  )
}