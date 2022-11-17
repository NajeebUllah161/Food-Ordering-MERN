import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BSE Burger Wala</h2>
        <p>We are trying to give you the best taste possible</p>
        <br />
        <em>We give attention to genuine feedback</em>
        <strong>All rights reserved @bseburgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a
          rel="noreferrer"
          target="_blank"
          href="http://youtube.com/6packprogrammer"
        >
          <AiFillYoutube />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="http://instagram.com/meabhisingh"
        >
          <AiFillInstagram />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="http://github.com/NajeebUllah161"
        >
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
