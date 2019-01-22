$(document).ready(function() {
  console.log("I'm ready!");
});

function eventHandler(event) {
  console.log(event);
  console.log("working!");
}

const textArea = document.querySelector("#tweetText");

textArea.addEventListener('keypress', eventHandler);
