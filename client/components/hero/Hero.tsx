import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="hero__container">
      <div className="img-container">
        <Image
          className="image"
          src="/Assets/hero1.jpg"
          alt="Banner1"
          fill={true}
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

export default Hero;
