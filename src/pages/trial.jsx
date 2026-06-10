
import { Link } from "react-router-dom";
import "../styles/Materials.css";

// images from assets (same names you mentioned)
import Bamboo from "../assets/Bamboo.png";
import Gisheet from "../assets/Gi sheets.png";
import Munda from "../assets/Munda.png";
import Silverwood from "../assets/Silverwood_material.png";
import Plywood from "../assets/Plywood_pf_mf.png";

function Materials() {
  const products = [
    {
      name: "Bamboo",
      size: "2ft – 24ft",
      image: Bamboo,
      desc: "Strong, flexible and eco-friendly bamboo used in scaffolding and construction support. Widely preferred for temporary structures due to durability and cost efficiency."
    },
    {
      name: "G.I Sheet",
      size: "8ft – 12ft",
      image: Gisheet,
      desc: "Galvanized iron sheets used in roofing and cladding. Highly resistant to rust, weather conditions and long-term exposure."
    },
    {
      name: "Munda (Casuarina pole)",
      size: "8ft – 20ft",
      image: Munda,
      desc: "Heavy-duty wooden poles used for shuttering and construction support. Known for strength and load-bearing capacity in site work."
    },
    {
      name: "Silver Wood",
      size: "4×1.5, 6×1.5, 4×3",
      image: Silverwood,
      desc: "Premium quality silver wood used in framing and structural work, available in mutiple specifications including 7”dora, 7.5dora, 8dora and calicut for smooth finish and long lasting durability."
    },
    {
      name: "Shuttering plywood PF grade / MR grade",
      size: "4×1.5, 6×1.5, 4×3",
      image: Plywood,
      desc: "High-quality plywood used in shuttering, interiors and construction. Water-resistant and ideal for heavy-duty usage."
    }
  ];

  return (
    <div className="catalog-page">

      {/* HERO */}
      <section className="catalog-hero">
        <span>OUR INVENTORY</span>

        <h1>Premium Construction Materials</h1>

        <p>
          Trusted supplier of timber, plywood, bamboo and GI sheets
          for builders, contractors and homeowners since 1984.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="catalog-showcase">

        {products.map((item, index) => (
          <div
            className={`catalog-item ${
              index % 2 === 1 ? "catalog-reverse" : ""
            }`}
            key={index}
          >

            <div className="catalog-image">
              <img src={item.image} alt={item.name} />

              <div className="catalog-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="catalog-size">
                {item.size}
              </div>
            </div>

            <div className="catalog-content">

              <span>Construction Grade Material</span>

              <h2>{item.name}</h2>

              <p>{item.desc}</p>

              <Link to="/contact" className="catalog-btn">
                Request Quote
              </Link>

            </div>

          </div>
        ))}

      </section>

    </div>
  );
}

export default Materials;