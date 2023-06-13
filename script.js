document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.querySelector("#contact-form button");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("your-name");
    const emailInput = document.getElementById("your-email");
    const messageInput = document.getElementById("your-message");
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const popupMessage = `Thank you, ${name}! Your message has been sent. We will get back to you soon.`;
    alert(popupMessage);
    contactForm.reset();
  });
});
