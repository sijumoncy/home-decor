import Image from "next/image";
import React from "react";

interface IWhyUsCard {
  id: string | number;
  step: string | number;
  stepAlpha: string;
  head: string;
  tagline: string;
  title: string;
  description: string;
  description2?: string;
  imageUrl: string;
  bgCss ?: string;
}

function WhyUsCard(content: IWhyUsCard) {
  return (
    <div className="whyuscard___container" 
      style={{background: content.bgCss ? content.bgCss : '#fff'}}>
      <div className="header">
        <div className="left">
          <span>STEP {content.id.toString().padStart(2)}</span>
          <span>{content.stepAlpha}</span>
          <span>{content.head}</span>
        </div>
        <div className="right">
          <p>{content.tagline}</p>
        </div>
      </div>

      <div className="content">
        <div className="image-box-left">
          <Image
            src={content.imageUrl}
            fill={true}
            alt={content.stepAlpha}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="content-text">
          <div className="title">
            <p>{content.title}</p>
          </div>
          <div className="para">
            <p>{content.description}</p>
            {content.description2 && <p>{content.description2}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsCard;
