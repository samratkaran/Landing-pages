import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Bounce, Fade } from "react-awesome-reveal";
import Accordion from "react-bootstrap/Accordion";
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
            <p className="head-text-of-page">
              AMITY <b className="text-light"> UNIVERSITY</b>
            </p>
            {/* <p className="second-head-text-of-page"> UNIVERSITY</p> */}
            <p className="span-text-of-page">
              If you are looking to shape your future and live your dreams
            </p>
            <p className="span-text-of-page-two ">Admission Open 2024-25</p>
          </div>

          <div className="col-md-3">
            <Form />
          </div>
        </div>
      </Fade>
      <div className="main-container mb-5">
        <div className="row main-overview-of-page">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "rgb(53, 48, 48)",
              fontSize: "4rem",
            }}
          >
            OVERVIEW
          </h1>

          <div className="col-md-11 p-3">
            <p>
              {" "}
              Amity University Noida, situated at G8VM+H69, Amity Road, Sector
              125, Noida, Uttar Pradesh, enjoys convenient access to
              transportation hubs. The Indira Gandhi International Airport lies
              approximately 27.2 km away, while the Harkesh Nagar Okhla Railway
              Station is the nearest at 9.2 km. For those traveling by bus, the
              Nehru Place Bus Stop is 11.9 km from the campus. Students can
              easily reach the university via cabs or taxis, ensuring seamless
              connectivity for their academic pursuits.
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
                    CourseName={"B.Com"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/Bachelor of Commerce.jpg")}
                  />
                  <CourseCard
                    CourseName={"BA"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/Bachelor of arts.jpg")}
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
                    CourseName={"B.Arch"}
                    DegreeName={"Bachelor"}
                    Duration={"4 Years"}
                    imageUrl={require("../Assets/couese-image/B.Arch.jpg")}
                  />
                  <CourseCard
                    CourseName={"B.Plan"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/B.Plan.jpg")}
                  />
                  <CourseCard
                    CourseName={"B.Pharma"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/B.Pharma.jpg")}
                  />
                  <CourseCard
                    CourseName={"L.L.B"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/LL.B..jpg")}
                  />
                  <CourseCard
                    CourseName={"BFA"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/BFA.jpg")}
                  />
                  <CourseCard
                    CourseName={"BHM"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/BHM.jpg")}
                  />
                  <CourseCard
                    CourseName={"B.Stat"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/B.Stat..jpg")}
                  />
                </div>
              )}
              {activeSection === "master" && (
                <div className="bachelor-and-section">
                  <CourseCard
                    CourseName={"MBA/PGDM"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MBA.jpg")}
                  />
                  <CourseCard
                    CourseName={"M.A."}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/M.A..png")}
                  />
                  <CourseCard
                    CourseName={"M.Sc."}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/M.Sc..jpg")}
                  />
                  <CourseCard
                    CourseName={"MCA"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MCA.jpg")}
                  />
                  <CourseCard
                    CourseName={"M.E./M.Tech"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/M.Tech.jpg")}
                  />
                  <CourseCard
                    CourseName={"M.Pharma"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/M.Pharma.jpg")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <HeadText value={"Placement"} />
        <div className="row ">
          <div class="col-md-12 ">
            <p
              style={{ textAlign: "justify", padding: "0% 5%" }}
              className="col-md-11 m-auto pb-4 "
            >
              Over 150,000 Amity alumni have successfully transitioned into top
              organizations worldwide, with over 500 leading corporates,
              including Fortune 500 employers, visiting the campus for
              recruitment. Noteworthy achievements include 36,000 campus
              placements in recent years, with 11,000 placements in 2021-22
              alone. Despite challenges, Amity secured 1500 campus placements
              even during the lockdown, with alumni drawing salaries of up to
              Rs. 2 crore p.a.
            </p>
            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-5">
                <li class="c1" style={{ backgroundColor: "#da2032" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    11,000+{" "}
                  </span>{" "}
                  Total No. of Offers
                </li>
                <li class="c2" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 61.75{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c3" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 1,050
                  </span>{" "}
                  Total Recruiters
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 5{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Average Package{" "}
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
          <div className="col-md-12 Top-Recruiters">
            <img src={require("../Assets/slide-image/01.png")} alt="" />
            <img src={require("../Assets/slide-image/02.png")} alt="" />
            <img src={require("../Assets/slide-image/03.png")} alt="" />
            <img src={require("../Assets/slide-image/04.png")} alt="" />
            <img src={require("../Assets/slide-image/05.png")} alt="" />
            <img src={require("../Assets/slide-image/06.png")} alt="" />
            <img
              src={require("../Assets/slide-image/Airtel_logo.png")}
              alt=""
            />
            <img src={require("../Assets/slide-image/congnizent.jpg")} alt="" />
            <img src={require("../Assets/slide-image/mtx.png")} alt="" />
            <img src={require("../Assets/slide-image/01.png")} alt="" />
            <img src={require("../Assets/slide-image/02.png")} alt="" />
            <img src={require("../Assets/slide-image/03.png")} alt="" />
          </div>
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

        <HeadText value="Why Choose Amity University?" />
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
                <li>Industry-first Advantages</li>
              </Fade>
              <Fade delay={400}>
                <li>Diverse Learning Mediums.</li>
              </Fade>

              <Fade delay={600}>
                <li>Dedicated Academic Advisor</li>
              </Fade>
              <Fade delay={800}>
                <li>AI-Professor AMI.</li>
              </Fade>
              <Fade delay={1000}>
                <li>Career Services</li>
              </Fade>

              <Fade delay={1200}>
                <li>Doorstep Delivery Of Books</li>
              </Fade>
              <Fade delay={1400}>
                <li>Metaverse Campus</li>
              </Fade>
              <Fade delay={1600}>
                <li>Placement Opportunities</li>
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
                <img
                  src={require("../Assets/healthcare (1).png")}
                  alt=""
                />{" "}
                <h6>MEDICAL FACILITIES</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/wifi.png")} alt="" />{" "}
                <h6>WI-FI CAMPUS</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/shuttle.png")} alt="" />{" "}
                <h6>SHUTTEL SERVICE</h6>
              </div>
            </div>
          </div>
        </Fade>
        <HeadText value="Approvals and Accreditations" />
        <Fade delay={250}>
          <div className="row main-approval-and-acredation">
            <div className="col-md-12 approval-and-acredation">
              <img src={require("../Assets/NACC-A.webp")} alt="" />
              <img src={require("../Assets/AICTE.png")} alt="" />
              <img src={require("../Assets/ugc-removebg-preview.png")} alt="" />
            </div>
          </div>
        </Fade>

        <HeadText value={"FAQs"} />
        <div className="row">
          <div className="col-md-11 m-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What are the eligibility criteria for MBA admission at Amity
                  University Noida?
                </Accordion.Header>
                <Accordion.Body>
                  Applicants must hold a bachelor's degree in any discipline
                  with a minimum aggregate score of 50%.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Does Amity Noida accept entrance exam scores for MBA
                  admissions?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, candidates with qualifying scores in exams like
                  CAT/XAT/NMAT/MAT/GMAT/CMAT are eligible for MBA programs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How is the selection process conducted for MBA admissions at
                  Amity University Noida?
                </Accordion.Header>
                <Accordion.Body>
                  Selection criteria involve academic performance, submitted
                  online video response, and possibly a written test and
                  interview.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Are there any specific documents required for MBA admission at
                  Amity Noida?
                </Accordion.Header>
                <Accordion.Body>
                  Candidates need to provide necessary academic transcripts,
                  entrance exam scorecards (if applicable), and other relevant
                  documents.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What is the procedure for fee payment and scholarship
                  opportunities for MBA students at Amity University Noida?
                </Accordion.Header>
                <Accordion.Body>
                  Accepted candidates must verify documents and pay the
                  admission fees. For information on fee breakups and
                  scholarships, candidates can consult with academic counselors.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
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
