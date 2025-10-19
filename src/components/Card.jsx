import PropTypes from 'prop-types';

/**
 * Reusable Card Component
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 */
const Card = ({ title, children, className = '', onClick }) => {
  const baseStyles = "bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl animate-fade-in";
  const clickableStyles = onClick ? "cursor-pointer hover:scale-105" : "";
  
  return (
    <div 
      className={`${baseStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {title && (
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
