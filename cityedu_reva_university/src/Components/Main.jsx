import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Fade } from "react-awesome-reveal";

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
      </div>
    </>
  );
};

export default Main;

// const [show, setShow] = useState(false);

// {show ? <Modal cancel = {setShow}/> : null}

{
  /* <button onClick={() => setShow(true)}>Fuck you</button> */
}
