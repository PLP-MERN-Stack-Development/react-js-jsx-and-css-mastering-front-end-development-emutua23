import PropTypes from 'prop-types';

/**
 * Loading Spinner Component
 * @param {Object} props - Component props
 * @param {string} props.size - Spinner size (sm, md, lg)
 * @param {string} props.message - Loading message
 */
const Loading = ({ size = 'md', message = 'Loading...' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizes[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}></div>
      {message && (
        <p className="mt-4 text-gray-600 font-medium animate-pulse">{message}</p>
      )}
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  message: PropTypes.string,
};

export default Loading;
