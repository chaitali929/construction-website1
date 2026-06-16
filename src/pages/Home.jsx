import "../styles/Home.css";
import { Helmet } from "react-helmet-async";
import Bamboo from "../assets/Bamboo1.png";
import Gisheet from "../assets/Gi sheets1.png";
import Munda from "../assets/Munda1.png";
import Silverwood from "../assets/Silverwood1.png";
import Plywood from "../assets/Plywood1.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Home() {

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_p7rw8j6",
      "template_r4r4qqs",
      form.current,
      "UB5C7zuVETtHTSFVe"
    )
    .then(() => {
      alert("Inquiry sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send inquiry.");
    });
};

  const imageMap = {
  Bamboo,
  "GI sheet": Gisheet,
  Munda,
  Silverwood,
  Plywood,
};
  const materials = [
  {
    title: "Bamboo",
    image: imageMap["Bamboo"],
  },
  {
    title: "G.I sheet",
    image: imageMap["GI sheet"],
  },
  {
    title: "Munda",
    image: imageMap["Munda"],
  },
  {
    title: "Silverwood",
    image: imageMap["Silverwood"],
  },
  {
    title: "Plywood",
  
    image: imageMap["Plywood"],
  },
];

  return (

    <>
    <Helmet>
  <title>Abdul Hamid Timber Mart | Timber, Plywood & Construction Materials</title>
  <meta
    name="description"
    content="Trusted supplier of timber, plywood, bamboo and construction materials since 1984. Quality products and reliable service."
  />

   <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Abdul Hamid Timber Mart",
      image:
        "https://abdulhamidtimbermart.in/abdul-hamid-timbermart-logo.png",
      url: "https://abdulhamidtimbermart.in",
      telephone: "+917977113236",
      email: "shadab.choudhari@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Suchak Naka Bus Stop, Kalyan–Shilphata Road, Nandivali Gaon",
        addressLocality: "Kalyan",
        addressRegion: "Maharashtra",
        postalCode: "421306",
        addressCountry: "IN"
      }
    })}
  </script>
</Helmet>
  
    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-badge">
          Trusted Since 1984 • Kalyan, Maharashtra
        </div>

        <h1>
          Start Your
          <span> Dream </span>
          Project
          <br />
          With Us
        </h1>

        <p>
          Abdul Hamid Timber Mart has been supplying premium timber,
          plywood, bamboo, Silverwood, G.I sheets and construction materials
          to builders, contractors and homeowners for over
          four decades.
        </p>

 <div className="supply-label">
    WE SUPPLY
  </div>

      <div className="supply-slider">

  <div className="slider-track">

    {[
      "✓ Silver Wood",
      "Saru Munda",
      "Bamboo",
      "Shuttering PF Grade",
      "G.I Sheet",
      "✓ Plywood",

      "✓ Silver Wood",
      "Saru Munda",
      "Bamboo",
      "Shuttering PF Grade",
      "G.I Sheet",
      "✓ Plywood",

      "✓ Silver Wood",
      "Saru Munda",
      "Bamboo",
      "Shuttering PF Grade",
      "G.I Sheet",
      "✓ Plywood",
    ].map((item, index) => (
      <div className="slide-item" key={index}>
        {item}
      </div>
    ))}

  </div>

