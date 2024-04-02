import React, { useState } from "react";
import "./Modal.css";
import { handleSubmit } from "../utils/PostMethod";

const ModalForm = ({ cancel }) => {
  const [collegeData, setcollegeData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    location: "",
    college: "SHARDA UNIVERSITY",
  });

  const [showform, setShowForm] = useState(true);

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setcollegeData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const HandleFormSubmit = (e) => {
    
    handleSubmit(e, collegeData)
      .then((res) => {
        setShowForm(false);
        setShowThankYouMessage(true);
        setTimeout(() => {
          setShowThankYouMessage(false);
        }, 4000);
      })

      .catch((err) => {
        console.log(err);
      });
  // setShowForm(false);
  //   setShowThankYouMessage(true);
  //   setTimeout(() => {
  //     setShowThankYouMessage(false);
  //   }, 4000);
  };

  return (
    <div className="col-md-2 m-auto form ">
      {showform ? (
        <div
          class=" mb-5  main-form-of-landing-page  "
          id="changeMe"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <form
            class="modal-form-of-landing-page"
            id="myFirstForm"
            onSubmit={HandleFormSubmit}
          >
            <h2
              style={{
                textAlign: "right",
                width: "90%",
                cursor: "pointer",
                color:"white"
              }}
              onClick={() => cancel(false)}
            >
              X
            </h2>
            <h2 style={{ color: "white", textShadow: "1px 1px 1px black" }}>
              Enquire Now
            </h2>

            <input
              type="text"
              class="form-control nameInput"
              name="name"
              value={collegeData.name}
              onChange={handleInputChanges}
              aria-describedby="emailHelp"
              placeholder="Name*"
              required
            />

            <input
              type="email"
              class="form-control EmailInput"
              name="email"
              value={collegeData.email}
              onChange={handleInputChanges}
              aria-describedby="emailHelp"
              placeholder="Email ID*"
              required
            />

            <input
              type="number"
              class="form-control numberInput"
              name="phone"
              value={collegeData.phone}
              onChange={handleInputChanges}
              aria-describedby="emailHelp"
              placeholder="Phone Number*"
              required
            />

            <input
              type="text"
              class="form-control locationInput"
              name="location"
              value={collegeData.location}
              onChange={handleInputChanges}
              aria-describedby="emailHelp"
              placeholder="Location*"
              required
            />

            <input
              type="text"
              class="form-control courseInput"
              name="course"
              value={collegeData.course}
              onChange={handleInputChanges}
              aria-describedby="emailHelp"
              placeholder="Course*"
              required
            />

            <button type="submit" class="btn btn-warning button-of-form">
              Apply Now
            </button>
            <b>
              <h4 style={{ color: "white" }}>
                For More Info - <b>9427 700 700</b>
              </h4>
            </b>
          </form>
        </div>
      ) : showThankYouMessage ? (
        <div className="col-md-6 mb-2 mt-3 main-thank-you-of-landing-page">
          <h3>
            Thank you For Inquiring
            <br />
            <br />
            Our Counsellors will contact you within 24hrs to 48hrs
          </h3>
        </div>
      ) : null}
    </div>
  );
};

export default ModalForm;


// copy this whole code and paste it in HandelFormSubmit to check the form is workig or not without calling API

// const HandleFormSubmit = (e) => {
//   e.preventDefault();
// //   handleSubmit(e, collegeData)
// //     .then((res) => {
// //       setShowForm(false);
// //       setShowThankYouMessage(true);
// //       setTimeout(() => {
// //         setShowThankYouMessage(false);
// //       }, 4000);
// //     })

// //     .catch((err) => {
// //       console.log(err);
// //     });
// setShowForm(false);
//   setShowThankYouMessage(true);
//   setTimeout(() => {
//     setShowThankYouMessage(false);
//   }, 4000);
// };