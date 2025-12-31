# Strategy Dashboard

## 🚀 Live Demo
[[https://<your-netlify-url>.netlify.app](https://strategy-dashboard-react.netlify.app/)](https://shashikantshirsath.github.io/React-Assessment/)

## Tech Stack
- React (Functional Components)
- JavaScript (ES6+)
- Plain CSS (No UI libraries)

## 📌 Features
- Four market views: Bullish, Bearish, RangeBound, Volatile
- Date-based strategy filtering
- Dynamic strategy count calculation
- Singular/plural handling for strategy count
- Empty state handling for missing data
- Custom dropdown with arrow toggle
- Responsive, mobile-first layout

## Key Implementation Details
- Minimal state management using `useState`
- Derived data computed using array methods (`find`, `reduce`)
- Defensive UI rendering to avoid runtime errors
- Custom dropdown built without native `<select>` limitations
