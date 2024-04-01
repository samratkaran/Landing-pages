import React from "react";
import "./CourseCard.css";
import { FcGraduationCap } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { FaCircleArrowRight } from "react-icons/fa6";

const CourseCard = ({ imageUrl, CourseName, DegreeName, Duration }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-md-12 course-card-main">
          <div>
            <img src={imageUrl} alt="" />
          </div>
          <div className="all-data-of-course">
            <h2>{CourseName}</h2>
            <p>
              <FcGraduationCap /> Degree: {DegreeName}
            </p>
            <p>
              <FcOvertime /> Duration: {Duration}
            </p>

            {show ? <Modal cancel={setShow} /> : null}
            <button
              className="contact-button"
              style={{ width: "14rem" }}
              onClick={() => setShow(true)}
            >
              {" "}
              KNOW MORE &nbsp; <FaCircleArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
