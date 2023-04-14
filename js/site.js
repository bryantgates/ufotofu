//controller
function getValues() {
  let userInput = document.getElementById("message").value;

  let reverseInput = reverseString(userInput);

  displayString(reverseInput);
}

//buisiness logic
function reverseString(message) {
  let reverseMessage = "";

  for (let i = message.length - 1; i >= 0; i--) {
    reverseMessage += message[i];
  }

  return reverseMessage;
}

//View function
function displayString(reverseMessage) {
  document.getElementById("msg").textContent = reverseMessage;
  document.getElementById("alert").classList.remove("d-none");
}

// Swal.fire({
//   backdrop: false,
//   title: "Appname",
//   text: msg,
// });
