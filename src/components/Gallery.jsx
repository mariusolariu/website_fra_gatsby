import React, { useEffect, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ORDERED = [
  { name: "pancarda", alt: "Pancarda exterioară a cabinetului" },
  { name: "intrare", alt: "Intrare în cabinet" },
  { name: "sala_asteptare", alt: "Sala de așteptare" },
  { name: "sala_asteptare_1", alt: "Sala de așteptare" },
  { name: "sala_asteptare_2", alt: "Sala de așteptare" },
  { name: "sala_asteptare_3", alt: "Sala de așteptare" },
  { name: "cabinet", alt: "Interiorul cabinetului" },
  { name: "cabinet1", alt: "Interiorul cabinetului" },
  { name: "cabinet2", alt: "Interiorul cabinetului" },
  { name: "cabinet3", alt: "Interiorul cabinetului" },
];

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(filter: { relativeDirectory: { eq: "cabinetBocsa" } }) {
        edges {
          node {
            name
            childImageSharp {
              thumb: fluid(maxWidth: 600, quality: 75) {
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1600, quality: 85) {
                src
              }
            }
          }
        }
      }
    }
  `);

  const byName = {};
  data.allFile.edges.forEach(({ node }) => {
    byName[node.name] = node;
  });

  const images = ORDERED.filter((o) => byName[o.name]).map((o) => ({
    alt: o.alt,
    thumb: byName[o.name].childImageSharp.thumb,
    fullSrc: byName[o.name].childImageSharp.full.src,
  }));

  const [openIndex, setOpenIndex] = useState(null);
  const triggerRefs = useRef([]);
  const touchStart = useRef(null);

  const isOpen = openIndex !== null;

  const SWIPE_THRESHOLD_PX = 45;

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) {
      setOpenIndex((i) => (i + 1) % images.length);
    } else {
      setOpenIndex((i) => (i - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const total = images.length;
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
      } else if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i - 1 + total) % total);
      } else if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i + 1) % total);
      }
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, images.length]);

  const handleClose = () => {
    const idx = openIndex;
    setOpenIndex(null);
    if (idx !== null && triggerRefs.current[idx]) {
      triggerRefs.current[idx].focus();
    }
  };

  const handlePrev = () => {
    setOpenIndex((i) => (i - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setOpenIndex((i) => (i + 1) % images.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("lightbox")) handleClose();
  };

  return (
    <>
      <section className="section">
        <div className="section-head">
          <span className="eyebrow">Cabinetul</span>
          <h2>Cum arată cabinetul din Bocșa</h2>
          <p>Apăsați pe orice fotografie pentru a o vedea mai mare.</p>
        </div>
        <div className="gallery">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className="gallery-item"
              aria-label={`Mărește: ${img.alt}`}
              onClick={() => setOpenIndex(i)}
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
            >
              <Img fluid={img.thumb} alt={img.alt} />
            </button>
          ))}
        </div>
      </section>

      <div
        className={"lightbox" + (isOpen ? " open" : "")}
        role="dialog"
        aria-modal="true"
        aria-label="Galerie foto"
        onClick={handleBackdropClick}
        onTouchStart={isOpen ? handleTouchStart : undefined}
        onTouchEnd={isOpen ? handleTouchEnd : undefined}
      >
        {isOpen && (
          <>
            <button
              type="button"
              className="lightbox-close"
              aria-label="Închide galeria"
              onClick={handleClose}
            >
              ×
            </button>
            <button
              type="button"
              className="lightbox-nav prev"
              aria-label="Imagine anterioară"
              onClick={handlePrev}
            >
              ‹
            </button>
            <img src={images[openIndex].fullSrc} alt={images[openIndex].alt} />
            <button
              type="button"
              className="lightbox-nav next"
              aria-label="Imagine următoare"
              onClick={handleNext}
            >
              ›
            </button>
          </>
        )}
      </div>
    </>
  );
}
