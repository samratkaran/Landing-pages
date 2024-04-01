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
    college: "Amity university Noida",
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
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            class="form-of-landing-page"
            id="myFirstForm"
            onSubmit={HandleFormSubmit}
          >
            <h2 style={{ color: "black", textShadow: "1px 1px 1px black" }}>
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

            <button
              type="submit"
              class="btn btn-warning  button-of-form"
              style={{}}
            >
              Apply Now
            </button>
          </form>
        </div>
      ) : (
        <div class="col-md-6 mb-2 mt-3 main-thank-you-of-landing-page">
          <h3>
            Thank you For Inquiring
            <br />
            <br />
            Our Counsellors will contact you within 24hrs to 48hrs
          </h3>
        </div>
      )}
    </div>
  );
};

export default Form;
