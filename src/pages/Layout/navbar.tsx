import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>Trust Mart</div>
        <div className={styles.flex}>
          <Link className={styles.nav} href={"/"}>
            Home
          </Link>
          <Link className={styles.nav} href={"/products"}>
            Products
          </Link>
          <Link className={styles.nav} href={"/contactus"}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className={styles.search}></div>
    </>
  );
};

export default Navbar;
