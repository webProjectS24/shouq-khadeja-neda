import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "bleck",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="footer-container"
        style={{ display: "flex", gap: "15px", flexGrow: 1 }}
      >
        <div className="column" style={{ flex: 1 }}>
          <div className="row">
            <h3 style={{ textDecoration: "underline", color: "white" }}>
              About Us
            </h3>
            <p>
              Welcome to NSK We are a passionate team dedicated to providing
              unique experience.
            </p>
          </div>
        </div>
        <div className="column" style={{ flex: 1 }}>
          <div className="row ">
            <h3 style={{ textDecoration: "underline", color: "white" }}>
              {" "}
              Contact Us
            </h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>

        <div className="column" style={{ flex: 2 }}>
          <div className="row">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* <div className="row">
            <h3 style={{textDecoration: 'underline', color: 'black'}}>Follow Us</h3>
            <div className="social-media-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div> */}
        </div>
        <div className="column" style={{ flex: 1 }}>
          <div className="row">
            <h3 style={{ textDecoration: "underline", color: "white" }}>
              Newsletter
            </h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="copy-right"
        style={{ textAlign: "center", marginTop: "90px" }}
      >
        &copy; 2024 NSK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
