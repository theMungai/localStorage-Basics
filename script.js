const para = document.querySelector("#demo");

// set item in the localStorage
localStorage.setItem("firstName","John Doe" );

// Retrieve item from the localStorage
para.textContent = localStorage.getItem("firstName");
