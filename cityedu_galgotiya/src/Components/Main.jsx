import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";
import Modal from "./Modal/Modal";
import CourseCard from "./cards/CourseCard";

const Main = () => {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("bachelor"); // Initial active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <Fade cascade damping={0.5}>
        <div className="row main-head-text-of-landing-page">
          <div className="col-md-8 text-white">
            <p className="head-text-of-page">GALGOTIAS </p>
            <p className="second-head-text-of-page"> UNIVERSITY, BANGALORE</p>
            <p className="span-text-of-page">
              Discover Your Path to Success at Galgotias University.
            </p>
            <p className="span-text-of-page-two ">Admission Open 2024-25</p>
          </div>

          <div className="col-md-3">
            <Form />
          </div>
        </div>
      </Fade>
      <div className="main-container mb-5">
        <HeadText value={"overview"}></HeadText>
        <div className="row main-overview-of-page">
          <div className="col-md-4">
            <img
              className="overview-image"
              src={require("../Assets/overview.png")}
              alt=""
            />
          </div>
          <div className="col-md-7 p-3">
            <p>
              Galgotias University Delhi, situated at Yamuna Expy, opposite
              Buddha International Circuit, Sector 17A, Greater Noida, Uttar
              Pradesh 203201, enjoys convenient connectivity. The nearest
              airport is the Indira Gandhi International Airport, located 62 km
              away, while the Maripat Railway Station serves as the closest
              railway station, just 8.1 km from the campus. The GGU Bus Stand is
              only 1.1 km away from Galgotias Greater Noida for local commuting.{" "}
              <br /> <br />
              Established in 2011, Galgotias University in Greater Noida is a
              private state university recognized by the University Grants
              Commission (UGC). It offers various undergraduate, postgraduate,
              and doctoral programs across various disciplines including arts,
              humanities, social sciences, medicine, hospitality, media, and
              more.
            </p>
          </div>
        </div>
        <HeadText value={"Courses Offered"} />
        <div className="row">
          <div className="col-md-12 m-auto h-auto App">
            <div className="tabs">
              <div
                className={`tab ${
                  activeSection === "bachelor" ? "active" : ""
                } `}
                onClick={() => handleSectionClick("bachelor")}
              >
                Bachelor's
              </div>
              <div
                className={`  tab ${
                  activeSection === "master" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("master")}
              >
                Master's
              </div>
            </div>
            <div className="content">
              {activeSection === "bachelor" && (
                <div className="bachelor-and-section col-md-12">
                  <CourseCard
                    CourseName={"BE / B.Tech"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/B.Tech.jpg")}
                  />
                  <CourseCard
                    CourseName={"BBA"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/Bachelor of Business Administration.jpg")}
                  />
                  <CourseCard
                    CourseName={"B.Com (Hons.)"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/Bachelor of Commerce.jpg")}
                  />

                  <CourseCard
                    CourseName={"B.Sc"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/Bachelor of Science(Hons.).jpg")}
                  />
                  <CourseCard
                    CourseName={"B.Ed"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/B.Ed.jpg")}
                  />
                  <CourseCard
                    CourseName={"BCA"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/Bachelor of Computer Applications.jpg")}
                  />

                  <CourseCard
                    CourseName={"L.L.B (Hons.)"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/LL.B..jpg")}
                  />

                  <CourseCard
                    CourseName={"BHM"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/BHM.jpg")}
                  />
                  <CourseCard
                    CourseName={"B.Des"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/B.Des.jpg")}
                  />
                  <CourseCard
                    CourseName={"BPT"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/BPT.png")}
                  />
                </div>
              )}
              {activeSection === "master" && (
                <div className="bachelor-and-section">
                  <CourseCard
                    CourseName={"MBA"}
                    DegreeName={"Master"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/MBA.jpg")}
                  />

                  <CourseCard
                    CourseName={"M.Sc (Fashion Design)"}
                    DegreeName={"Master"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/M.Sc..jpg")}
                  />
                  <CourseCard
                    CourseName={"MCA"}
                    DegreeName={"Master"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/MCA.jpg")}
                  />
                  <CourseCard
                    CourseName={"M.Com"}
                    DegreeName={"Master"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/MCom.png")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <HeadText value={"Placement"} />
        <div className="row ">
          <div class="col-md-12 ">
            <h5
              style={{ textAlign: "center", padding: "0% 5%" }}
              className="col-md-11 m-auto pb-4 "
            >
              Galgotias University's placement cell manages placement
              activities, securing over 8,500 job offers.
            </h5>
            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-5">
                <li class="c1" style={{ backgroundColor: "#da2032" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    8,500+
                  </span>{" "}
                  Total No. of Offers
                </li>
                <li class="c2" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 1.5{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>CPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c3" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 850+
                  </span>
                  Total Recruiters
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 5.25{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>CPA</small>
                  </span>{" "}
                  Average Package{" "}
                </li>
                <li class="c4" style={{ backgroundColor: "#0011e6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 32%{" "}
                  </span>{" "}
                  Multiple Offers
                </li>
              </ul>
            </div>
          </div>
        </div>
        <HeadText value={"top Recruiters"} />
        <div
          className="row main-Top-Recruiters"
          style={{ overflowX: "hidden" }}
        >
          {/* <div className="col-md-12 Top-Recruiters">
            <img src={require("../Assets/slide-image/01.png")} alt="" />
            <img src={require("../Assets/slide-image/19.png")} alt="" />
            <img src={require("../Assets/slide-image/Capgemini.png")} alt="" />
            <img
              src={require("../Assets/slide-image/Celebal-Technologies.jpeg")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/Focus Edumatics.jpeg")}
              alt=""
            />
            <img
              src={require("../Assets/slide-image/L&T Technology Service.jpeg")}
              alt=""
            />
            <img src={require("../Assets/slide-image/Skolar.png")} alt="" />
            <img src={require("../Assets/slide-image/congnizent.jpg")} alt="" />
            <img src={require("../Assets/slide-image/hcl.png")} alt="" />
            <img src={require("../Assets/slide-image/mindtree.jpeg")} alt="" />
            <img src={require("../Assets/slide-image/mtx.png")} alt="" />
            <img src={require("../Assets/slide-image/01.png")} alt="" />
            <img src={require("../Assets/slide-image/19.png")} alt="" />
            <img src={require("../Assets/slide-image/Capgemini.png")} alt="" />
          </div> */}
        </div>
        <Bounce duration={1000}>
          <div className="row main-contact-us mt-5 mb-5">
            {show ? <Modal cancel={setShow} /> : null}
            <div className="col-md-12 contact-us p-5">
              <h1 style={{ color: "white" }}>
                To Know About Eligibility Criteria and Admission Process
              </h1>

              <button
                className="contact-button"
                style={{ width: "14rem" }}
                onClick={() => setShow(true)}
              >
                {" "}
                Click Herer!
              </button>
            </div>
          </div>
        </Bounce>

        <HeadText value="Why Choose Galgotiyas University?" />
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-4 d-none d-md-block m-auto">
            <img
              src={require("../Assets/f14d6c0a5773675a110f0fbb4988efa6-removebg-preview.png")}
              alt=""
              className="why-chose-us-image"
            />
          </div>
          <div className="col-md-8 ">
            <ul className="why-chose-reva">
              <Fade delay={200}>
                <li>23,000+ students, including 750+ international ones</li>
              </Fade>
              <Fade delay={400}>
                <li>Top-ranked in Engineering, Medical, Management, and Law</li>
              </Fade>

              <Fade delay={600}>
                <li>450+ MNC placements within 15 days, with 1,500+ offers</li>
              </Fade>
              <Fade delay={800}>
                <li>Full and partial scholarships for meritorious students</li>
              </Fade>
              <Fade delay={1000}>
                <li>180+ state-of-the-art laboratories</li>
              </Fade>

              <Fade delay={1200}>
                <li>
                  Collaboration with MSME for startups, completing 75 Lacs+
                  research projects
                </li>
              </Fade>
              <Fade delay={1400}>
                <li>Foreign study tours for global exposure</li>
              </Fade>
            </ul>
          </div>
        </div>

        <HeadText value={"Campus Life"} />
        <Fade delay={500} direction="left">
          <div className="row main-campus-life">
            <div className="col-md-12 campus-life">
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/hostel.png")} alt="" />{" "}
                <h6> HOSTEL ACCOMMODATION</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/library.png")} alt="" />{" "}
                <h6>LIBRARY</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/sports.png")} alt="" />{" "}
                <h6>SPORTS COMPLEX</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/movie-theater.png")} alt="" />{" "}
                <h6>AUDITORIUM's</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/cafe.png")} alt="" />{" "}
                <h6>CAFETERIA</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/gym.png")} alt="" /> <h6>GYM</h6>
              </div>

              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/wifi.png")} alt="" />{" "}
                <h6>WI-FI CAMPUS</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/home (1).png")} alt="" />{" "}
                <h6>Air-conditioned classrooms </h6>
              </div>
            </div>
          </div>
        </Fade>
        <HeadText value="Approvals and Accreditations" />
        <Fade delay={250}>
          <div className="row main-approval-and-acredation">
            <div className="col-md-12 approval-and-acredation">
              <img src={require("../Assets/NAAC.png")} alt="" />
              <img src={require("../Assets/AICTE.png")} alt="" />
              <img src={require("../Assets/ugc-removebg-preview.png")} alt="" />
            </div>
          </div>
        </Fade>

        {/* <HeadText value={"Ranks and Awards"} /> */}
        {/* <div
          className="row d-flex justify-content-center align-items-center gap-5"
          style={{ flexWrap: "wrap" }}
        >
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> QS Asian University Rankings</h2>
            <p>
              Ranked 6th among all private universities in Karnataka in 2023
            </p>
            <p>
              Secured the 47th position among all private universities in India
            </p>
          </div>
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> IIRF Rankings</h2>
            <p>
              Ranked 17th in the country and 5th in Karnataka for Architecture.
            </p>
            <p>
              Ranked 18th in the country and 4th in Karnataka for Law in 2023
            </p>
          </div>
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> FORTUNE India's Best B-Schools Rankings</h2>
            <p>Ranked 7th in Bangalore City.</p>
            <p>Ranked 92nd pan India.</p>
          </div>
          <div className="col-md-5 ranks">
            <h2 className="pb-4"> QS I-Gauge Ratings</h2>
            <p>"Diamond" University Rating for Overall Excellence</p>
            <p style={{ letterSpacing: "1px" }}>
              "Diamond" University Ratings for Employability, Diversity &
              Accessibility, Facilities, and Social Responsibility.
            </p>
          </div>
        </div> */}

        {/* <div className="row main-contact-us mt-5 mb-5">
          {show ? <Modal cancel={setShow} /> : null}
          <div className="col-md-12 contact-us p-5">
            <h1 style={{ color: "white" }}>
              To learn more about the Admission and selection process, contact
              us now!
            </h1>

            <button
              className="contact-button"
              style={{ width: "14rem" }}
              onClick={() => setShow(true)}
            >
              {" "}
              Click Herer!
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Main;

// const [show, setShow] = useState(false);

// {show ? <Modal cancel = {setShow}/> : null}

// {
//   /* <button onClick={() => setShow(true)}>Fuck you</button> */
// }
