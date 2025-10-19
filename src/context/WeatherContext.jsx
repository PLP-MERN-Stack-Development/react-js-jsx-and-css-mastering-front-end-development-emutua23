import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Weather Context - Global state management for weather app
 */
const WeatherContext = createContext();

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within WeatherProvider');
  }
  return context;
};

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage('weatherFavorites', []);
  const [unit, setUnit] = useLocalStorage('temperatureUnit', 'C');
  const [recentSearches, setRecentSearches] = useLocalStorage('recentSearches', []);

  /**
   * Add city to favorites
   */
  const addToFavorites = (city) => {
    if (!favorites.find((fav) => fav.id === city.id)) {
      setFavorites([...favorites, city]);
    }
  };

  /**
   * Remove city from favorites
   */
  const removeFromFavorites = (cityId) => {
    setFavorites(favorites.filter((fav) => fav.id !== cityId));
  };

  /**
   * Check if city is in favorites
   */
  const isFavorite = (cityId) => {
    return favorites.some((fav) => fav.id === cityId);
  };

  /**
   * Toggle temperature unit
   */
  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  /**
   * Add to recent searches
   */
  const addToRecentSearches = (city) => {
    const filtered = recentSearches.filter((search) => search !== city);
    const updated = [city, ...filtered].slice(0, 5); // Keep last 5 searches
    setRecentSearches(updated);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    unit,
    toggleUnit,
    recentSearches,
    addToRecentSearches,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
