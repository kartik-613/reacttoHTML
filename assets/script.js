  function logFormData() {

    const name = document.getElementById("fullName").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const course = document.getElementById("course").value;


    const button = document.getElementById("submitButton");
    const buttonText = document.getElementById("buttonText");

    // Disable button and show loader
    button.disabled = true;
    buttonText.innerHTML = "⏳ Submitting...";

    const subject = course;
    const text = `Name: ${name}, Mobile Number: ${mobile}, Email: ${email}, City: ${city}, Course: ${course}`;

    const apiUrl = `https://hotelapi.shriyanshnath.com/api/SEND_ENQUIRY_MAIL?subject=${(subject)}&text=${(text)}`;

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
        document.getElementById("admissionForm").reset();
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting form. Please try again.");
    })
    .finally(() => {
        // Re-enable button
        button.disabled = false;
        buttonText.innerHTML = "Get One-On-One Career Guidance";
        document.getElementById("admissionForm").reset();
      });
  }
