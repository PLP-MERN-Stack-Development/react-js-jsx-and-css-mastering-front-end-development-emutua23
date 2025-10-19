import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import About from './pages/About';

/**
 * Main App Component
 * Handles routing and global state management
 */
function App() {
  return (
    <WeatherProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </WeatherProvider>
  );
}

export default App;
