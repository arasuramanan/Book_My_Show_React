import React from 'react';

function Footer() {
  return (
    // Footer
    <footer className="bg-dark text-center text-white">
      {/* Grid container */}
      <div className="container p-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" role="button">
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/?hl=en" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/home" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>

      

        {/* Section: Text */}
        <section className="mb-4">
          <p>
  The Content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use in prohibited and punishable by law.
          </p>
        </section>

      
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"> Arasu Ramanan</a>
      </div>
    </footer>
  );
}

export default Footer;
