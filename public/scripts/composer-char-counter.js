// $(document).ready(function() {
  // console.log("I'm ready!");
// });

function eventHandler(event) {
  let count = 140;
  let counter = $( this ).siblings("span")[0];
  console.log($(".counter").text(count - $(this).val().length));
  console.log(count - $( this ).val().length);
};


let textArea = document.querySelector("#tweetText");


textArea.addEventListener('input', eventHandler);


$(".counter").text(140)