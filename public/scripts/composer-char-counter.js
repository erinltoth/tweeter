// $(document).ready(function() {
  // console.log("I'm ready!");
// });

function eventHandler(event) {
  let count = 140;
  if ($(this).val().length <= 140) {
    return $($(this).siblings("span")[0]).text(count - $(this).val().length).css('color', 'black');
  } else {
    return $($(this).siblings("span")[0]).text(count - $(this).val().length).css('color', 'red');
  }
};


let textArea = document.querySelector("#tweetText");


textArea.addEventListener('input', eventHandler);


