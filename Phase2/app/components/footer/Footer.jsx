import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white flex items-center h-160 px-4">
     <div className="footer-container flex gap-20 flex-grow">
     <div className="column flex-1">
          <div className="row">
            <h3 className="underline">About Us</h3>
            <p>Welcome to NSK We are a passionate team dedicated to providing unique experience.</p>
          </div>
          </div>
          <div className="column" style={{ flex: 1 }}>
          <div className="row ">
            <h3 className="underline"> Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          </div>
        
        <div className="column" style={{ flex: 2 }}>
          <div className="row">
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
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
        <div className="column flex-1">
          <div className="row">
            <h3 className="underline">News letter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copy-right text-center mt-9">
        &copy; 2024 NSK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;