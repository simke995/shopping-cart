import { CgFacebook } from "react-icons/cg";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

// styles
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles["footer__navigation"]}>
        <li>
          <a
            href="https://www.facebook.com/"
            className={styles["footer__link"]}
          >
            <CgFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" className={styles["footer__link"]}>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            className={styles["footer__link"]}
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" className={styles["footer__link"]}>
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            className={styles["footer__link"]}
          >
            <RiInstagramFill />
          </a>
        </li>
      </ul>
      <p>Info - Support - Marketing</p>
      <p>Terms of Use - Privacy Policy</p>
      <p>©Copyright. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
