import "../styles/About.css";
import { Link } from "react-router-dom";
import constructionImg from "../assets/Impose.png";
import { Helmet } from "react-helmet-async";



function About() {
  return (

        <>
      <Helmet>
       <title>About Us | Timber, Plywood & Building Material Supplier in Kalyan</title>

       <meta
  name="description"
  content="Learn about Abdul Hamid Timber Mart, a trusted building material supplier in Kalyan since 1984. We supply shuttering plywood, centring materials, silver wood, bamboo, GI sheets and timber for construction projects."
/>
      </Helmet>
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="hero-bg-text">
          SINCE 1984
        </div>

        <span className="hero-tag">
          OUR LEGACY
        </span>

        <h1>
          More Than A Timber Store.
          <br />
          A Foundation For Thousands
          Of Construction Dreams.
        </h1>

       

      </section>

      {/* TIMELINE */}

      <section className="timeline-section">

        <div className="timeline-heading">

          <span>OUR JOURNEY</span>

          <h2>
            Four Decades Of
            Trust & Excellence
          </h2>

        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-year">
              1984
            </div>

            <h3>Business Founded</h3>

            <p>
              Abdul Hamid Timber Mart began its journey
              with a commitment to quality timber and
              honest service.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-year">
              1998
            </div>

            <h3>Expanded Inventory</h3>

            <p>
              Added premium plywood, bamboo and
              construction materials to serve
              larger projects.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-year">
              2012
            </div>

            <h3>Regional Growth</h3>

            <p>
              Became a trusted supplier for contractors,
              developers and infrastructure projects
              across the region.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-year">
              Today
            </div>

            <h3>Industry Trusted</h3>

            <p>
              Proudly serving thousands of customers
              while maintaining the same values
              since day one.
            </p>

          </div>

        </div>

      </section>

      {/* STORY SECTION */}

      <section className="story-section">

        <div className="story-image">
          
<img src={constructionImg} alt="Construction" />

        </div>

        <div className="story-content">

          <span>OUR STORY</span>

          <h2>
            Building Relationships
            Before Buildings
          </h2>

          <p>
            At Abdul Hamid Timber Mart, we believe that
            every successful construction project begins
            with reliable materials and trustworthy
            partnerships.
          </p>

          <p>
            From residential homes and commercial spaces
            to infrastructure developments, our products
            have contributed to countless projects over
            the last four decades.
          </p>

          <p>
            Our reputation has been built through quality,
            consistency, transparent pricing and an
            unwavering commitment to customer
            satisfaction.
          </p>

        </div>

      </section>

      {/* BIG STATS */}



{/* MATERIAL SHOWCASE */}


{/* WHY TRUST US */}

<section className="trust-section">

  <span>WHY CONTRACTORS TRUST US</span>

  <h2>
    Built On Reliability,
    Not Promises
  </h2>

  <div className="trust-grid">

    <div className="trust-card">

      <h3>Premium Quality</h3>

      <p>
        Every product is carefully selected to
        meet professional construction standards.
      </p>

    </div>

    <div className="trust-card">

      <h3>Full Transparency</h3>

      <p>
        We believe in honest business. Our printed bills clearly detail rates, CFT, and RFT measurements so our customers always have a clear understanding of their purchase..
      </p>

    </div>

    <div className="trust-card">

      <h3>Reliable Stock</h3>

      <p>
        Consistent inventory availability for
        uninterrupted project execution.
      </p>

    </div>

    <div className="trust-card">

      <h3>40+ Years Trust</h3>

      <p>
        A reputation built over decades through
        honesty and customer satisfaction.
      </p>

    </div>

  </div>

</section>

{/* CTA */}

<section className="about-cta">

  <div className="cta-content">

    <span>READY TO BUILD?</span>

    <h2>
      Let's Discuss Your
      Next Project
    </h2>

    <p>
      Whether you're a homeowner, contractor
      or developer, we're ready to supply the
      materials you need.
    </p>

  <Link to="/contact">
  <button>
    Contact Us
  </button>
</Link>

  </div>

</section>

    </div>
    </>
  );
}

export default About;