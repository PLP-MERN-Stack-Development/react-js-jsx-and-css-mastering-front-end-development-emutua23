import PropTypes from 'prop-types';
import { formatDate, formatTime, getWeatherIcon, convertTemperature } from '../utils/helpers';

/**
 * Forecast Card Component - Displays forecast data
 */
const ForecastCard = ({ forecast, unit = 'C' }) => {
  const temp = convertTemperature(forecast.main.temp, unit);
  const tempMin = convertTemperature(forecast.main.temp_min, unit);
  const tempMax = convertTemperature(forecast.main.temp_max, unit);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      <div className="text-center">
        {/* Date and Time */}
        <p className="text-sm text-gray-500 mb-1">
          {formatDate(forecast.dt)}
        </p>
        <p className="text-xs text-gray-400 mb-3">
          {formatTime(forecast.dt)}
        </p>

        {/* Weather Icon */}
        <img
          src={getWeatherIcon(forecast.weather[0].icon)}
          alt={forecast.weather[0].description}
          className="w-16 h-16 mx-auto mb-2"
        />

        {/* Weather Description */}
        <p className="text-sm font-medium text-gray-700 mb-3 capitalize">
          {forecast.weather[0].description}
        </p>

        {/* Temperature */}
        <div className="space-y-1">
          <p className="text-2xl font-bold text-gray-800">
            {temp}°{unit}
          </p>
          <div className="flex justify-center gap-2 text-xs text-gray-500">
            <span>↑ {tempMax}°</span>
            <span>↓ {tempMin}°</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-3 border-t grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-gray-400">Humidity</p>
            <p className="font-semibold">{forecast.main.humidity}%</p>
          </div>
          <div>
            <p className="text-gray-400">Wind</p>
            <p className="font-semibold">{forecast.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ForecastCard.propTypes = {
  forecast: PropTypes.object.isRequired,
  unit: PropTypes.oneOf(['C', 'F']),
};

export default ForecastCard;
