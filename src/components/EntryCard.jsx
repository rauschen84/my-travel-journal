export default function EntryCard({ entry, onDelete, onEdit }) {
  return (
    <div className="entry-card">
      <h2>{entry.location}, {entry.country}</h2>
      <p>{entry.thoughts}</p>
      <div className="images">
        {entry.images.map((src, idx) => (
          <img key={idx} src={src} alt={entry.location} />
        ))}
      </div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
