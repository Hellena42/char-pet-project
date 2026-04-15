export interface WeatherRes {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  main: {
    temp: number,
  },
  name: string
}

export interface WeatherState {
  data: WeatherRes;
  default: boolean;
}