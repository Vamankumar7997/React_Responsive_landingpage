import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch, FaUserAlt, FaBars, FaRegWindowClose } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="images" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/#">Learn More</a>
          </li>
          <li>
            <a href="/#">Log in</a>
          </li>
          <li>
            <a href="/#">Sign up</a>
          </li>
          <li>
            <FaSearch size={20} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <FaUserAlt size={20} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <FaRegWindowClose size={20} /> : <FaBars size={20} />}
      </div>
    </header>
  );
};

export default Navbar;
