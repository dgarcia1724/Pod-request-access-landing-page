const errorMessage = document.querySelector(".errorMessage");
const btn = document.querySelector(".btn");
const emailInput = document.querySelector("#emailInput");
const regex = /\S+@\S+\.\S+/;

btn.addEventListener("click", () => {
  const email = emailInput.value;

  console.log(email);

  if (email === "") {
    errorMessage.textContent = "Oops! Please add your email";
  } else if (!regex.test(email)) {
    errorMessage.innerHTML = "Oops! Please check your email";
  } else {
    errorMessage.textContent = "";
  }
});
