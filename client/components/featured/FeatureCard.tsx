import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IFeatureCard {
  linkText: string;
  imageUrl: string;
  link: string;
}

function FeatureCard({ linkText, imageUrl, link }: IFeatureCard) {  
  return (
    <div className="card__container">
      <div className="image__container">
        <Image
          src={imageUrl}
          alt={linkText}
          fill={true}
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-title">
        <Link href={link} >
          <span className="">{linkText}</span>
        </Link>
      </div>
    </div>
  );
}

export default FeatureCard;
