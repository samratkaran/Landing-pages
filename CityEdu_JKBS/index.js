const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");


console.log(openModalButtons,closeModalButton)
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


let nameValue = "";
let emailValue = "";
let numberValue = "";
let locationValue = "";
let courseValue = "";

let nameElement = document.querySelector("#nameInput");
nameElement.addEventListener("input", () => {
  nameValue = event.target.value;
});

// ---------------end of nameInput---------------

let emailElement = document.querySelector("#EmailInput");
emailElement.addEventListener("input", () => {
  emailValue = event.target.value;
});

// ----------end of emailInput---------------

let numberElement = document.querySelector("#numberInput");
numberElement.addEventListener("input", () => {
  numberValue = event.target.value;
});

// ---------------------end of numberInput---------------

let locationElement = document.querySelector("#locationInput");
locationElement.addEventListener("input", () => {
  locationValue = event.target.value;
});

// ----------------end of location Input---------------

let courseElement = document.querySelector("#courseInput");
courseElement.addEventListener("input", () => {
  courseValue = event.target.value;
});

// ---------------------end of course input---------------




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

let modalcollegeElement = document.querySelector(".modalCourseInput");
modalcollegeElement.addEventListener("input",() =>{
  modalcollegeValue = event.target.value
  console.log(modalcollegeValue)
});

// -------------------end if college input-------------------



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
      // console.log("POST request successful:", data);
      alert("we have recorded your response!");
      form.reset();
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







const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = {
    name: nameValue,
    email: emailValue,
    phone: numberValue,
    location: locationValue,
    course: courseValue,
    college : "JKBS College"
  };
  callingApi(value) 
});
  
  


const modalForm = document.getElementById("mySecondForm");
modalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = {


   name: modalnameValue,
    email: modalemailValue,
    phone: modalNumberValue,
    location:modallocationValue,
    course: modalcollegeValue,
    college:"JKBS College"       ,
};
callingApi(value)



})
