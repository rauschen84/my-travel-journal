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
  const [editingEntry, setEditingEntry] = useState(null);

  const addOrUpdateEntry = (entry) => {
    if (entry.id) {
      // Update
      setEntries(entries.map(e => e.id === entry.id ? entry : e));
    } else {
      // Add
      setEntries([...entries, { ...entry, id: Date.now() }]);
    }
    setEditingEntry(null);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const editEntry = (entry) => {
    setEditingEntry(entry);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to form
  };

  return (
    <div className="app-container">
      <h1>My Travel Journal</h1>
      <EntryForm
        key={editingEntry?.id || "new"}
        onSubmit={addOrUpdateEntry}
        initialData={editingEntry}
      />
      <div className="entry-list">
        {entries.map(entry => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onDelete={() => deleteEntry(entry.id)}
            onEdit={() => editEntry(entry)}
          />
        ))}
      </div>
    </div>
  );
}
