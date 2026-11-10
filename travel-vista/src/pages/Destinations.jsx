import React from 'react'
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Destination() {
  return (
   <section className='destinations-section' id='popular-destinations'>
    <div className='section-heading'>
        <span>EXPLORE PLACES</span>
        <h2>Popular Destinations</h2>
        <p>Find your next unforgettable adventure.</p>

    </div>
    <div className='destination-grid'>
        {destinations.map((destination) => (
           <DestinationCard
  key={destination.id}
  id={destination.id}
  name={destination.name}
  country={destination.country}
  image={destination.image}
  description={destination.description}
/>
        ))}
    </div>
   </section>
  )
}

export default Destination
