import axios from 'axios';

// Get API configuration from environment variables
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

/**
 * Weather API Service
 * Handles all API calls to OpenWeatherMap API
 */

/**
 * Get current weather for a city
 * @param {string} city - City name
 * @returns {Promise} Weather data
 */
export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Use Celsius
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
  }
};

/**
 * Get 5-day weather forecast
 * @param {string} city - City name
 * @returns {Promise} Forecast data
 */
export const getWeatherForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch forecast data');
  }
};

/**
 * Get weather by coordinates
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise} Weather data
 */
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather by location');
  }
};

/**
 * Search cities by name (autocomplete)
 * @param {string} query - Search query
 * @returns {Promise} List of cities
 */
export const searchCities = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/find`, {
      params: {
        q: query,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data.list;
  } catch (error) {
    throw new Error('Failed to search cities');
  }
};
