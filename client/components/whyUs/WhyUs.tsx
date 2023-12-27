import React from "react";
import WhyUsCard from "./WhyUsCard";
import { whyUsContents, whyUsOffers } from "@/constants/whyus";
import Image from "next/image";

function WhyUs() {
  return (
    <section className="whyus__container">
      <div>
        {whyUsContents.map((content, index) => (
          <div
            key={content.id}
            className="card"
            style={{ top: `calc(var(--navbar-offset) * ${index + 1})` }}
          >
            <WhyUsCard
              {...content}
              imageUrl={`/Assets/whyus${content.id}.webp`}
              bgCss={content.bgColor}
            />
          </div>
        ))}
      </div>

      <div className="features_section">
        <p className="title">{whyUsOffers.title}</p>
        <div className="feature-grid">
          {whyUsOffers.offers.map((feature) => (
            <div key={feature.id} className="feature-box">
              <div className="feature-img">
                <Image
                  src={feature.img}
                  alt="quality"
                  className="icon"
                  fill={true}
                />
              </div>
              <div className="feature-content">
                <p className="head">{feature.point}</p>
                <p className="para">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="full-preview">
        <Image
          src="/Assets/home.webp"
          alt="preview-work"
          fill={true}
          className="preview-img"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default WhyUs;
