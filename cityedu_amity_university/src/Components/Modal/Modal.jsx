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
    college: "Amity University Noida",
  });

  const [showform, setShowForm] = useState(true);

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
      })
      .catch((err) => {
        console.log(err);
      });
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
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, itaque
          quasi! Exercitationem quis ullam iste minus maxime ea alias, quisquam,
          ratione mollitia natus error suscipit facilis distinctio, assumenda
          laborum aspernatur.
        </p>
      )}
    </div>
  );
};

export default ModalForm;
