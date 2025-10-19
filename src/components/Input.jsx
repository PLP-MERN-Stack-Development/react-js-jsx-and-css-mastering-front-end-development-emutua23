import PropTypes from 'prop-types';

/**
 * Reusable Input Component
 * @param {Object} props - Component props
 */
const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  icon,
  error,
  label,
  ...rest
}) => {
  const baseStyles = "w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all";
  const errorStyles = error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200";
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseStyles} ${errorStyles} ${icon ? 'pl-10' : ''} ${className}`}
          {...rest}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  error: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
