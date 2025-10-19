import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentWeather } from '../api/weatherApi';
import { useWeather } from '../context/WeatherContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Loading from '../components/Loading';
import WeatherCard from '../components/WeatherCard';

/**
 * Home Page Component
 */
const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { addToRecentSearches, recentSearches, unit } = useWeather();
  const navigate = useNavigate();

  /**
   * Handle search form submission
   */
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const data = await getCurrentWeather(city);
      setWeather(data);
      addToRecentSearches(city);
      setCity('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle recent search click
   */
  const handleRecentClick = async (searchCity) => {
    setCity(searchCity);
    try {
      setLoading(true);
      setError('');
      const data = await getCurrentWeather(searchCity);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🌤️ Weather Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get real-time weather information for any city in the world.
            Search, save favorites, and track weather conditions easily.
          </p>
        </div>

        {/* Search Section */}
        <Card className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter city name (e.g., London, New York, Tokyo)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={error}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Searching...' : 'Search Weather'}
            </Button>
          </form>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm font-medium text-gray-700 mb-3">Recent Searches:</p>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentClick(search)}
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-sm transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Loading State */}
        {loading && <Loading message="Fetching weather data..." />}

        {/* Weather Result */}
        {weather && !loading && (
          <div className="max-w-2xl mx-auto animate-slide-up">
            <WeatherCard weather={weather} unit={unit} />
            <div className="mt-6 flex justify-center gap-4">
              <Button onClick={() => navigate('/dashboard')}>
                View Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate('/favorites')}>
                View Favorites
              </Button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Real-time Search</h3>
            <p className="text-gray-600">
              Search for weather conditions in any city worldwide
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2">Save Favorites</h3>
            <p className="text-gray-600">
              Keep track of your favorite cities and their weather
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">5-Day Forecast</h3>
            <p className="text-gray-600">
              View detailed weather forecasts for the next 5 days
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
