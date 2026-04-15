import { Select } from "@/shared/components/ui/Select/Select"
import { WEATHER_OPTIONS } from "../model/weather.data";
import { useWeatherMood } from "../model/useWeatherMood";
import { useMoodStore } from "@/widgets/MoodIndicator/model/useMoodStore";
import type { MoodTrigger } from "@/widgets/MoodIndicator/model/types";
import { useSelectionPreviewStore } from "@/widgets/SelectionPreview/model/useSelectionPreviewStore";

export const WeatherMoodSelect = () => {
  const selectedWeatherId = useWeatherMood(s => s.selectedWeatherId);
  const selectWeather = useWeatherMood(s => s.selectWeather);
  const selectedOption = WEATHER_OPTIONS.find(m => m.id === selectedWeatherId);

  const updateMood = useMoodStore(s => s.applyFoodEffect);

  const setWeatherPreview = useSelectionPreviewStore(s => s.setSelectedItem);

  const setLabel = (weather: any) => {
    const sign = weather.moodBoost > 0 ? '+' : '';
    return `${weather.label} (${sign}${weather.moodBoost})`;
  }

  const options = WEATHER_OPTIONS.map(weather => ({
    ...weather,
    label: setLabel(weather),
    isActive: weather.id === selectedWeatherId
  }));

  const onSelect = (weather: any) => {
    const selectedWeather = weather.id !== 'defaultWeather' ? weather : null;
    const trigger: MoodTrigger = weather?.charIcon ? 'weather' : null;

    selectWeather(weather.id);
    setWeatherPreview(weather, 'weather');
    updateMood('weather', weather.moodBoost, selectedWeather, trigger)
  }

  return (
    <Select
      title = 'Weatherplay'
      value = {selectedOption || null}
      icon={selectedOption || ''}
      options={options}
      onSelect={(weather) => onSelect(weather)}
    />
  )
}