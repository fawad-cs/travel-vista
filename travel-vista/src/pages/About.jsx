
import "../index.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero" id="about">
        <div className="about-hero-content">
          <span className="about-tag">OUR STORY</span>
          <h1>
            We Make Your
            <br />
            Travel Dreams <span>Come True.</span>
          </h1>
          <p>
            Travel is more than visiting places. It is about
            discovering new cultures, creating memories, and
            experiencing the beauty of our world.
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-image">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85"
            alt="Beautiful lake surrounded by mountains"
          />
        </div>

        <div className="about-intro-content">
          <span className="about-tag">WHO WE ARE</span>
          <h2>Your Journey Begins With TravelVista</h2>
          <p>
            We created TravelVista to help travelers discover
            amazing destinations around the globe.
          </p>
          <p>
            From peaceful mountain valleys to tropical beaches,
            our goal is to inspire you to explore more, experience
            different cultures, and make every journey memorable.
          </p>
          <a href="/destinations" className="about-button">
            Explore Destinations ↗
          </a>
        </div>
      </section>

      <section className="about-values">
        <div className="section-heading">
          <span>WHY TRAVELVISTA</span>
          <h2>Travel With Confidence</h2>
          <p>Everything starts with a journey worth remembering.</p>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <div className="value-icon">🌍</div>
            <h3>A World of Discovery</h3>
            <p>
              Find inspiration for your next adventure across
              beautiful destinations worldwide.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">✈️</div>
            <h3>Meaningful Adventures</h3>
            <p>
              Discover new experiences, local cultures, and
              places that make every trip special.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">💚</div>
            <h3>Memories That Last</h3>
            <p>
              Make time for the people, places, and moments
              that turn a trip into a lifelong memory.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <h2>The World Is Waiting for You</h2>
        <p>Find a destination that inspires your next adventure.</p>
        <a href="/destinations" className="about-button">
          Start Exploring ↗
        </a>
      </section>
    </main>
  );
}

export default About;
