import { useState, useEffect } from "react";
import EntryForm from "./components/EntryForm";
import EntryCard from "./components/EntryCard";

export default function App() {
  const [entries, setEntries] = useState([]); // start empty
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/entries")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const transformed = data.map((entry) => ({
          ...entry,
          images: [entry.imageUrl1, entry.imageUrl2, entry.imageUrl3].filter(Boolean),
        }));        
        setEntries(transformed);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        // optionally set some error state here
      });
  }, []);

  const addOrUpdateEntry = (entry) => {
  const isEdit = Boolean(entry.id);
  const url = isEdit
    ? `http://localhost:8080/api/entries/${entry.id}`
    : "http://localhost:8080/api/entries";

  fetch(url, {
    method: isEdit ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to save entry");
      return res.json();
    })
    .then((savedEntry) => {
      setEntries((prev) =>
        isEdit
          ? prev.map((e) => (e.id === savedEntry.id ? savedEntry : e))
          : [...prev, savedEntry]
      );
      setEditingEntry(null);
    })
    .catch((error) => {
      console.error("Save error:", error);
    });
};


  const deleteEntry = (id) => {
    fetch(`http://localhost:8080/api/entries/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete entry");
        }
        setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
      })
      .catch((error) => {
        console.error("Delete error:", error);
        // Optionally show a user-friendly error message
      });
  };

  const editEntry = (entry) => {
    setEditingEntry(entry);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
