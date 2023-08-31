function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
    alert("Name field is required");
    nameInput.focus();
    return false;
  }

  if (email === "") {
    alert("Email field is required");
    emailInput.focus();
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Invalid email address");
    emailInput.focus();
    return false;
  }

  if (message === "") {
    alert("Message field is required");
    messageInput.focus();
    return false;
  } else if (message.split(/\s+/).length < 50) {
    alert("Enter more than 50 words in the message");
    messageInput.focus();
    return false;
  }

  return true;
}
document.addEventListener("DOMContentLoaded", function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });
});
