// EmailJS Form Submission
(function() {
  emailjs.init("user_OAwOOo2rDsu6jWBOML5qZ");
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const messageContainer = document.createElement("p"); // message element
  messageContainer.id = "form-message";
  messageContainer.style.textAlign = "center";
  messageContainer.style.marginTop = "10px";
  form.parentNode.appendChild(messageContainer);

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_y72wh8l";
    const templateID = "template_3inix24";

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        showMessage("Message sent successfully!", "green");
        this.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        showMessage("Oops! Something went wrong. Please try again.", "red");
      });
  });

  function showMessage(text, colour) {
    messageContainer.textContent = text;
    messageContainer.style.color = colour;
    messageContainer.style.opacity = "1";
    messageContainer.style.fontFamily = "'Poppins', sans-serif";

    // Fade out after 3 seconds
    setTimeout(() => {
      messageContainer.style.transition = "opacity 1s ease";
      messageContainer.style.opacity = "0";
    }, 3000);
  }
});

// Dynamically update footer year
document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});