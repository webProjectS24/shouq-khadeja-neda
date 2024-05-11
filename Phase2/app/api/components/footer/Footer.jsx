import React from 'react';
import styles from "@/public/css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.row}>
            <h3>About Us</h3>
            <p>Welcome to NSK We are a passionate team dedicated to providing unique experience.</p>
          </div>
          </div>
          <div className={styles.column}>
          <div className={styles.row}>
            <h3> Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          </div>
        
        <div className={styles.column}>
          <div className="row">
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.row}>
            <h3>Follow Us</h3>
            <div className={styles.social}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            <h3>News letter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        &copy; 2024 NSK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;