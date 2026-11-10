
import { Link } from "react-router-dom";

function DestinationCard({ id, name, country, image, description }) {
  return (
    <article className="destination-card">
      <img src={image} alt={name} />

    <div className="destination-info">
  <span>
    <i className="fa-solid fa-location-dot"></i> {country}
  </span>

  <h3>{name}</h3>
  <p>{description}</p>

  <Link to={`/destination/${id}`} className="discover-button">
    Discover More <i className="fa-solid fa-arrow-right"></i>
  </Link>
</div>
    </article>
  );
}

export default DestinationCard;
