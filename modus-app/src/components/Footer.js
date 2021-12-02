import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="map">
        <span className="phoneemail">
          <a href="https://google.com">
            <button
              className="phone"
              onclick="window.open('http://google.com','_blank')"
            >
              <FaPhone size={20} style={{ fill: "white" }} />
              {/* <FaPhone size={20} /> */}
              <p>010-123-4567</p>
            </button>
          </a>
          <a href="https://google.com">
            <button className="email">
              <FaEnvelope size={20} style={{ fill: "white" }} />
              {/* <FaEnvelope size={20} /> */}
              <p>abcde@gmail.com</p>
            </button>
          </a>
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12149.317423197615!2d-86.9211946!3d40.4237054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eccb2cf8b1a7c8e!2sPurdue%20University!5e0!3m2!1sen!2sus!4v1637545782214!5m2!1sen!2sus"
          width="400"
          height="300"
        //   style="border:0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <h3>Modus.AI</h3>
      <p>
        Copyright @2021 <a href="google.com">Modus.ai</a>. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;