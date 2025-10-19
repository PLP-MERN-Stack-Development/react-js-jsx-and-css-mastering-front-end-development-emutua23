/**
 * Utility Functions
 * Helper functions for the application
 */

/**
 * Format timestamp to readable date
 * @param {number} timestamp - Unix timestamp
 * @returns {string} Formatted date
 */
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Format timestamp to time
 * @param {number} timestamp - Unix timestamp
 * @returns {string} Formatted time
 */
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Get weather icon URL
 * @param {string} iconCode - Weather icon code from API
 * @returns {string} Icon URL
 */
export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

/**
 * Convert temperature
 * @param {number} temp - Temperature in Celsius
 * @param {string} unit - Target unit (C or F)
 * @returns {number} Converted temperature
 */
export const convertTemperature = (temp, unit = 'C') => {
  if (unit === 'F') {
    return Math.round((temp * 9/5) + 32);
  }
  return Math.round(temp);
};

/**
 * Get weather description color
 * @param {string} main - Weather main condition
 * @returns {string} Tailwind color class
 */
export const getWeatherColor = (main) => {
  const colors = {
    Clear: 'from-yellow-400 to-orange-500',
    Clouds: 'from-gray-400 to-gray-600',
    Rain: 'from-blue-400 to-blue-700',
    Drizzle: 'from-blue-300 to-blue-500',
    Thunderstorm: 'from-purple-600 to-purple-900',
    Snow: 'from-blue-100 to-blue-300',
    Mist: 'from-gray-300 to-gray-500',
    Fog: 'from-gray-300 to-gray-500',
  };
  return colors[main] || 'from-blue-400 to-blue-600';
};

/**
 * Capitalize first letter of each word
 * @param {string} str - Input string
 * @returns {string} Capitalized string
 */
export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Get day name from index
 * @param {number} index - Day index (0-6)
 * @returns {string} Day name
 */
export const getDayName = (index) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[index];
};

/**
 * Check if API key is configured
 * @returns {boolean} True if API key exists
 */
export const isApiKeyConfigured = () => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  return apiKey && apiKey !== 'demo_key_please_replace';
};
