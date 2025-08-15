# 🏈 NLFCACA — NFL Companion App

**Project Date:** July — Completed on 05/12

## 📖 Overview
NLFCACA is a mobile application built in **React Native** (without Expo) that consumes an external **NFL API** to display comprehensive information about teams, players, and season statistics.  
This project was inspired by a personal challenge: after failing a test to create a simple React Native app, I decided to build one from scratch — tackling library version conflicts and handling complex JSON data along the way.

---

## ✨ Features
- 📅 **List Season Games** — Displays all games for the current NFL season.
- 📊 **Team Statistics** — View performance metrics and standings.
- 🏟 **Team Details & Players List** — See team information, coaches, and complete player rosters.
- 🔍 **Search Functionality** — Search by team name or stadium.

---

## 🛠 Tech Stack
- **React Native** — Mobile framework (built without Expo)
- **TypeScript** — Strong typing for safer and more maintainable code
- **Hooks** — `useState`, `useEffect`, and custom hooks for clean state management
- **Component-based Architecture** — UI broken down into reusable components
- **External NFL API** — Live sports data fetching

---

## 📸 Demo GIF
<!-- Replace 'demo.gif' with your actual GIF file path once ready -->
![Demo GIF](https://github.com/ValberX21/NFLCaca/blob/main/src/assets/gif/ncfcaca.gif)

---

## 📂 Project Structure
```
NLFCACA/
│
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # App screens (Home, Teams, Players, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript interfaces
│   ├── services/         # API calls
│   └── assets/           # Images and icons
│
├── package.json
└── App.tsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js LTS
- React Native CLI installed globally
- Android Studio / Xcode (for emulator)
- Physical device or emulator set up

### Installation
```bash
# Clone repository
git clone https://github.com/your-username/NLFCACA.git

# Install dependencies
npm install

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios
```

---

## 📚 Learning Outcomes
- Managed **React Native project without Expo**
- Solved **library version conflicts**
- Handled **complex API JSON responses** with TypeScript interfaces
- Applied **modular architecture** and **React hooks best practices**

---
---

## 📌 Next Steps
- Add player statistics
- Implement favorites feature
- Offline data caching

---

## 📜 License
This project is for learning purposes and is not affiliated with the NFL.
