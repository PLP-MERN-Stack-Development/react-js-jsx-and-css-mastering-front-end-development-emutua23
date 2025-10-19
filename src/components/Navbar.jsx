import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation Bar Component
 */
const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/favorites', label: 'Favorites', icon: '⭐' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">🌤️</span>
            <span className="text-white text-xl font-bold">WeatherApp</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-blue-700">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-4 py-3 text-white hover:bg-blue-800 ${
              isActive(link.path) ? 'bg-blue-800 border-l-4 border-white' : ''
            }`}
          >
            <span className="mr-2">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
