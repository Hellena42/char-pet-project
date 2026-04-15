import { Heat } from "./Heat";
import { Moon } from "./Moon";
import { Rain } from "./Rain";
import { Snow } from "./Snow";

type WeatherType = keyof typeof effects;

interface WeatherSceneProps {
  type: WeatherType;
}

const effects = {
  rain: <Rain />,
  shower: <Rain isHeavy />,
  thunderstorm: <Rain withLightning />,
  heat: <Heat />,
  snow: <Snow />,
  clearMoon: <Moon />,
};

export const WeatherScene = ({type}: WeatherSceneProps) => {
  return effects[type] || null;
}