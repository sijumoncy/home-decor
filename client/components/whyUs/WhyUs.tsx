import React from "react";
import WhyUsCard from "./WhyUsCard";
import { whyUsContents } from "@/constants/whyus";

function WhyUs() {
  return (
    <section className="whyus__container">
      {whyUsContents.map((content) => (
        <div key={content.id} className="card">
          <WhyUsCard
            {...content}
            imageUrl={`/Assets/whyus${content.id}.webp`}
            bgCss={content.bgColor}
          />
        </div>
      ))}
    </section>
  );
}

export default WhyUs;
