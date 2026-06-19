import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "../styles/Materials.css";
import { Helmet } from "react-helmet-async";
import Bamboo from "../assets/Bamboo1.png";
import Gisheet from "../assets/Gi sheets1.png";
import Munda from "../assets/Munda1.png";
import Silverwood from "../assets/Silverwood_material.png";
import Plywood from "../assets/Plywood_pf_mf.png";
import { useLocation } from "react-router-dom";

function Materials() {
  const location = useLocation();
  const products = [
    {
       id: "bamboo",
      name: "Bamboo",
      size: "2ft – 24ft",
      image: Bamboo,
      gallery: [Bamboo, Bamboo, Bamboo, Bamboo],
      desc: "Strong, flexible and eco-friendly bamboo used in scaffolding and construction support. Widely preferred for temporary structures due to durability and cost efficiency."
    },
    {
      id: "gi-sheet",
      name: "G.I Sheet",
      size: "8ft – 12ft",
      image: Gisheet,
      gallery: [Gisheet, Gisheet, Gisheet, Gisheet],
      desc: "Galvanized iron sheets used in roofing and cladding. Highly resistant to rust, weather conditions and long-term exposure."
    },
    {
      id: "munda",
      name: "Munda (Casuarina pole)",
      size: "8ft – 20ft",
      image: Munda,
      gallery: [Munda, Munda, Munda, Munda],
      desc: "Heavy-duty wooden poles used for shuttering and construction support. Known for strength and load-bearing capacity in site work."
    },
    {
      id: "silver-wood",
      name: "Silver Wood",
      size: "4×1.5, 6×1.5, 4×3",
      image: Silverwood,
      gallery: [Silverwood, Silverwood, Silverwood, Silverwood],
      desc: "Premium quality silver wood used in framing and structural work, available in mutiple specifications including 7\"dora, 7.5dora, 8dora and calicut for smooth finish and long lasting durability."
    },
    {
      id: "shuttering-plywood",
      name: "Shuttering plywood PF grade / MR grade",
      size: "4×1.5, 6×1.5, 4×3",
      image: Plywood,
      gallery: [Plywood, Plywood, Plywood, Plywood],
      desc: "High-quality plywood used in shuttering, interiors and construction. Water-resistant and ideal for heavy-duty usage."
    }
  ];

  // ── Lightbox state ──
  const [lightbox, setLightbox] = useState(null); // { productIndex, slideIndex }

  const openLightbox = (productIndex) => {
    setLightbox({ productIndex, slideIndex: 0 });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const prevSlide = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      slideIndex:
        (prev.slideIndex - 1 + products[prev.productIndex].gallery.length) %
        products[prev.productIndex].gallery.length,
    }));
  }, [products]);

  const nextSlide = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      slideIndex:
        (prev.slideIndex + 1) % products[prev.productIndex].gallery.length,
    }));
  }, [products]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, prevSlide, nextSlide]);


  const activeProd = lightbox ? products[lightbox.productIndex] : null;

  useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}, [location]);

  return (
    <>
    <Helmet>
  <title>Our Materials | Abdul Hamid Timber Mart</title>
  <meta
    name="description"
    content="Explore our range of timber, plywood, bamboo and construction materials for residential, commercial and infrastructure projects."
  />
</Helmet>
    <div className="catalog-page">

      {/* HERO */}
     <section className="catalog-hero">
  <span>OUR INVENTORY</span>

  <h1>Quality Materials. Reliable Supply. Trusted Since 1984.</h1>

  <p>
    Explore our extensive collection of construction and timber materials,
    including Shuttering plywood PF grade / MR grade, Silver Wood, bamboo,
    and G.I. sheets. We combine quality products, dependable service,
    and decades of expertise to support projects of every scale.
  </p>
</section>

      {/* PRODUCTS */}
      <section className="catalog-showcase">
        {products.map((item, index) => (
          <div
          id={item.id}
            className={`catalog-item ${index % 2 === 1 ? "catalog-reverse" : ""}`}
            key={index}
          >
            <div className="catalog-image">
              {/* Clickable image — opens lightbox */}
              <img
                src={item.image}
                alt={item.name}
                onClick={() => openLightbox(index)}
                style={{ cursor: "zoom-in" }}
                title="Click to view more images"
              />

              <div className="catalog-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="catalog-size">{item.size}</div>

              {/* Small hint badge */}
              <div className="catalog-view-more" onClick={() => openLightbox(index)}>
                <span>⊕ View Gallery</span>
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

      {/* ── LIGHTBOX MODAL ── */}
      {lightbox && activeProd && (
        <div className="lb-overlay" onClick={closeLightbox}>
          <div className="lb-modal" onClick={(e) => e.stopPropagation()}>

            {/* Close */}
            <button className="lb-close" onClick={closeLightbox} aria-label="Close gallery">
              ✕
            </button>

            {/* Header */}
            <div className="lb-header">
              <h3>{activeProd.name}</h3>
              <span>{lightbox.slideIndex + 1} / {activeProd.gallery.length}</span>
            </div>

            {/* Image stage */}
            <div className="lb-stage">
              <button className="lb-arrow lb-prev" onClick={prevSlide} aria-label="Previous image">
                ‹
              </button>

              <div className="lb-img-wrap">
                {activeProd.gallery.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${activeProd.name} view ${i + 1}`}
                    className={`lb-slide ${i === lightbox.slideIndex ? "lb-slide--active" : ""}`}
                  />
                ))}
              </div>

              <button className="lb-arrow lb-next" onClick={nextSlide} aria-label="Next image">
                ›
              </button>
            </div>

            {/* Dot indicators */}
            <div className="lb-dots">
              {activeProd.gallery.map((_, i) => (
                <button
                  key={i}
                  className={`lb-dot ${i === lightbox.slideIndex ? "lb-dot--active" : ""}`}
                  onClick={() => setLightbox((prev) => ({ ...prev, slideIndex: i }))}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      )}

      

    </div>
    </>
  );
}

export default Materials;
