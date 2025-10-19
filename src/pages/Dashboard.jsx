import { useState, useEffect } from 'react';
import { getCurrentWeather, getWeatherForecast } from '../api/weatherApi';
import { useWeather } from '../context/WeatherContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Loading from '../components/Loading';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';

/**
 * Dashboard Page Component
 */
const Dashboard = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { unit, toggleUnit, addToFavorites, isFavorite } = useWeather();

  /**
   * Load initial data
   */
  useEffect(() => {
    // Load London weather by default
    loadWeatherData('London');
  }, []);

  /**
   * Load weather and forecast data
   */
  const loadWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError('');
      
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(cityName),
        getWeatherForecast(cityName),
      ]);

      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle search
   */
  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    loadWeatherData(city);
  };

  /**
   * Handle add to favorites
   */
  const handleAddToFavorites = () => {
    if (currentWeather) {
      addToFavorites(currentWeather);
    }
  };

  /**
   * Filter forecast to show only one entry per day (midday)
   */
  const getDailyForecast = () => {
    if (!forecast) return [];
    
    // Get one forecast per day at 12:00
    const daily = forecast.list.filter(item => {
      const date = new Date(item.dt * 1000);
      return date.getHours() === 12;
    });

    return daily.slice(0, 5); // Show 5 days
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Weather Dashboard</h1>
            <p className="text-gray-600 mt-1">View current weather and 5-day forecast</p>
          </div>
          <Button
            variant="outline"
            onClick={toggleUnit}
            className="flex items-center gap-2"
          >
            <span>°{unit}</span>
            <span>→</span>
            <span>°{unit === 'C' ? 'F' : 'C'}</span>
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input
              type="text"
              placeholder="Search for a city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={error}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              Search
            </Button>
          </form>
        </Card>

        {/* Loading State */}
        {loading && <Loading size="lg" message="Loading weather data..." />}

        {/* Current Weather */}
        {currentWeather && !loading && (
          <div className="mb-8 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Current Weather</h2>
              {!isFavorite(currentWeather.id) && (
                <Button
                  variant="outline"
                  onClick={handleAddToFavorites}
                  className="flex items-center gap-2"
                >
                  <span>⭐</span>
                  Add to Favorites
                </Button>
              )}
            </div>
            <WeatherCard weather={currentWeather} unit={unit} />
          </div>
        )}

        {/* 5-Day Forecast */}
        {forecast && !loading && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5-Day Forecast</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {getDailyForecast().map((item, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ForecastCard forecast={item} unit={unit} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!currentWeather && !loading && (
          <Card className="text-center py-12">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Weather Data
            </h3>
            <p className="text-gray-500">
              Search for a city to view weather information
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
