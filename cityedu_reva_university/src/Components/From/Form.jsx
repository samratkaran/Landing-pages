import React, { useState } from "react";
import "./Form.css";
import { handleSubmit } from "../utils/PostMethod";

const Form = () => {
  const [collegeData, setcollegeData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    location: "",
    college: "Reva University Bangalore",
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
    <div>
      {showform ? (
        <div
          class=" mb-5  main-form-of-landing-page  "
          id="changeMe"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <form
            class="form-of-landing-page"
            id="myFirstForm"
            onSubmit={HandleFormSubmit}
          >
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

export default Form;
