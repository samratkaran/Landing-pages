
function toggleAccordion(title) {
  const section = title.parentNode;
  section.classList.toggle('active');
}
// -------------------------------------------

// model jabascript start form here
const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");


openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Open me");
    modal.style.display = "block";
  });
});

closeModalButton.addEventListener("click", () => {
  console.log("Close me");
  modal.style.display = "none";
});

// -------------------------------------mailing service-----------------------

let nameValue = ""
let emailValue = ""
let phoneValue = ""
let locationValue = ""
let courseValue = ""


let nameElement = document.querySelector(".nameInput");
nameElement.addEventListener("input",() =>{
  nameValue = event.target.value
  console.log(nameValue)
})
// -----------------------------end of nameInput--------------------

let emailElement = document.querySelector(".EmailInput");
emailElement.addEventListener("input",() =>{
  emailValue = event.target.value
  console.log(emailValue)
});
// -----------------------------end of emailInput--------------------


let numberElement = document.querySelector(".numberInput");
numberElement.addEventListener("input",() =>{
  numberValue = event.target.value
  console.log(numberValue)
});

// ----------------end of numberInput-------------------


let locationElement = document.querySelector(".locationInput");
locationElement.addEventListener("input",() =>{
  locationValue = event.target.value
  console.log(locationValue)
});

// ----------------------end of location input---------------

// let collegeElement = document.querySelector(".collegeInput");
// collegeElement.addEventListener("input",() =>{
//   collegeValue = event.target.value
//   console.log(collegeValue)
// });

// -------------------end if college input-------------------

let courseElement = document.querySelector(".courseInput");
courseElement.addEventListener("input",() =>{
  courseValue = event.target.value
  console.log(courseValue)
});

// ----------------end if course input-------------------




let modalnameValue = ""
let modalemailValue = ""
let   modalNumberValue = ""
let modallocationValue = ""
let modalcourseValue = ""




let modalNameElement = document.querySelector(".modalNnameInput");
modalNameElement.addEventListener("input",() =>{
  modalnameValue = event.target.value
  console.log(modalnameValue)
})
// -----------------------------end of nameInput--------------------

let modalEmailElement = document.querySelector(".modalEmailInput");
modalEmailElement.addEventListener("input",() =>{
  modalemailValue = event.target.value
  console.log(modalemailValue)
});
// -----------------------------end of emailInput--------------------


let modalNumberElement = document.querySelector(".modalNumberInput");
modalNumberElement.addEventListener("input",() =>{
  modalNumberValue = event.target.value
  console.log(modalNumberValue)
});

// ----------------end of numberInput-------------------


let modalLocationElement = document.querySelector(".modalLocationInput");
modalLocationElement.addEventListener("input",() =>{
  modallocationValue = event.target.value
  console.log(modallocationValue)
});

// ----------------------end of location input---------------

// let modalcollegeElement = document.querySelector(".modalCollegeInput");
// modalcollegeElement.addEventListener("input",() =>{
//   modalcollegeValue = event.target.value
//   console.log(modalcollegeValue)
// });

// -------------------end if college input-------------------

let modalCourseElement = document.querySelector(".modalCourseInput");
modalCourseElement.addEventListener("input",() =>{
  modalcourseValue = event.target.value
  console.log(modalcourseValue)
});

// ----------------end if course input-------------------



const callingApi = (value)=>{
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  };

  fetch("https://drab-rose-whale-fez.cyclic.app/mail", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      form.reset();
      modal.style.display = "none";
      document.querySelector("#changeMe").innerHTML = `  <div class="col-md-6 mb-2 mt-3 main-thank-you-of-landing-page">
      <h3>Thank you For Inquiring 
        <br>
        <br>
        Our Counsellors will contact you within 24hrs to 48hrs</h3>
    </div>`
      
      
      
    })
    .catch((error) => {
      // console.error("Error during POST request:", error);
      alert("some error occurred Try again sometime")
      // Handle errors that occurred during the request
    });
}

const form = document.getElementById("myFirstForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = {
    name: nameValue, 
    email: emailValue, 
    phone: numberValue, 
    location: locationValue,
    course: courseValue, 
    college:"IFIM College",
  };

  callingApi(value) 
});



// -----------------------------------------------



const modalForm = document.getElementById("mySecondForm");
modalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = {


   name: modalnameValue,
    email: modalemailValue,
    phone: modalNumberValue,
    location:modallocationValue,
    course:modalcourseValue,
    college: "IFIM College",
};
callingApi(value)



})


