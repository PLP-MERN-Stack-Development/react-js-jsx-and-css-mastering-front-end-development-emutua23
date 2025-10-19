import { useState, useEffect } from 'react';
import { getCurrentWeather } from '../api/weatherApi';
import { useWeather } from '../context/WeatherContext';
import Card from '../components/Card';
import Loading from '../components/Loading';
import WeatherCard from '../components/WeatherCard';
import Button from '../components/Button';

/**
 * Favorites Page Component
 */
const Favorites = () => {
  const { favorites, removeFromFavorites, unit } = useWeather();
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Load weather data for all favorites
   */
  useEffect(() => {
    const loadFavoritesWeather = async () => {
      if (favorites.length === 0) {
        setWeatherData([]);
        return;
      }

      try {
        setLoading(true);
        const promises = favorites.map(fav => getCurrentWeather(fav.name));
        const results = await Promise.all(promises);
        setWeatherData(results);
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavoritesWeather();
  }, [favorites]);

  /**
   * Handle remove from favorites
   */
  const handleRemove = (cityId) => {
    removeFromFavorites(cityId);
  };

  /**
   * Refresh all weather data
   */
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Favorite Cities</h1>
            <p className="text-gray-600 mt-1">
              {favorites.length} {favorites.length === 1 ? 'city' : 'cities'} saved
            </p>
          </div>
          {favorites.length > 0 && (
            <Button
              variant="outline"
              onClick={handleRefresh}
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </Button>
          )}
        </div>

        {/* Loading State */}
        {loading && <Loading size="lg" message="Loading favorites..." />}

        {/* Favorites Grid */}
        {!loading && weatherData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherData.map((weather, index) => (
              <div key={weather.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <WeatherCard
                  weather={weather}
                  unit={unit}
                  onRemove={() => handleRemove(weather.id)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && favorites.length === 0 && (
          <Card className="text-center py-16">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
              No Favorite Cities Yet
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Start adding cities to your favorites to quickly access their weather information.
              Search for a city and click the "Add to Favorites" button.
            </p>
            <Button onClick={() => window.location.href = '/dashboard'}>
              Go to Dashboard
            </Button>
          </Card>
        )}

        {/* Info Card */}
        {!loading && favorites.length > 0 && (
          <Card className="mt-8 bg-blue-50 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Tip</h4>
                <p className="text-gray-600 text-sm">
                  Your favorite cities are saved in your browser's local storage.
                  Click the X button on any card to remove it from favorites.
                  Weather data is automatically updated when you visit this page.
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Favorites;
