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
              SHARDA <b className="text-light">UNIVERSITY</b>
            </p>
            {/* <p className="second-head-text-of-page">  NOIDA</p> */}
            <p className="span-text-of-page">
              The World is Going to Sharda University to shape their futures, If
              you wish to shape yours then Apply Now!!
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
              className="overview-image d-none d-md-block "
              src={require("../Assets/about_img-removebg-preview.png")}
              alt=""
            />
          </div>
          <div className="col-md-7  p-3 ">
            <p style={{ fontSize: "1.5rem", paddingBottom: "1rem" }}>
              Established in 2009, Sharda University, Greater Noida, is a
              renowned private institution located in the Delhi National Capital
              Region (NCR). Offering a diverse range of undergraduate,
              postgraduate, and doctoral programs, Sharda University is known
              for its quality education and comprehensive curriculum across
              various disciplines. With a strong focus on placement assistance,
              the university boasts top recruiters like Sleepwell, Cognizant,
              and Amazon.
            </p>
            <img src={require("../Assets/ranking.png")} alt="" width={650} />
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
                    CourseName={"BCA"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/Bachelor of Computer Applications.jpg")}
                  />
                  <CourseCard
                    CourseName={"B.Des / B.Arch"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/B.Arch.jpg")}
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
                    CourseName={"BOPTM"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/BOPTM.jpeg")}
                  />
                  <CourseCard
                    CourseName={"BMLT"}
                    DegreeName={"Bachelor"}
                    Duration={"3 Years"}
                    imageUrl={require("../Assets/couese-image/BMLT.jpeg")}
                  />
                  <CourseCard
                    CourseName={"MBBS"}
                    DegreeName={"Bachelor"}
                    Duration={"4/5 Years"}
                    imageUrl={require("../Assets/couese-image/MBBS.jpeg")}
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
                  <CourseCard
                    CourseName={"MDS"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MDS.jpeg")}
                  />
                  <CourseCard
                    CourseName={"MPT"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MPT.jpeg")}
                  />
                  <CourseCard
                    CourseName={"LL.M."}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/LL.M..jpeg")}
                  />
                  <CourseCard
                    CourseName={"MS"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MS.jpeg")}
                  />
                  <CourseCard
                    CourseName={"M.Des"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/Mdes.jpg")}
                  />
                  <CourseCard
                    CourseName={"M.Com"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/mcom.jpeg")}
                  />
                  <CourseCard
                    CourseName={"MD"}
                    DegreeName={"Master"}
                    Duration={"2 Years"}
                    imageUrl={require("../Assets/couese-image/MD.jpeg")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <HeadText value={"Placement"} />
        <div className="row ">
          <div class="col-md-12 ">
            <div class="Students-component ">
              <ul className="boxes-of-palcement d-flex justify-content-center gap-5">
                <li class="c1" style={{ backgroundColor: "#da2032" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    150+{" "}
                  </span>{" "}
                  Total MNCs
                </li>
                <li class="c2" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 1{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>CPA</small>
                  </span>{" "}
                  Highest Package{" "}
                </li>
                <li class="c3" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i>550+
                  </span>{" "}
                  Total Recruiters
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 5.56
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
            <img src={require("../Assets/slide-image/06.png")} alt="" />
            <img
              src={require("../Assets/slide-image/Asian Paints.png")}
              alt=""
            />
            <img src={require("../Assets/slide-image/Audi.png")} alt="" />
            <img src={require("../Assets/slide-image/Decathlon.jpeg")} alt="" />
            <img src={require("../Assets/slide-image/Dell.png")} alt="" />
            <img src={require("../Assets/slide-image/Genpact.png")} alt="" />
            <img src={require("../Assets/slide-image/HP.png")} alt="" />
            <img src={require("../Assets/slide-image/Infosys.png")} alt="" />
            <img src={require("../Assets/slide-image/Mahindra.jpeg")} alt="" />
            <img src={require("../Assets/slide-image/NTT Data.png")} alt="" />
            <img src={require("../Assets/slide-image/congnizent.jpg")} alt="" />
            <img src={require("../Assets/slide-image/Wipro.png")} alt="" />
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

        <HeadText value="Why Choose Sharda  University?" />
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
                <li>Internationally Recognized Degrees</li>
              </Fade>
              <Fade delay={400}>
                <li>Approved by UGC, Government of India.</li>
              </Fade>

              <Fade delay={600}>
                <li>Global Exposure: 250+ functional MOUs</li>
              </Fade>
              <Fade delay={800}>
                <li>Study Abroad Opportunities</li>
              </Fade>
              <Fade delay={1000}>
                <li>Received Education Excellence Award by ASSOCHAM </li>
              </Fade>

              <Fade delay={1200}>
                <li>On-Campus Residences</li>
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
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/compliant.png")} alt="" />{" "}
                <h6>Moot Court (Law)</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/laboratory.png")} alt="" />{" "}
                <h6>Laboratories</h6>
              </div>
              <div class="card-of-campus-life">
                {" "}
                <img src={require("../Assets/home.png")} alt="" />{" "}
                <h6>A/C Classrooms</h6>
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
