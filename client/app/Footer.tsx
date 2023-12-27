import DataList from "@/components/utils/DataList";
import EmailSubscribe from "@/components/utils/EmailSubscribe";
import { footerLinkList } from "@/constants/footer";
import Image from "next/image";
import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="site-name">
          <div className="logo">
            <Image src="/Assets/Logo.svg" alt="HomeDecor" fill={true} />
          </div>
          <span>Home Decor</span>
        </div>

        <div className="about-grid">
          <DataList title="Company" linkList={footerLinkList.company}/>
          <DataList title="Help" linkList={footerLinkList.Help}/>

          <div className="news-letter">
            <p className="title">Newsletter</p>
            <p className="para"> Be the first to hear about exclusive offers,blogs and products</p>
            <EmailSubscribe/>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
