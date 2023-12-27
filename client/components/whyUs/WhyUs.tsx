import React from "react";
import WhyUsCard from "./WhyUsCard";
import { whyUsContents } from "@/constants/whyus";

function WhyUs() {
  return (
    <section className="whyus__container">
      {whyUsContents.map((content, index) => (
        <div key={content.id} className="card" style={{top: `calc(var(--navbar-offset) * ${(index +1 )})`}}>
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
