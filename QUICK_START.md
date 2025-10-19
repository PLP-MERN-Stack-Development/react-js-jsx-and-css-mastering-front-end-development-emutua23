# ⚡ Quick Start Guide

Get your Weather Dashboard up and running in 5 minutes!

---

## 🚀 Super Quick Setup

```bash
# 1. Clone the project
git clone <your-repo-url>
cd weather-dashboard

# 2. Install dependencies
npm install

# 3. Get API Key (Free)
# Visit: https://openweathermap.org/api
# Sign up and copy your API key

# 4. Create .env file
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env
echo "VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5" >> .env

# 5. Start development server
npm run dev

# 6. Open browser
# Visit: http://localhost:5173/
```

**Done! 🎉** Your app is running!

---

## 📦 What's Installed

After `npm install`, you'll have:

### Core Dependencies
- **react** (v19.1) - UI library
- **react-dom** (v19.1) - React DOM rendering
- **react-router-dom** (v7.9) - Routing
- **axios** (v1.12) - HTTP client
- **prop-types** - Runtime type checking

### Dev Dependencies
- **vite** (v7.1) - Build tool
- **tailwindcss** (v3.4) - CSS framework
- **postcss** & **autoprefixer** - CSS processing
- **eslint** - Code linting

**Total Size:** ~280MB (node_modules)

---

## 📁 Project Files You Have

```
weather-dashboard/
├── src/
│   ├── api/weatherApi.js              # API functions
│   ├── components/                    # 7 reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Loading.jsx
│   │   ├── Navbar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── ForecastCard.jsx
│   ├── context/WeatherContext.jsx     # Global state
│   ├── hooks/                         # 3 custom hooks
│   │   ├── useFetch.js
│   │   ├── useLocalStorage.js
│   │   └── useGeolocation.js
│   ├── pages/                         # 4 pages
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Favorites.jsx
│   │   └── About.jsx
│   ├── utils/helpers.js               # Utility functions
│   ├── App.jsx                        # Main app
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── .env                               # YOUR API KEY (create this!)
├── .env.example                       # Template
├── .gitignore                         # Git ignore rules
├── package.json                       # Dependencies
├── tailwind.config.js                 # Tailwind config
├── vite.config.js                     # Vite config
├── README.md                          # Full documentation
├── SETUP_GUIDE.md                     # Detailed setup
├── DEPLOYMENT_GUIDE.md                # How to deploy
└── PROJECT_WALKTHROUGH.md             # Code explanation
```

---

## ✅ Verify Installation

### Test Checklist

Run these commands to verify everything works:

```bash
# Check Node.js version (should be v18+)
node --version

# Check npm version
npm --version

# Check if dependencies installed
ls node_modules | wc -l
# Should show ~270+ packages

# Check if build works
npm run build
# Should create 'dist' folder

# Start dev server
npm run dev
# Should start on http://localhost:5173/
```

### Browser Checklist

Open http://localhost:5173/ and verify:

- [ ] Home page loads
- [ ] Search bar appears
- [ ] Navigation menu works
- [ ] Can click between pages
- [ ] No console errors (F12 → Console)

---

## 🎯 First Steps

### 1. Test the Search

```
1. Go to Home page
2. Enter "London" in search
3. Click "Search Weather"
4. Weather card should appear
```

**Troubleshooting:**
- **"city not found"** → Check spelling
- **"Failed to fetch"** → Check internet connection
- **No data appears** → Check API key in .env

### 2. Explore Dashboard

```
1. Click "Dashboard" in nav
2. Search for any city
3. View current weather + 5-day forecast
4. Click temperature unit toggle (°C ↔ °F)
```

### 3. Save Favorites

```
1. Search for a city in Dashboard
2. Click "Add to Favorites"
3. Go to "Favorites" page
4. City should appear in your favorites
```

### 4. Check About Page

```
1. Click "About" in navigation
2. Read about features and tech stack
```

---

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start dev server (hot reload)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality

# Deployment
vercel              # Deploy to Vercel
netlify deploy      # Deploy to Netlify
```

---

## 🐛 Common Issues

### Issue: API key not working

**Fix:**
```bash
# Check .env file exists
ls -la | grep .env

# Verify API key format
cat .env
# Should show:
# VITE_WEATHER_API_KEY=your_key_here
# VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5

# Restart dev server
# Press Ctrl+C, then:
npm run dev
```

### Issue: Port already in use

**Fix:**
```bash
# Kill existing process
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Issue: Styles not loading

**Fix:**
```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/index.css -o ./dist/output.css

# Restart server
npm run dev
```

---

## 📚 Next Steps

### Learn More

1. **Read README.md** - Full documentation
2. **Read SETUP_GUIDE.md** - Detailed setup instructions  
3. **Read PROJECT_WALKTHROUGH.md** - Understand the code
4. **Read DEPLOYMENT_GUIDE.md** - Deploy your app

### Customize

1. **Change colors** - Edit `tailwind.config.js`
2. **Add features** - See extension ideas in PROJECT_WALKTHROUGH.md
3. **Modify components** - All components in `src/components/`
4. **Add pages** - Create new pages in `src/pages/`

### Deploy

```bash
# Vercel (Easiest)
npm install -g vercel
vercel login
vercel

# Netlify
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**Full deployment instructions:** See DEPLOYMENT_GUIDE.md

---

## 🎓 Learning Resources

### Official Docs
- [React](https://react.dev/) - Learn React
- [Tailwind CSS](https://tailwindcss.com/docs) - Learn Tailwind
- [Vite](https://vitejs.dev/) - Learn Vite
- [React Router](https://reactrouter.com/) - Learn routing

### Video Tutorials
- React Official Tutorial
- Tailwind CSS Crash Course
- Building React Apps with Vite

---

## 💡 Pro Tips

1. **Keep Dev Server Running**
   - Changes auto-reload (Hot Module Replacement)
   - No need to restart for code changes

2. **Use Browser DevTools**
   - Press F12 to open
   - Console tab for errors
   - Network tab for API calls

3. **Read Error Messages**
   - Terminal shows build errors
   - Browser shows runtime errors
   - Both have helpful messages!

4. **Start Small**
   - Test one feature at a time
   - Build incrementally
   - Save frequently

5. **Use Git**
   ```bash
   git add .
   git commit -m "Add feature"
   git push
   ```

---

## 📞 Need Help?

### Check These First:
1. Error message in terminal
2. Console errors in browser (F12)
3. README.md troubleshooting section
4. SETUP_GUIDE.md common issues

### Still Stuck?
- Review code in PROJECT_WALKTHROUGH.md
- Check OpenWeather API docs
- Search error on Google/Stack Overflow
- Ask your instructor

---

## 🎉 Success Criteria

Your app is ready when:

- [x] npm run dev works
- [x] Can search for cities
- [x] Weather data displays
- [x] Can add favorites
- [x] Navigation works
- [x] Responsive on mobile
- [x] npm run build succeeds
- [x] No console errors

**Congratulations!** You're ready to deploy! 🚀

---

**Ready to go deeper?** Read the full README.md

**Ready to deploy?** Read DEPLOYMENT_GUIDE.md

**Want to understand the code?** Read PROJECT_WALKTHROUGH.md
