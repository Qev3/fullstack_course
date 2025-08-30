import { useEffect, useState } from "react";


type WeatherData = {
    temp: number;
};

export function useWeather(location?: string) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!location) return;

        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=50.08&longitude=14.44&current_weather=true`
                );
                if (!res.ok) throw new Error("Failed to fetch weather");
                const json = await res.json();
                setWeather({ temp: json.current_weather.temperature as number });
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error");
                }
            }
        };

        fetchWeather();
    }, [location]);


    return { weather, error };
}
