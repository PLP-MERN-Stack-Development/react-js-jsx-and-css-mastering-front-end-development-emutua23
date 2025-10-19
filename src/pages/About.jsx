import Card from '../components/Card';

/**
 * About Page Component
 */
const About = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Real-Time Weather Search',
      description: 'Search for current weather conditions in any city worldwide using the OpenWeather API.',
    },
    {
      icon: '📊',
      title: '5-Day Forecast',
      description: 'View detailed weather forecasts for the next 5 days with temperature, humidity, and wind speed.',
    },
    {
      icon: '⭐',
      title: 'Favorite Cities',
      description: 'Save your favorite cities for quick access to their weather information.',
    },
    {
      icon: '🌡️',
      title: 'Temperature Units',
      description: 'Toggle between Celsius and Fahrenheit to view temperatures in your preferred unit.',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Fully responsive design that works seamlessly on desktop, tablet, and mobile devices.',
    },
    {
      icon: '💾',
      title: 'Local Storage',
      description: 'Your favorites and preferences are saved locally in your browser for persistence.',
    },
  ];

  const technologies = [
    { name: 'React.js', description: 'JavaScript library for building user interfaces' },
    { name: 'Vite', description: 'Next-generation frontend tooling' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'React Router', description: 'Declarative routing for React' },
    { name: 'Axios', description: 'Promise-based HTTP client' },
    { name: 'OpenWeather API', description: 'Weather data API' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Weather Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A modern, responsive weather application built with React.js and Tailwind CSS.
            Get real-time weather information and forecasts for cities around the world.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Built With
          </h2>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* How to Use Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Search for a City</h3>
                  <p className="text-gray-600">
                    Enter a city name in the search bar on the home page or dashboard to get current weather information.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">View Forecast</h3>
                  <p className="text-gray-600">
                    Navigate to the Dashboard to see the 5-day weather forecast with detailed information.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Save Favorites</h3>
                  <p className="text-gray-600">
                    Click "Add to Favorites" to save cities you check frequently for quick access later.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Change Units</h3>
                  <p className="text-gray-600">
                    Toggle between Celsius and Fahrenheit using the temperature unit button in the dashboard.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Project Info */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">React.js & Tailwind CSS Assignment</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              This project demonstrates modern React development practices including component architecture,
              hooks, state management, API integration, and responsive design with Tailwind CSS.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full">React Hooks</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full">Context API</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full">Custom Hooks</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full">Responsive Design</span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full">API Integration</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
