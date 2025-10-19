# 🚀 Complete Setup Guide - Step by Step

This guide will walk you through setting up the Weather Dashboard application from scratch.

---

## 📋 Prerequisites

Before starting, make sure you have:

### 1. Node.js and npm

Check if installed:
```bash
node --version  # Should be v18 or higher
npm --version   # Should be v9 or higher
```

If not installed:
- Visit: https://nodejs.org/
- Download and install the LTS version
- Restart your terminal after installation

### 2. Git

Check if installed:
```bash
git --version
```

If not installed:
- Visit: https://git-scm.com/
- Download and install for your OS

### 3. Code Editor

Recommended: **VS Code**
- Download: https://code.visualstudio.com/

Recommended Extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier

---

## 🎯 Step-by-Step Installation

### STEP 1: Get the Project

#### Option A: Clone from GitHub Classroom
```bash
# After accepting the GitHub Classroom invitation
git clone <your-repository-url>
cd <repository-name>
```

#### Option B: Create New Project (If Starting Fresh)
```bash
# Create new Vite project
npm create vite@latest weather-dashboard -- --template react

# Navigate into project
cd weather-dashboard
```

---

### STEP 2: Install Dependencies

```bash
# Install all dependencies
npm install

# This installs:
# - react & react-dom (React library)
# - vite (build tool)
# - And other base dependencies
```

Wait for installation to complete (1-2 minutes).

---

### STEP 3: Install Additional Packages

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Install React Router for navigation
npm install react-router-dom

# Install Axios for API calls
npm install axios
```

---

### STEP 4: Configure Tailwind CSS

1. **Initialize Tailwind:**
```bash
npx tailwindcss init -p
```

2. **Update `tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **Update `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### STEP 5: Create Folder Structure

```bash
# Navigate to src folder
cd src

# Create all required folders
mkdir components pages hooks context api utils

# Go back to project root
cd ..
```

Your structure should look like:
```
src/
├── components/
├── pages/
├── hooks/
├── context/
├── api/
└── utils/
```

---

### STEP 6: Get OpenWeather API Key

1. **Visit OpenWeather:**
   - Go to: https://openweathermap.org/api
   - Click "Sign Up" (top right)

2. **Create Account:**
   - Enter your details
   - Verify your email

3. **Get API Key:**
   - Login to your account
   - Go to "API keys" section
   - Copy your default API key
   - **Note:** It may take 10 minutes to activate

---

### STEP 7: Setup Environment Variables

1. **Create `.env` file in project root:**
```bash
# In project root directory
touch .env
```

2. **Add your API key to `.env`:**
```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
```

⚠️ **Important:**
- Replace `your_actual_api_key_here` with your real API key
- Don't use quotes around the values
- Don't commit this file to Git (it's in .gitignore)

---

### STEP 8: Copy Project Files

Now you need to create all the component files. You can either:

1. **Manual Creation:**
   - Create each file as shown in the project structure
   - Copy code from the assignment repository

2. **Use Provided Files:**
   - If you have the complete project files, copy them to respective folders

**Key Files to Create:**

```
src/
├── api/
│   └── weatherApi.js
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Input.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   ├── WeatherCard.jsx
│   └── ForecastCard.jsx
├── context/
│   └── WeatherContext.jsx
├── hooks/
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   └── useGeolocation.js
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Favorites.jsx
│   └── About.jsx
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx
```

---

### STEP 9: Test the Application

1. **Start development server:**
```bash
npm run dev
```

2. **Open browser:**
   - Go to: http://localhost:5173/
   - You should see the Weather Dashboard

3. **Test features:**
   - Search for a city (e.g., "London")
   - View the dashboard
   - Add cities to favorites
   - Toggle temperature units

---

### STEP 10: Verify Everything Works

Run through this checklist:

- [ ] Development server starts without errors
- [ ] Home page loads
- [ ] Can search for cities
- [ ] Weather data displays correctly
- [ ] Can navigate to different pages
- [ ] Can add favorites
- [ ] Can toggle temperature units
- [ ] Responsive on mobile (resize browser)

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot find module 'react'"
**Solution:**
```bash
npm install
```

### Issue 2: Tailwind styles not working
**Solution:**
1. Check `tailwind.config.js` content array
2. Restart dev server: `Ctrl+C` then `npm run dev`

### Issue 3: API key not working
**Solution:**
1. Verify API key in `.env` file
2. Wait 10 minutes for activation
3. Check there are no quotes around the key
4. Restart dev server

### Issue 4: Port 5173 already in use
**Solution:**
```bash
# Kill existing process
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Issue 5: Module not found errors
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📦 Build for Production

When ready to deploy:

```bash
# Create production build
npm run build

# Test production build locally
npm run preview
```

This creates a `dist` folder with optimized files.

---

## 🚀 Next Steps

1. **Customize the App:**
   - Change colors in `tailwind.config.js`
   - Add more features
   - Improve UI/UX

2. **Deploy:**
   - Follow deployment guide in README.md
   - Use Vercel, Netlify, or GitHub Pages

3. **Test Thoroughly:**
   - Test all features
   - Check responsive design
   - Verify error handling

---

## 📚 Additional Resources

### React
- Official Docs: https://react.dev/
- React Tutorial: https://react.dev/learn

### Tailwind CSS
- Official Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com/

### Vite
- Official Docs: https://vitejs.dev/
- Getting Started: https://vitejs.dev/guide/

### OpenWeather API
- API Docs: https://openweathermap.org/api
- API Guide: https://openweathermap.org/guide

---

## 💡 Tips for Success

1. **Read Error Messages:**
   - Most errors have helpful messages
   - Check the terminal and browser console

2. **Use Developer Tools:**
   - Press F12 in browser
   - Check Console tab for errors
   - Use Network tab to see API calls

3. **Test Incrementally:**
   - Don't wait until the end to test
   - Test each feature as you build it

4. **Ask for Help:**
   - Check documentation first
   - Search for errors on Google/Stack Overflow
   - Ask your instructor or classmates

5. **Keep Learning:**
   - Experiment with the code
   - Try adding new features
   - Read React and Tailwind docs

---

## ✅ Final Checklist

Before submission:

- [ ] All files created and in correct folders
- [ ] `.env` file configured with API key
- [ ] Application runs without errors
- [ ] All features working
- [ ] Responsive design tested
- [ ] Code is clean and commented
- [ ] README.md updated
- [ ] Application deployed
- [ ] Deployment URL added to README
- [ ] Repository pushed to GitHub

---

**Need Help?**
- Check the main README.md
- Review error messages carefully
- Test one feature at a time
- Don't hesitate to ask questions!

---

Good luck with your project! 🎉
