import "./Main.css";
import Form from "./From/Form";
import HeadText from "./HeadText/HeadText";
import { Fade, Flip } from "react-awesome-reveal";

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
        <div></div>
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
