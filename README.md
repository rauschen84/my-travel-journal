# 🌍 My Travel Journal — Frontend

A simple, elegant full-stack travel journal app to document and relive your travels. Built with **React** and **Spring Boot**. This repository contains the **frontend** code — allowing you to create, view, update, and delete journal entries for locations you've visited — including dates, descriptions, and an image carousel to showcase your best moments.
Now enhanced with **real-time weather info** and a **clickable Google Maps link** for every location.

## 🔗 Related Repositories

- 🔧 [Backend Code (Java + Spring Boot)](https://github.com/rauschen84/my-travel-journal-backend)

---

## 🔗 Live Demo

👉 [Try the standalone version here](https://my-travel-journal-standalone.vercel.app/)

📝 *Note: This is a **frontend-only demo** using localStorage, with the same features but no backend connection.*

---

## ✨ Features

- ✅ Add new travel entries with location, country, dates, and description
- 🌦️ Display **real-time weather** for each destination using OpenWeatherMap API
- 🗺️ Clickable **Google Maps** link for quick access to location
- 🖼️ Upload **multiple images** per entry with a built-in carousel
- ✏️ Edit existing entries
- 🗑️ Delete entries
- 🔁 Full CRUD support via REST API (backend connection)
- 📅 Arrival and departure date tracking
- 🧼 Clean, responsive UI with custom CSS (no frameworks)

---

## 📁 Folder Structure

my-travel-journal/<br>
├── public/<br>
│ └── images/ # sample images<br>
├── src/<br>
│ ├── utils/<br>
│ │ └── weather.js<br>
│ ├── components/<br>
│ │ ├── Carousel.css<br>
│ │ ├── Carousel.jsx<br>
│ │ ├── EntryCard.jsx<br>
│ │ └── EntryForm.jsx<br>
│ ├── App.css<br>
│ ├── App.jsx<br>
│ └── main.jsx<br>
├── .gitignore<br>
├── README.md<br>
├── eslint.config.js<br>
├── index.html<br>
├── package-lock.json<br>
├── package.json<br>
└── vite.config.js<br>

---

## 🚀 Getting Started Locally (Full Stack)

To run the full app locally:

### 1. Clone the repo and run it locally:

```bash

git clone https://github.com/rauschen84/my-travel-journal.git
cd my-travel-journal
npm install
```

### 2. Run the backend locally

Follow instructions in the backend repo:
➡️ [my-travel-journal-backend](https://github.com/rauschen84/my-travel-journal-backend)

Make sure the backend is running on http://localhost:8080.

### 3. Run the frontend

```bash

npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 🛠️ Built With

- React

- Vite

- OpenWeatherMap API

- Google Maps (via dynamic search URL)

- Vanilla CSS (no Tailwind, Bootstrap, or UI libraries)

- REST API from Spring Boot backend

---

## 💡 Future Enhancements

- 🕰️ Backend weather integration to show past weather data based on travel dates

- 🌗 Dark mode toggle

- 📍 Interactive embedded Google Maps view

- 🖼️ Image upload to cloud storage (e.g., Cloudinary)

---

## 👤 Author

Alexander Schultheiss / rauschen84
GitHub: @rauschen84

---

## 📄 License

This project is open source and free to use for educational and personal portfolio purposes.