import { useEffect, useState } from "react";
import "../styles/hero-carousel.css";

const images = [
  "/images/calibracion.jpg",
  "/images/temperatura.jpg",
  "/images/presion.jpg",
  "/images/volumen.jpg",
  "/images/masas.jpg",
  "/images/longitud.jpg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt=""
          className={i === index ? "active" : ""}
        />
      ))}
    </div>
  );
}
