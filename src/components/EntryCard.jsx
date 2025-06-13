import Carousel from "./Carousel";

export default function EntryCard({ entry, onDelete, onEdit }) {
  return (
    <div className="entry-card">
      <div className="images">
        {entry.images && entry.images.length > 0 && (
          <>            
            <Carousel images={entry.images} />
          </>
        )}
      </div>
      <div className="description"> 
        <h2>{entry.location}, {entry.country}</h2>
        <p>
          <strong>Dates:</strong>{" "}
          {entry.arrivalDate} – {entry.departureDate}
        </p>
        <p>{entry.description}</p>      
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
