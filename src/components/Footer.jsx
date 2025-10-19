import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Provides site navigation, useful links, and copyright information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/favorites', label: 'Favorites' },
    { path: '/about', label: 'About' },
  ];

  const resourceLinks = [
    { url: 'https://openweathermap.org/', label: 'OpenWeather API', external: true },
    { url: 'https://react.dev/', label: 'React Documentation', external: true },
    { url: 'https://tailwindcss.com/', label: 'Tailwind CSS', external: true },
    { url: 'https://vitejs.dev/', label: 'Vite', external: true },
  ];

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: 'https://github.com' },
    { icon: '🐦', label: 'Twitter', url: 'https://twitter.com' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '📧', label: 'Email', url: 'mailto:info@weatherapp.com' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-4xl">🌤️</span>
              <span className="text-2xl font-bold">WeatherApp</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted companion for accurate weather forecasts and real-time weather information from around the world.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform duration-200"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-200">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-200">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Weather Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Weather Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 mt-1">🌡️</span>
                <span>Real-time temperature updates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">💨</span>
                <span>Wind speed and direction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">💧</span>
                <span>Humidity and precipitation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📅</span>
                <span>5-day weather forecast</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} WeatherApp. All rights reserved.
            </p>
            <p className="mt-1">
              Built with ❤️ using React.js & Tailwind CSS
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs">
            Weather data provided by{' '}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              OpenWeather API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;