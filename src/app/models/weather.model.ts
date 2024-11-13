export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_mph: number;
  };
}
