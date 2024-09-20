import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-2 p-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>© {new Date().getFullYear()} Shopmaster. All Rights Reserved.</p>
          </div>
          <div>
          <div className="d-flex align-items-center">
            <h5 className="mb-0">Follow Us:</h5>
            <a href="https://www.facebook.com" className="text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
