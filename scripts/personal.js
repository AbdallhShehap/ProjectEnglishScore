let personalBtn = document.getElementById("personal-btn");
let personalDetailsContainer = document.getElementById("personal-details");

personalBtn.addEventListener("click", function(e) {
e.preventDefault();
let fName = document.getElementById("first-name").value;
let lName = document.getElementById("last-name").value;
let email = document.getElementById("email").value;
let mobileNumber = document.getElementById("mobile-number").value;
let city = document.getElementById("city").value;
let education = document.getElementById("education").value;
let gpa = document.getElementById("gpa").value;

let personalData = [{
firstName: fName,
lastName: lName,
mail: email,
Number: mobileNumber,
cityPlace: city,
educationLevel: education,
gpaValue: gpa
}];

localStorage.setItem("personalData", JSON.stringify(personalData));
personalDetailsContainer.innerHTML = `

<h2 class="my-3" style="text-align: center;">Personal Details</h2><br>
<p>First Name: ${personalData[0].firstName}</p><br>
<p>Last Name : ${personalData[0].lastName}</p><br>
<p>email: ${personalData[0].mail}</p><br>
<p>Mobile Number: ${personalData[0].Number}</p><br>
<p>Education: ${personalData[0].educationLevel}</p>
<p>Gpa: ${personalData[0].gpaValue}</p><div class="d-flex justify-content-center">
<button class="w-50 p-2 my-5 join-btn"><a href="http://127.0.0.1:5500/speech-score-quiz/pages/home.html" target="_blank">Enroll Now</a>
</button> </div>
`; });

window.addEventListener("load", function() {
let storedData = localStorage.getItem("personalData");
let personalData = JSON.parse(storedData);

if (personalData && personalData.length > 0) {
personalDetailsContainer.innerHTML = `

<h2 class="my-3" style="text-align: center;">Personal Details</h2><br>
<p>First Name: ${personalData[0].firstName}</p><br>
<p>Last Name : ${personalData[0].lastName}</p><br>
<p>email: ${personalData[0].mail}</p><br>
<p>Mobile Number: ${personalData[0].Number}</p><br>
<p>Education: ${personalData[0].educationLevel}</p>
<p>Gpa: ${personalData[0].gpaValue}</p><div class="d-flex justify-content-center"><button class="w-50 p-2 my-5 join-btn" style="background-color:#1E4A66"><a href="http://127.0.0.1:5500/speech-score-quiz/pages/home.html" target="_blank" style="color:white">Done</a>
</button> </div>
`; 
} 
});