
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Thermometer,
  MapPin,
  Droplets
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function WeatherWidget() {
  const [weather, setWeather] = useState({
    temperature: 24,
    condition: "sunny",
    humidity: 65,
    city: "San Francisco",
    windSpeed: 12,
    visibility: 10
  });

  useEffect(() => {
    // Simulate weather data - in a real app, you'd fetch from a weather API
    const conditions = ["sunny", "cloudy", "rainy"];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = Math.floor(Math.random() * 15) + 18;
    
    setWeather({
      temperature: randomTemp,
      condition: randomCondition,
      humidity: Math.floor(Math.random() * 30) + 50,
      city: "San Francisco",
      windSpeed: Math.floor(Math.random() * 20) + 5,
      visibility: Math.floor(Math.random() * 5) + 8
    });
  }, []);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "sunny":
        return <Sun className="w-4 h-4 text-yellow-500" />;
      case "cloudy":
        return <Cloud className="w-4 h-4 text-slate-500" />;
      case "rainy":
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      default:
        return <Sun className="w-4 h-4 text-yellow-500" />;
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-auto p-2 bg-gradient-to-br from-travel-blue-500 to-travel-blue-600 text-white hover:from-travel-blue-600 hover:to-travel-blue-700">
          <div className="flex items-center gap-2">
            {getWeatherIcon()}
            <span className="font-semibold">{weather.temperature}°C</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {weather.city} Weather
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              {getWeatherIcon()}
              <span className="text-3xl font-bold">{weather.temperature}°C</span>
            </div>
            <p className="text-slate-600 capitalize">{weather.condition}</p>
            <p className="text-sm text-travel-blue-600 font-medium">{getConditionText()}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Droplets className="w-4 h-4 mx-auto mb-1 text-blue-500" />
              <div className="text-sm font-medium">{weather.humidity}%</div>
              <div className="text-xs text-slate-500">Humidity</div>
            </div>
            <div>
              <Thermometer className="w-4 h-4 mx-auto mb-1 text-orange-500" />
              <div className="text-sm font-medium">{weather.windSpeed} km/h</div>
              <div className="text-xs text-slate-500">Wind</div>
            </div>
            <div>
              <Sun className="w-4 h-4 mx-auto mb-1 text-yellow-500" />
              <div className="text-sm font-medium">{weather.visibility} km</div>
              <div className="text-xs text-slate-500">Visibility</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
