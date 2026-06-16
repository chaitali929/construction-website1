import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

function Contact() {


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
  return (
    <>
    <Helmet>
  <title>Contact Us | Abdul Hamid Timber Mart</title>
  <meta
    name="description"
    content="Contact Abdul Hamid Timber Mart for timber, plywood and construction material requirements. Get in touch with our team today."
  />
</Helmet>
    <div className="contactpg-page">

      {/* HERO */}

      <section className="contactpg-hero">

        <span>GET IN TOUCH</span>

        <h1>
          Let's Build Something
          Great Together
        </h1>

        <p>
          Whether you're planning a home, commercial
          project, renovation or large-scale development,
          we're here to supply the materials you need.
        </p>

      </section>

      {/* CONTACT SECTION */}

      <section className="contactpg-section">

        <div className="contactpg-left">

          <div className="contactpg-card">

            <h3>📍 Address</h3>

            <p>
              Suchak Naka Bus Stop,
              Kalyan–Shilphata Road,
              Nandivali Gaon,
              Kalyan, Maharashtra 421306
            </p>

          </div>

          <div className="contactpg-card">

            <h3>📞 Phone</h3>

            <p>Shadab: 7977113236</p>
            <p>Sarfraz: 8108729945 </p>
            <p>Shahnawaz: 7021416059</p>

          </div>

          <div className="contactpg-card">

            <h3>✉️ Email</h3>

            <p>shadab.choudhari@gmail.com</p>

          </div>

          <div className="contactpg-card">

            <h3>🕒 Working Hours</h3>

            <p>Monday - Saturday : 9:00 AM - 7:00 PM</p>

            <p>Sunday : Open</p>

            <p>Friday : Closed</p>

          </div>

        </div>

        <div className="contactpg-right">

          <h2>Request A Quote</h2>

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

  <input
    type="text"
    name="material_required"
    placeholder="Material Required"
    required
  />

  <textarea
    name="project_details"
    placeholder="Tell us about your project..."
    required
  ></textarea>

  <button type="submit">
    Send Inquiry
  </button>

</form>

        </div>

      </section>

      {/* MAP */}

      <section className="contactpg-map-section">

        <h2>Find Us On Map</h2>

        <iframe
          title="Abdul Hamid Timber Mart"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.3289359896085!2d73.11840107715689!3d19.224491000934723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795c7f7602bc7%3A0xdc2c88214b2016ba!2sABDUL%20HAMID%20TIMBER%20MART!5e0!3m2!1sen!2sin!4v1780950009168!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>

      </section>

      {/* FAQ */}

      <section className="contactpg-faq-section">

        <span>FAQ</span>

        <h2>
          Frequently Asked Questions
        </h2>

        <div className="contactpg-faq-grid">

          <div className="contactpg-faq-card">
            <h3>
              Do you supply bulk orders?
            </h3>

            <p>
              Yes, we cater to builders,
              contractors and large projects.
            </p>
          </div>

          <div className="contactpg-faq-card">
            <h3>
              Do you provide delivery?
            </h3>

            <p>
              Yes, delivery options are available
              depending on location and order size.
            </p>
          </div>

          <div className="contactpg-faq-card">
            <h3>
              What materials do you supply?
            </h3>

            <p>
              Timber, plywood, bamboo,
              GI sheets and construction materials.
            </p>
          </div>

        </div>

      </section>

    </div>
    </>
  );
}

export default Contact;