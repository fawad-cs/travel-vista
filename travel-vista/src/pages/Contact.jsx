import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for contacting TravelVista!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span>GET IN TOUCH</span>
        <h1>Let's Plan Your Next Adventure</h1>
        <p>
          Have a question or need travel inspiration?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <span className="contact-tag">CONTACT US</span>
          <h2>Let's Start a Conversation</h2>

          <p>
            Send us a message and let us know what kind
            of adventure you're dreaming about.
          </p>

          <div className="contact-info-card">
           <span>
  <i className="fa-solid fa-envelope"></i>
</span>
            <div>
              <h3>Email</h3>
              <p>hello@travelvista.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <span><i className="fa-solid fa-phone"></i></span>
            <div>
              <h3>Our Mission</h3>
              <p>Helping you discover the world.</p>
            </div>
          </div>

          <div className="contact-info-card">
           <span> <i className="fa-solid fa-location-dot"></i></span>
            <div>
              <h3>Availability</h3>
              <p>Send us a message anytime.</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message ↗</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;