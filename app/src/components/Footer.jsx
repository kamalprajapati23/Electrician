import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning fw-bold">🔌 H&K Electricals Engineers</h5>
            <p>
              We provide reliable and safe electrical solutions for homes,
              industries, and government projects. 15+ years of experience in
              transformer setup, wiring, solar systems, and tenders.
            </p>
            <p>
              <FaMapMarkerAlt className="me-2 text-danger" />
              Lucknow, Uttar Pradesh, India
            </p>
            <p>
              <FaEnvelope className="me-2 text-success" />
              support@kamalelectricals.com
            </p>
          </div>

          {/* Developer Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-info fw-bold">💻 Developer Info</h5>
            <p>
              Website designed & developed by{" "}
              <strong>Kamal Prajapati</strong>, a full-stack web developer from
              Techpile Technology.
            </p>
            <p>Focused on performance, security & responsiveness.</p>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-success fw-bold">🌐 Connect With Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" className="text-white fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-4">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-4">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white fs-4">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} <strong>Kamal Electricals</strong> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
