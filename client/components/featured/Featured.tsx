import React from "react";
import FeatureCard from "./FeatureCard";
import { featuredCategories } from "@/constants/featured";

function Featured() {
    
  return (
    <section className="featured__contianer">
      <div className="four-box">
        {featuredCategories.slice(0, 4).map((item) => (
          <FeatureCard
            linkText={item.name}
            imageUrl={item.url}
            key={item.id}
            link={item.link}
          />
        ))}
      </div>
      <div className="one-box">
        {featuredCategories.length > 4 && (
          <FeatureCard
            linkText={featuredCategories[4].name}
            imageUrl={featuredCategories[4].url}
            key={featuredCategories[4].id}
            link={featuredCategories[4].link}
          />
        )}
      </div>
    </section>
  );
}

export default Featured;
