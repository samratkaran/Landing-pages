import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Fade, Rotate } from "react-awesome-reveal";
import Accordion from "react-bootstrap/Accordion";

const Main = () => {
  return (
    <>
      <div className="row main-head-text-of-landing-page">
        <div className="col-md-8 text-white">
          <p className="head-text-of-page">REVA UNIVERSITY</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            maxime eaque soluta minus ratione temporibus earum fuga, quos quam
            expedita dolores laborum saepe molestiae nam voluptates, corporis
            assumenda consequuntur sequi.
          </p>
        </div>

        <div className="col-md-3">
          <Form />
        </div>
      </div>
      <div className="main-container mb-5">
        <HeadText value="overview" />

        <div className="row main-overview-of-page">
          <div className="col-md-4">
            {" "}
            <img
              src={require("../Assets/overview.png")}
              alt=""
              className="overview-image"
            />
          </div>
          <div className="col-md-7 p-3">
            <p>
              {" "}
              Reva University, situated in Kattigenahalli, Yelahanka, Bangalore,
              is a prestigious private institution established in 2012. It
              offers a diverse range of academic programs across various
              disciplines. Reva University caters to the educational needs of a
              wide spectrum of students with 55 undergraduate programs, 28
              full-time and 2 part-time postgraduate programs, and 17 Ph.D.
              programs. The university's flagship program, B.Tech, is highly
              sought after, with admissions based on REVA
              CET/KCET/COMED-K/Uni-GAUGE scores. For KCET, the B.Tech cutoff
              ranges from 61443 to 149117. Reva University prides itself on
              providing excellent placement and internship opportunities. Every
              year, leading companies across industries visit the campus,
              offering lucrative job opportunities to students. In 2022, the
              placement drive saw a remarkable 3,512 job offers, with the
              highest package reaching INR 45 LPA.
            </p>
          </div>
        </div>

        <HeadText value="Approvals and Accreditations" />
        <Fade delay={250}>
          <div className="row main-approval-and-acredation">
            <div className="col-md-12 approval-and-acredation">
              <img src={require("../Assets/NACC B+.jpg")} alt="" />
              <img src={require("../Assets/NBA.jpg")} alt="" />
              <img src={require("../Assets/NIRF.jpg")} alt="" />
              <img src={require("../Assets/AICTE.png")} alt="" />
              <img src={require("../Assets/ugc-removebg-preview.png")} alt="" />
            </div>
          </div>
        </Fade>
        <HeadText value="Why Choose Reva?" />
        <div className="row why-chose-us m-auto">
          <div className="col-md-3 d-none d-md-block">
            <img
              src={require("../Assets/f14d6c0a5773675a110f0fbb4988efa6-removebg-preview.png")}
              alt=""
              className="why-chose-us-image"
            />
          </div>
          <div className="col-md-5">
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Fade delay={200}>
                <li>Diverse academic programs across disciplines.</li>
              </Fade>
              <Fade delay={240}>
                <li>Accredited by NAAC with an 'A' Grade.</li>
              </Fade>
              <Fade delay={280}>
                <li>
                  Strong industry connections for internships and placements.
                </li>
              </Fade>
              <Fade delay={320}>
                <li>State-of-the-art infrastructure with modern facilities.</li>
              </Fade>
              <Fade delay={360}>
                <li>Experienced faculty providing quality education.</li>
              </Fade>
              <Fade delay={400}>
                <li>Research opportunities for students.</li>
              </Fade>
              <Fade delay={440}>
                <li>Vibrant campus life with clubs and cultural events.</li>
              </Fade>
              <Fade delay={480}>
                <li>
                  Strategic location in Bangalore for career opportunities.
                </li>
              </Fade>
              <Fade delay={520}>
                <li>Scholarships and financial aid available.</li>
              </Fade>
              <Fade delay={560}>
                <li>Emphasis on holistic development beyond academics.</li>
              </Fade>
            </ul>
          </div>
        </div>
        <HeadText value={"Courses Offered"} />
        <div className="row">
          <div className="col-md-12">
            <Fade direction="right" delay={200}>
              <div className="course-of-page">
                <p>B.Tech</p>
                <p>B.Arch</p>
                <p>B.Com</p>
                <p>BBA</p>
                <p>B.A.-LL.B</p>
                <p>BBA-LL.B</p>
                <p>M.Tech</p>
                <p> MCA</p>
                <p> MBA</p>
                <p> M.Sc</p>
              </div>
            </Fade>
          </div>
        </div>
        <HeadText value={"Course-Wise Eligibility"} />
        <div className="row">
          <div className="col-md-12 m-auto eligibility-of-page ">
            <div>
              <h2>B.Tech</h2>
              <p>
                PUC / 10+2 (HSC) qualifiers with Physics and Mathematics
                compulsory subjects along with one of Chemistry / Biotechnology
                / Biology / Computer Science / Electronics / Technical
                Vocational subjects. Minimum of 45% aggregate marks in 10+2 (40%
                for reserved category candidates). Valid score in REVA CET.
              </p>
            </div>
            <div>
              <h2>B.Arch</h2>
              <p>
                10+2 (HSC)/ Pre-University Course or equivalent examination with
                minimum 50% marks in PCM and 50% marks in aggregate. B.Com/BBA:
                Passed in PUC / 10+2 (HSC) from any recognized Board / Council
                or any other qualification recognized as equivalent.
              </p>
            </div>
            <div>
              <h2>B.A.-LL.B</h2>
              <p>
                Passed in PUC/ 10+2 (HSC) or equivalent with a minimum of 45%
                aggregate marks (40% for reserved category candidates). Valid
                score in REVA CLAT.
              </p>
            </div>
            <div>
              <h2>M.Tech</h2>
              <p>
                B.E / B.Tech degree with a minimum of 50% marks in aggregate
                (45% for reserved category candidates). Valid score in PGCET.
              </p>
            </div>
            <div>
              <h2>MCA</h2>
              <p>
                Graduation with Mathematics / Statistics / Computer Science
                Programming / Computer Application / Business Mathematics/
                Business Statistics as one of the major/optional subjects with a
                minimum of 50% marks (45% for reserved category candidates).
              </p>
            </div>
            <div>
              <h2>MBA</h2>
              <p>
                Graduation in any stream or B.E/ B.Tech with 50% marks (45% for
                reserved category candidates). Valid score in REVA MAT/ CAT/
                MAT/ CMAT.
              </p>
            </div>
            <div>
              <h2>M.Sc</h2>
              <p>
                Graduation in Science with a minimum of 45% marks (40% for
                reserved category candidates).
              </p>
            </div>
          </div>
        </div>
        <HeadText value={"top Recruiters"} />
        <div
          className="row main-Top-Recruiters"
          style={{ overflowX: "hidden" }}
        >
          <div className="col-md-12 Top-Recruiters">
            <img src={require("../Assets/slide-image/02.png")} alt="" />
            <img src={require("../Assets/slide-image/05.png")} alt="" />
            <img src={require("../Assets/slide-image/06.png")} alt="" />
            <img src={require("../Assets/slide-image/07.png")} alt="" />
            <img src={require("../Assets/slide-image/10.png")} alt="" />
            <img src={require("../Assets/slide-image/13.png")} alt="" />
            <img src={require("../Assets/slide-image/14.png")} alt="" />
            <img src={require("../Assets/slide-image/15.png")} alt="" />
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
                <img src={require("../Assets/lab.png")} alt="" /> <h6>LABS</h6>
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
                <img
                  src={require("../Assets/convenience-store.png")}
                  alt=""
                />{" "}
                <h6>CONVERIENCE STORE</h6>
              </div>
            </div>
          </div>
        </Fade>
        <HeadText value={"FAQs"} />
        <div className="row">
          <div className="col-md-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What are the eligibility criteria for admission to Reva
                  University?
                </Accordion.Header>
                <Accordion.Body>
                  Eligibility criteria vary depending on the course applied for.
                  Generally, candidates must meet academic requirements
                  specified by the university, such as minimum scores in
                  qualifying exams like 10+2 or equivalent.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is the placement record of Reva University?
                </Accordion.Header>
                <Accordion.Body>
                  Reva University has a strong track record of placements, with
                  many top companies visiting the campus for recruitment.
                  Details regarding the number of job offers made, highest
                  packages offered, and average salary packages are important
                  considerations for prospective students.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Are scholarships available for students at Reva University?
                </Accordion.Header>
                <Accordion.Body>
                  Reva University offers scholarships based on merit, sports
                  achievements, and other criteria. Understanding the
                  scholarship opportunities and eligibility criteria can be
                  crucial for students seeking financial assistance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What kind of facilities does Reva University provide for
                  students?
                </Accordion.Header>
                <Accordion.Body>
                  Assessing the infrastructure and facilities available on
                  campus, such as libraries, labs, sports complexes, hostels,
                  and recreational amenities, helps students gauge the overall
                  learning and living environment at the university.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <HeadText value={"Ranks and Awards"} />
        <div
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
            <p>
              "Diamond" University Ratings for Employability, Diversity &
              Accessibility, Facilities, and Social Responsibility.
            </p>
          </div>
        </div>
        <HeadText value={"Placement"} />
        <div className="row m-auto">
          <div class="col-md-12 m-auto">
            <div class="Students-component ">
              <p
                style={{ textAlign: "justify" }}
                className="col-md-11 m-auto pb-4 "
              >
                The Placement and Training Cell at REVA University is committed
                to facilitating the professional growth and career aspirations
                of its students. Through various initiatives and collaborations,
                the university ensures that graduating students are equipped
                with the skills and opportunities necessary to embark on
                successful career paths. Placement Statistics 2023:
              </p>
              <ul
                className="boxes-of-palcement d-flex justify-content-center gap-5"
                style={{ paddingLeft: "1px", flexWrap: "wrap" }}
              >
                <li class="c1" style={{ backgroundColor: "#da2032" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    3512{" "}
                  </span>{" "}
                  Total No. of Offers
                </li>
                <li class="c2" style={{ backgroundColor: "#a61a32" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 45{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest Domestic Package{" "}
                </li>
                <li class="c3" style={{ backgroundColor: "#034ea2" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 58
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Highest International Package{" "}
                </li>
                <li class="c4" style={{ backgroundColor: "#00abe6" }}>
                  {" "}
                  <span style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                    <i class="fa fa-inr" aria-hidden="true"></i> 4.5- 5.5{" "}
                    <small style={{ fontSize: "1.1rem !important" }}>LPA</small>
                  </span>{" "}
                  Average Package{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <HeadText value={"Scholarships"} />
        <div className="row">
          <div className="col-md-12 scolership">
            <Fade direction="right" delay={400}>
              <p>
                REVA University offers scholarships based on merit, sports,
                defense, PH quota, and other categories.
              </p>
            </Fade>
            <Fade direction="left" delay={800}>
              <p>
                Scholarship criteria are determined by the university's
                eligibility standards.
              </p>
            </Fade>
            <Fade direction="right" delay={1200}>
              <p>
                K-CET rank-based scholarships range from 100% fee waiver for
                ranks 1-2000 to 20% for ranks 6001-8000.
              </p>
            </Fade>
            <Fade direction="left" delay={1600}>
              <p>
                Merit scholarships vary from INR 25,000 for technical to INR
                10,000 for non-technical disciplines.
              </p>
            </Fade>
            <Fade direction="left" delay={2000}>
              <p>
                Sports scholarships are available for state, national, and
                international levels, with percentages ranging from 50% for
                international to 15% for state championships.
              </p>
            </Fade>
          </div>
        </div>
        <div className="row main-contact-us mt-5 mb-5">
          <div className="col-md-12 contact-us p-5">
            <h1 style={{ color: "white" }}>
              To learn more about the Admission and selection process, contact
              us now!
            </h1>
            <button className="contact-button" style={{ width: "14rem" }}>
              {" "}
              Click Herer!
            </button>
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
