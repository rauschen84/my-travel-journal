import { useState } from "react";
import EntryForm from "./components/EntryForm";
import EntryCard from "./components/EntryCard";

const initialEntries = [
  {
    id: 1,
    location: "Kyoto",
    country: "Japan",
    thoughts: "Kyoto was beautiful in spring!",
    images: ["/images/kyoto1.jpg"]
  },
  {
    id: 2,
    location: "Barcelona",
    country: "Spain",
    thoughts: "Loved the Gaudí architecture!",
    images: ["/images/barcelona1.jpg"]
  },
  {
    id: 3,
    location: "Paris",
    country: "France",
    thoughts: "Eiffel Tower at night is magical.",
    images: ["/images/paris1.jpg"]
  }
];

export default function App() {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry = (entry) => {
    setEntries([...entries, { ...entry, id: Date.now() }]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My Travel Journal</h1>
      <EntryForm addEntry={addEntry} />
      <div className="entry-list">
        {entries.map(entry => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onDelete={() => deleteEntry(entry.id)}
          />
        ))}
      </div>
    </div>
  );
}

