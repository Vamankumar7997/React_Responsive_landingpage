import React from "react";
import styles from "./Hero.module.css";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Search Location"
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
          <button className={styles.btn}>Search for cars</button>
          <FaSearch size={20} className={styles.icon} />
        </div>
      </form>
    </div>
  );
};

export default Hero;
