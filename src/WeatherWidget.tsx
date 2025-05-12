import React, { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
  weathercode: number;
  windspeed: number;
  time: string;
};

const weatherIcons: Record<number, { icon: string; label: string }> = {
  0: { icon: "☀️", label: "Clear sky" },
  1: { icon: "🌤️", label: "Mainly clear" },
  2: { icon: "⛅", label: "Partly cloudy" },
  3: { icon: "☁️", label: "Overcast" },
  45: { icon: "🌫️", label: "Fog" },
  48: { icon: "🌫️", label: "Depositing rime fog" },
  51: { icon: "🌦️", label: "Light drizzle" },
  53: { icon: "🌦️", label: "Moderate drizzle" },
  55: { icon: "🌦️", label: "Dense drizzle" },
  61: { icon: "🌧️", label: "Slight rain" },
  63: { icon: "🌧️", label: "Moderate rain" },
  65: { icon: "🌧️", label: "Heavy rain" },
  71: { icon: "🌨️", label: "Slight snow" },
  73: { icon: "🌨️", label: "Moderate snow" },
  75: { icon: "🌨️", label: "Heavy snow" },
  80: { icon: "🌦️", label: "Slight rain showers" },
  81: { icon: "🌦️", label: "Moderate rain showers" },
  82: { icon: "🌦️", label: "Violent rain showers" },
};

function formatTime(iso: string) {
  const utcDate = new Date(iso + "Z");
  return utcDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const DEFAULT_CITY = {
  name: "New York",
  latitude: 40.7128,
  longitude: -74.0060,
};

function cToF(c: number) {
  return (c * 9) / 5 + 32;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<string>(DEFAULT_CITY.name);
  const [isF, setIsF] = useState(false);

  // Helper to fetch weather and city name
  const fetchWeatherAndCity = (latitude: number, longitude: number) => {
    // Reverse geocode for city name (optional)
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocation(
          data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.state ||
            DEFAULT_CITY.name
        );
      })
      .catch(() => setLocation(DEFAULT_CITY.name));

    // Fetch weather
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          temperature: data.current_weather.temperature,
          weathercode: data.current_weather.weathercode,
          windspeed: data.current_weather.windspeed,
          time: data.current_weather.time,
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      // Fallback: Use default city
      fetchWeatherAndCity(DEFAULT_CITY.latitude, DEFAULT_CITY.longitude);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchWeatherAndCity(latitude, longitude);
      },
      () => {
        // If denied, fallback to default city
        fetchWeatherAndCity(DEFAULT_CITY.latitude, DEFAULT_CITY.longitude);
      }
    );
  }, []);

  const icon = weather ? weatherIcons[weather.weathercode]?.icon || "🌡️" : "🌡️";
  const label = weather ? weatherIcons[weather.weathercode]?.label || "Weather" : "Weather";
  const temp = weather
    ? isF
      ? `${Math.round(cToF(weather.temperature))}°F`
      : `${weather.temperature}°C`
    : "N/A";

  return (
    <div
      style={{
        minWidth: 160,
        maxWidth: 220,
        background: "linear-gradient(135deg, #e0e7ff 60%, #b4c0e0 100%)",
        borderRadius: 18,
        boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
        padding: "1.5rem 1.2rem",
        margin: "2rem 1.5rem 2rem 0",
        color: "#232526",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "inherit",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ fontSize: "2.8rem", marginBottom: 4 }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: "1.35rem", display: "flex", alignItems: "center" }}>
        {loading ? "Loading..." : temp}
        {weather && (
          <button
            onClick={() => setIsF((v) => !v)}
            style={{
              marginLeft: 8,
              background: "#e0e7ff",
              border: "none",
              borderRadius: 8,
              padding: "2px 7px",
              fontSize: "0.95rem",
              color: "#4361ee",
              cursor: "pointer",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            aria-label="Toggle Celsius/Fahrenheit"
            title="Toggle Celsius/Fahrenheit"
          >
            {isF ? "°C" : "°F"}
          </button>
        )}
      </div>
      <div style={{ fontSize: "1.05rem", color: "#5f6c7b", margin: "2px 0 8px 0" }}>
        {label}
      </div>
      {weather && (
        <div style={{ fontSize: "0.98rem", color: "#4361ee", marginBottom: 2 }}>
          💨 {weather.windspeed} km/h
        </div>
      )}
      {weather && (
        <div style={{ fontSize: "0.92rem", color: "#5f6c7b", marginBottom: 2 }}>
          {formatTime(weather.time)}
        </div>
      )}
      <div style={{ fontSize: "1.02rem", color: "#232526", fontWeight: 500, marginTop: 6 }}>
        {location}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          right: 12,
          fontSize: "0.7rem",
          color: "#bfc9d1",
        }}
      >
        Powered by Open-Meteo
      </div>
    </div>
  );
}