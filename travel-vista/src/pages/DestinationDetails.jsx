
import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return <h2>Destination not found!</h2>;
  }

  return (
    <main className="destination-details">
      <img
        className="details-image"
        src={destination.image}
        alt={destination.name}
      />

      <div className="details-content">
        <span>{destination.country}</span>
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>

        <Link to="/destinations" className="discover-button">
          ← Back to Destinations
        </Link>
      </div>
    </main>
  );
}

export default DestinationDetails;
