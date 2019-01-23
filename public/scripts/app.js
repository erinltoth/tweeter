$(function() {
// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Atrius",
    "avatars": {
      "small":   "/images/user/kitkats.png",
      "regular": "/images/user/kitkats.png",
      "large":   "/images/user/kitkats.png"
    },
    "handle": "@Atrius"
  },
  "content": {
    "text": "MRRRRROW!"
  },
  "created_at": 1461116232227
}




function createTweetElement(data) {
  const userName = data.user.name;
  const userAvatarRegular = data.user.avatars.regular;
  const userHandle = data.user.handle;
  const contentText = data.content.text;
  const created_at = data.created_at;

  const articleElement = $("<article>").addClass("tweets");

  const header = $("<header>").appendTo(articleElement);
  const img = $("<img>").attr('src', userAvatarRegular).addClass("user").appendTo(header);
  const spanName = $("<span>").addClass("name").text(userName).appendTo(header);
  const spanHandle = $("<span>").addClass("handle").text(userHandle).appendTo(header);

  const body = $("<section>").addClass("body").text(contentText).appendTo(articleElement);

  const footer = $("<footer>").text(created_at).appendTo(articleElement);
  const spanIcon = $("<span>").addClass("icons").appendTo(footer);


  return articleElement;


}


// Test / driver code (temporary)
var $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

