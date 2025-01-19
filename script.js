// Redirect to the sign-up page when the "Sign Up" button is clicked
document.getElementById("signupBtn").onclick = function() {
    window.location.href = "signup.html";  // Redirect to the sign-up page
  };
  
  // Redirect to pet-info.html after login (simulated here for the form submission)
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    window.location.href = "pet-info.html";  // Redirect to pet information page
  });
  
  // Redirect to pet-info.html after sign-up (simulated here for the form submission)
  document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    window.location.href = "pet-info.html";  // Redirect to pet information page
  });


  
  