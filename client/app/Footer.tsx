import DataList from "@/components/utils/DataList";
import EmailSubscribe from "@/components/utils/EmailSubscribe";
import { contact, footerLinkList } from "@/constants/footer";
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
          <DataList title="Company" linkList={footerLinkList.company} />
          <DataList title="Help" linkList={footerLinkList.Help} />

          <div className="news-letter">
            <p className="title">Newsletter</p>
            <p className="para">
              {" "}
              Be the first to hear about exclusive offers, blogs and products
            </p>
            <EmailSubscribe />
          </div>

          <div className="contact">
            <p className="title">Contact</p>

            <div className="cmp-details">
              <p className="name">{contact.registration.name}</p>
              <span>CIN </span>
              <strong className="regno">{contact.registration.regNo}</strong>
            </div>

            <div className="cmp-address">
              {contact.address.address1.map((add, index) => (
                <p key={index}>{add}</p>
              ))}
            </div>

            <a href={`mailto:${contact.email}`}>{ contact.email}</a>

            <div className="cmp-phone">
                {contact.phone.map((ph, index) => (
                    <span key={index}>{ph}</span>
                ))}
            </div>

          </div>
          
        </div>
        <div className="copyright">
            © 2023 - Home Decor Ltd. Developed By Siju
        </div>
      </div>
    </footer>
  );
}

export default Footer;
