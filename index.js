// index.js
function formValidation() {
  // Get form elements
  var name = document.forms["registration"]["name"].value;
  var email = document.forms["registration"]["email"].value;
  var password = document.forms["registration"]["password"].value;
  var phoneNumber = document.forms["registration"]["phoneNumber"].value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var language = document.forms["registration"]["language"].value;
  var zipcode = document.forms["registration"]["zipcode"].value;
  var about = document.forms["registration"]["about"].value;

  // Regular expressions for validation
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var phonePattern = /^[0-9]{10}$/;

  // Validation logic
  if (name === "") {
    alert("Name field is required.");
    return false;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email address.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  if (!phoneNumber.match(phonePattern)) {
    alert("Invalid phone number (10 digits only).");
    return false;
  }

  if (!gender) {
    alert("Please select a gender.");
    return false;
  }

  if (language === "") {
    alert("Please select a language.");
    return false;
  }

  if (zipcode.length !== 5) {
    alert("Zipcode must be 5 digits long.");
    return false;
  }

  if (about === "") {
    alert("Please provide some information about yourself.");
    return false;
  }

  // If all validations pass, the form is considered valid
  alert("Form submitted successfully!");
  return true;
}
