//controller
function getValues() {
  let userInput = document.getElementById("message").value;

  let lowerCaseMessage = userInput.toLowerCase();

  let noPunctuationOrSpacing = lowerCaseMessage.replace(
    /[.,/#!$%^&*;:{}=-_`~() ]/g,
    ""
  );

  let checkedInput = checkForPalindrome(noPunctuationOrSpacing);

  displayResults(checkedInput);
}

//buisiness logic
function checkForPalindrome(message) {

  let checkPalindrome = "";
  let forwardMessage = "";
  let reverseMessage = "";

  for (let i = 0; i < message.length; i++) {
    forwardMessage += message[i];
  }

  for (let i = message.length - 1; i >= 0; i--) {
    reverseMessage += message[i];
  }

  if (forwardMessage == reverseMessage) {
    document.getElementById("alert").classList.remove("d-none");
    document.getElementById("alert").classList.remove("alert-danger");
    checkPalindrome += reverseMessage;
  } else {
    document.getElementById("alert").classList.remove("d-none");
    document.getElementById("alert").classList.remove("alert-success");
    checkPalindrome += reverseMessage;
  }

  return checkPalindrome;
  // return reverseMessage;
}

//View function
function displayResults(checkPalindrome) {
  document.getElementById("msg").textContent = checkPalindrome;
}

// Swal.fire({
//   backdrop: false,
//   title: "Appname",
//   text: msg,
// });
