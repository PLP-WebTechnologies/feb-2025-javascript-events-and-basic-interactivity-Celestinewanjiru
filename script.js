const form = document.getElementById("communityForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (email === "") {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = `Thank you for subscribing, ${email}!`;
    formMessage.style.color = "green";
    form.reset();
  }
});

const toggleInfoBtn = document.getElementById("toggleInfoBtn");
const extraInfo = document.getElementById("extraInfo");

toggleInfoBtn.addEventListener("click", function () {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    toggleInfoBtn.textContent = "Hide Info";
  } else {
    extraInfo.style.display = "none";
    toggleInfoBtn.textContent = "Toggle More Info";
  }
});