</div>
        <div className="hero-buttons">

          <button className="secondary-btn">
            Explore Materials
          </button>

        </div>

      </section>

      {/* STATS */}


      {/* ABOUT PREVIEW */}

      <section className="intro-section">

        <div className="intro-left">

          <span className="section-tag">
            ABOUT US
          </span>

          <h2>
            Building Trust Through
            Quality Materials
          </h2>

        </div>

        <div className="intro-right">

          <p>
            Since 1984, Abdul Hamid Timber Mart has built a reputation
            for supplying reliable construction materials across
            Mumbai, Thane, Kalyan and surrounding regions.
          </p>

          <p>
            From premium plywood and timber to bamboo and GI sheets,
            we provide products that meet professional construction
            standards.
          </p>

        </div>

      </section>

      {/* MATERIALS */}

      <section className="materials-section">

        <div className="section-heading">

          <span>OUR PRODUCTS</span>

          <h2>
            Premium Construction
            Materials
          </h2>

          <p>
            Explore our range of trusted products.
          </p>

        </div>

        <div className="materials-grid">

          {materials.map((item, index) => (
            <div className="material-card" key={index}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="material-content">

                <span>{item.category}</span>

                <h3>{item.title}</h3>

             
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WHY US */}

      <section className="why-section">

        <div className="why-left">

          <span className="section-tag">
            WHY CHOOSE US
          </span>

          <h2>
            Mumbai's Trusted
            Supplier Of
            Construction Materials
          </h2>

          <p>
            Our commitment to quality, transparent pricing,
            and long-term customer relationships has made
            us a preferred supplier for contractors and
            developers across Maharashtra.
          </p>

        </div>

        <div className="why-right">

          <div className="feature-box">
            <h3>Premium Quality</h3>

            <p>
              Carefully sourced materials from
              trusted manufacturers.
            </p>
          </div>

          <div className="feature-box">
            <h3>Competitive Pricing</h3>

            <p>
              Best value for builders,
              contractors and bulk orders.
            </p>
          </div>

          <div className="feature-box">
            <h3>Trusted Since 1984</h3>

            <p>
              Four decades of industry
              experience and trust.
            </p>
          </div>

          <div className="feature-box">
            <h3>Reliable Delivery</h3>

            <p>
              Timely supply for projects
              of every size.
            </p>
          </div>

        </div>

      </section>

      {/* TRUSTED PARTNERS */}
<section className="partners-section">

  <span className="section-tag">
    TRUSTED PARTNERS
  </span>

  <h2>
    Trusted By
    <span> Developers & Contractors </span>
    For More Than Four Decades
  </h2>

  <p className="partners-subtitle">
    We proudly supply timber, plywood and construction
    materials to leading builders, contractors and
    infrastructure companies across Maharashtra.
  </p>

  <div className="trust-stats">

    <div className="trust-box">
      <h3>40+</h3>
      <p>Years Experience</p>
    </div>

    <div className="trust-box">
      <h3>500+</h3>
      <p>Projects Served</p>
    </div>

    <div className="trust-box">
      <h3>1000+</h3>
      <p>Happy Customers</p>
    </div>

    <div className="trust-box">
      <h3>24/7</h3>
      <p>Material Availability</p>
    </div>

  </div>

  <div className="partners-slider">

    <div className="partners-track">

      <div className="partner-pill">Runwal Group</div>
      <div className="partner-pill">Lodha</div>
      <div className="partner-pill">Hiranandani</div>
      <div className="partner-pill">Rustomjee</div>
      <div className="partner-pill">The Wadhwa Group</div>
      <div className="partner-pill">Tharwani Infrastructure</div>

      {/* Duplicate */}

      <div className="partner-pill">Runwal Group</div>
      <div className="partner-pill">Lodha</div>
      <div className="partner-pill">Hiranandani</div>
      <div className="partner-pill">Rustomjee</div>
      <div className="partner-pill">The Wadhwa Group</div>
      <div className="partner-pill">Tharwani Infrastructure</div>

    </div>

  </div>

</section>

<section className="testimonial-section">

  <span>CLIENT TESTIMONIALS</span>

  <h2>
    Trusted By Builders,
    Contractors & Developers
  </h2>

  <p className="testimonial-subtitle">
    For over four decades we have supplied quality
    materials to hundreds of successful projects.
  </p>

  <div className="testimonial-slider">

    <div className="testimonial-track">

      {/* CARD 1 */}
      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          Excellent quality plywood and timber.
          Deliveries are always on time and the
          pricing is very competitive.
        </p>

        <h4>Rajesh Patel</h4>

        <span>Building Contractor</span>
      </div>

      {/* CARD 2 */}
      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          We have been sourcing materials from
          Abdul Hamid Timber Mart for several years.
          Highly reliable and professional.
        </p>

        <h4>Runwal Project Team</h4>

        <span>Developer</span>
      </div>

      {/* CARD 3 */}
      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          Best supplier in Kalyan. Large stock,
          quality products and quick service
          whenever we need urgent deliveries.
        </p>

        <h4>Sameer Shaikh</h4>

        <span>Civil Engineer</span>
      </div>

      {/* CARD 4 */}
      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          Their shuttering plywood quality is
          outstanding. We use it across multiple
          residential projects.
        </p>

        <h4>Vikas Builders</h4>

        <span>Construction Company</span>
      </div>

      {/* DUPLICATE FOR LOOP */}

      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          Excellent quality plywood and timber.
          Deliveries are always on time and the
          pricing is very competitive.
        </p>

        <h4>Rajesh Patel</h4>

        <span>Building Contractor</span>
      </div>

      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          We have been sourcing materials from
          Abdul Hamid Timber Mart for several years.
          Highly reliable and professional.
        </p>

        <h4>Runwal Project Team</h4>

        <span>Developer</span>
      </div>

      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          Best supplier in Kalyan. Large stock,
          quality products and quick service
          whenever we need urgent deliveries.
        </p>

        <h4>Sameer Shaikh</h4>

        <span>Civil Engineer</span>
      </div>

      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p>
          Their shuttering plywood quality is
          outstanding. We use it across multiple
          residential projects.
        </p>

        <h4>Vikas Builders</h4>

        <span>Construction Company</span>
      </div>

    </div>

  </div>

</section>

{/* GALLERY */}


{/* CONTACT */}

<section className="contact-section">

  <div className="contact-container">

    <div className="contact-left">

      <span>CONTACT US</span>

      <h2>
        Let's Build Something
        Great Together
      </h2>

      <div className="contact-card">
        <h4>📍 Address</h4>
        <p>Suchak Naka Bus Stop, Kalyan–Shilphata Road,
Nandivali Gaon, Kalyan, Maharashtra 421306</p>
      </div>

      <div className="contact-card">
        <h4>📞 Phone</h4>
        <p>Shadab: 7977113236</p>
<p>Sarfraz: 8108729945 </p>
<p>Shahnawaz: 7021416059
</p>
      </div>

<div className="contact-card">
  <h4>🕒 Working Hours</h4>

  <p>Monday - Sunday : 9:00 AM - 7:00 PM</p>

  <p>Friday : Closed</p>
</div>
      

   
    </div>

    <div className="contact-right">

  <h3>Request A Quote</h3>

  <form ref={form} onSubmit={sendEmail}>

      

   <input
  type="text"
  name="user_name"
  placeholder="Your Name"
  required
/>

<input
  type="email"
  name="user_email"
  placeholder="Email Address"
  required
/>

<input
  type="text"
  name="user_phone"
  placeholder="Phone Number"
  required
/>

<textarea
  name="project_details"
  placeholder="Tell us about your project"
  required
></textarea>

<button type="submit">
  Send Inquiry
</button>

     </form>

    </div>

  </div>
  <div className="map-card">

  <h4>📍 Find Us On Map</h4>

  <iframe
    title="Abdul Hamid Timber Mart"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.3289359896085!2d73.11840107715689!3d19.224491000934723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795c7f7602bc7%3A0xdc2c88214b2016ba!2sABDUL%20HAMID%20TIMBER%20MART!5e0!3m2!1sen!2sin!4v1780950009168!5m2!1sen!2sin" 
    loading="lazy"
  ></iframe>

</div>

</section>




    </div>

      </>
  );
}

export default Home;