
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Thermometer } from "lucide-react";

export function WeatherWidget() {
  const [weather, setWeather] = useState({
    temperature: 24,
    condition: "sunny",
    humidity: 65,
    city: "San Francisco"
  });

  useEffect(() => {
    // Simulate weather data - in a real app, you'd fetch from a weather API
    const conditions = ["sunny", "cloudy", "rainy"];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = Math.floor(Math.random() * 15) + 18; // 18-32°C
    
    setWeather({
      temperature: randomTemp,
      condition: randomCondition,
      humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
      city: "San Francisco"
    });
  }, []);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "sunny":
        return <Sun className="w-6 h-6 text-yellow-500" />;
      case "cloudy":
        return <Cloud className="w-6 h-6 text-slate-500" />;
      case "rainy":
        return <CloudRain className="w-6 h-6 text-blue-500" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-500" />;
    }
  };

  const getConditionText = () => {
    switch (weather.condition) {
      case "sunny":
        return "Perfect for tours!";
      case "cloudy":
        return "Good touring weather";
      case "rainy":
        return "Indoor activities recommended";
      default:
        return "Great day ahead";
    }
  };

  return (
    <Card className="w-64 bg-gradient-to-br from-travel-blue-500 to-travel-blue-600 text-white border-0">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {getWeatherIcon()}
              <span className="text-2xl font-bold">{weather.temperature}°C</span>
            </div>
            <p className="text-sm opacity-90">{weather.city}</p>
            <p className="text-xs opacity-75">{getConditionText()}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm opacity-90">
              <Thermometer className="w-3 h-3" />
              <span>{weather.humidity}%</span>
            </div>
            <p className="text-xs opacity-75 capitalize">{weather.condition}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
