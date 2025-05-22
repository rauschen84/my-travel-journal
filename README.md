# 🌍 My Travel Journal

A simple, elegant React app to document and relive your travels. Create, view, update, and delete journal entries for locations you've visited — including dates, descriptions, and an image carousel to showcase your best moments.

Deployed with Vercel — no setup needed!

## 🔗 Live Demo

👉 [Try the app here](https://my-travel-journal-chi.vercel.app/)

---

## ✨ Features

- ✅ Add new travel entries with location, country, dates, and thoughts
- 🖼️ Upload **multiple images** per entry with a built-in carousel
- ✏️ Edit existing entries
- 🗑️ Delete entries
- 💾 Persistent storage using `localStorage`
- 📅 Arrival and departure date tracking
- 🧼 Clean UI with custom CSS (no frameworks)

---

## 📁 Folder Structure

my-travel-journal/<br>
├── public/<br>
│ └── images/ # sample images<br>
├── src/<br>
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

## 🚀 Getting Started Locally

Clone the repo and run it locally:

```bash

git clone https://github.com/rauschen84/my-travel-journal.git
cd my-travel-journal
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 🛠️ Built With

- React

- Vite

- Vercel for deployment

- Vanilla CSS (no Tailwind, Bootstrap, or UI libraries)

---

## 💡 Future Enhancements

- Weather API integration (fetch real-time weather for each location)

- Dark mode toggle

- Google Maps integration

---

## 👤 Author

Alexander Schultheiss / rauschen84
GitHub: @rauschen84

---

## 📄 License

This project is open source and free to use for educational and personal portfolio purposes.