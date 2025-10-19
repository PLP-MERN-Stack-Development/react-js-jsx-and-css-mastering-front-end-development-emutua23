import PropTypes from 'prop-types';
import { getWeatherIcon, convertTemperature, capitalizeWords } from '../utils/helpers';

/**
 * Weather Card Component - Displays weather information
 */
const WeatherCard = ({ weather, unit = 'C', onRemove }) => {
  if (!weather) return null;

  const { name, main, weather: weatherData, wind, sys } = weather;
  const temp = convertTemperature(main.temp, unit);
  const feelsLike = convertTemperature(main.feels_like, unit);

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden transform hover:scale-105 transition-all duration-300">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg className="w-32 h-32" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>

      {/* Remove Button */}
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
          aria-label="Remove"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* City Name and Country */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-1">
          {name}, {sys.country}
        </h3>
        <p className="text-blue-100 text-sm mb-4">
          {capitalizeWords(weatherData[0].description)}
        </p>
      </div>

      {/* Temperature and Icon */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <div className="text-5xl font-bold mb-2">
            {temp}°{unit}
          </div>
          <p className="text-blue-100">
            Feels like {feelsLike}°{unit}
          </p>
        </div>
        <img
          src={getWeatherIcon(weatherData[0].icon)}
          alt={weatherData[0].description}
          className="w-24 h-24"
        />
      </div>

      {/* Additional Info */}
      <div className="relative z-10 mt-6 pt-4 border-t border-blue-300 border-opacity-30 grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-blue-100">Humidity</p>
          <p className="font-semibold">{main.humidity}%</p>
        </div>
        <div>
          <p className="text-blue-100">Wind</p>
          <p className="font-semibold">{wind.speed} m/s</p>
        </div>
        <div>
          <p className="text-blue-100">Pressure</p>
          <p className="font-semibold">{main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.object.isRequired,
  unit: PropTypes.oneOf(['C', 'F']),
  onRemove: PropTypes.func,
};

export default WeatherCard;
