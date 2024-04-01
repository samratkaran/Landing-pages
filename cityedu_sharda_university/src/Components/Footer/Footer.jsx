import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="main-footer">
      <footer class="text-center text-lg-start  text-muted footer-of-page-alliance ">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span style={{ color: "white" }}>
              Get connected with us on social networks:
            </span>
          </div>

          <div class="all-link-in-footer">
            <a
              href="https://www.facebook.com/planeducollegeadmission?mibextid=gik2fB"
              class="me-4 text-reset"
            >
              <FaFacebook color="white" size={30} />
            </a>
            <a
              href=" https://www.instagram.com/planedu_?igsh=OGQ5ZDc2ODk2ZA=="
              class="me-4 text-reset"
            >
              <FaInstagram color="white" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/planedu/"
              class="me-4 text-reset"
            >
              <FaTwitter color="white" size={30} />
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6
                  class="text-uppercase fw-bold mb-4"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-gem me-3" style={{ color: "white" }}></i>Head
                  Office
                </h6>
                <a
                  href="https://maps.app.goo.gl/qrH8wFpXz8hzQxCaA"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  No-15,1st & 2nd Floor, Opp to RT Nagar Post Office, Next to
                  SBI ATM, RT Nagar Main Road,Bangalore- 560032
                </a>
              </div>

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6
                  class="text-uppercase fw-bold mb-4"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-gem me-3" style={{ color: "white" }}></i>
                  Branch Office
                </h6>
                <a
                  href="https://maps.app.goo.gl/S73rJXL1UysTHDZe9"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  925, 9th Floor, Tower B3, Spaze i-Tech Park, Badshahpur Sohna
                  Rd Hwy, Sector 49, Gurugram, Haryana 122018
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            color: "white",
          }}
        >
          © 2024 Copyright:
          <a
            class="text-reset fw-bold"
            style={{ paddingLeft: "1rem" }}
            href="https://cityeduguide.com/"
          >
            cityeduguide.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
