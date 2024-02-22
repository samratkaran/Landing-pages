//This code is for to chnage in intrastrucure Emlemet----------------

// JavaScript code
// Get the content div element
var content = document.getElementById("content");

// Get all the buttons
var buttons = document.querySelectorAll("button");

// Define an array of objects that store the image and text for each button
var data = [
  {image: "./Assets/CampusImage.png", text: ["60+", "Acres of Campus", "80+", "Multimedia Classrooms" ,"8500+", "Flowering plants", "1 Million" ,"sqft of built-up area"]}
  
  ,
  {image: "./Assets/learning-center.jpg", text: ["Circular", "design structure", "Audio-visual", "facilities" , "IT","Center", "Seminar" , "Halls"]}
  
  ,
  {image: "./Assets/accomdation.jpg", text: ["Well-furnished", "AC Rooms", "World-class", "Food Court","Hall","of residence", "Guest house","and staff quarters"]}
  
  ,
  {image: "./Assets/labs.jpg", text: ["60+", "Acres of Campus", "80+", "Multimedia Classrooms","Well-equipped","Labs","1 Million sqft","of built-up area"]}
  
  ,
  {image: "./Assets/library.jpg", text: ["55k Sq.", "Ft. Total area", "52K+", "Book volumes","1000+","Seating Capacity","Digital","Library"]}
  
  ,
  {image: "./Assets/Activity.jpg", text: ["Basketball", "Court", "Badminton", "Court" ,"Football","Ground","Indoor games","& recreation center"]}
  
  ,
  {image: "./Assets/facility.jpg", text: ["24*7", "Healthcare", "ATM", "Facilities","Fitness","Center","Departmental","Store"]},

];

// Loop through the buttons and add a click event listener to each one
for (var i = 0; i < buttons.length; i++) {
  // Get the current button
  var button = buttons[i];

  // Add a click event listener
  button.addEventListener("click", function() {
    // Get the index of the clicked button
    var index = this.id.slice(-1) - 1;

    // Get the image and text for the clicked button
    var image = data[index].image;
    var text = data[index].text;

    // Change the image source attribute
    content.getElementsByTagName("img")[0].setAttribute("src", image);

    // Change the text content of the h2 and p elements
    var h2s = content.getElementsByTagName("h4");
    var ps = content.getElementsByTagName("p");
    for (var j = 0; j < h2s.length; j++) {
      h2s[j].textContent = text[j * 2];
      ps[j].textContent = text[j * 2 + 1];
    }
  });
}


// ------------Code finish here of infrastructure------------









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


// -------------------end if college input-------------------

let courseElement = document.querySelector(".courseInput");
courseElement.addEventListener("input",() =>{
  courseValue = event.target.value
  console.log(courseValue)
});

// ----------------end if course input-------------------




let modalnameValue = ""
let modalemailValue = ""
let  modalNumberValue = ""
let modallocationValue = ""
let modalcourseValue = ""




let modalNameElement = document.querySelector(".modalNameInput");
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
      document.querySelector("#changeMe").innerHTML = `  <div class="col-md-6  main-thank-you-of-landing-page">
      <h3>Thank you For Inquiring 
        <br>
        <br>
        Our Counsellors will contact you within 24hrs to 48hrs</h3>
    </div>`
    modal.style.display = "none";
      
      
    })
    .catch((error) => {
      // console.error("Error during POST request:", error);
      alert("some error occurred Try again sometime")
      // Handle errors that occurred during the request
    });
}

const form = document.getElementById("myFirstFormkaran");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = {
    name: nameValue, 
    email: emailValue, 
    phone: numberValue, 
    location: locationValue,
    course: courseValue,
    college: "Alliance University" 
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
    course: modalcollegeValue,
    college: "Alliance University"  
};
callingApi(value)



})



