$(() => {
// Test / driver code (temporary). Eventually will get this from the server.
const data = [
{
  "user": {
    "name": "Gary and Earl",
    "avatars": {
      "small":   "/images/user/garyandearl.png",
      "regular": "/images/user/garyandearl.png",
      "large":   "/images/user/garyandearl.png"
    },
    "handle": "@ottawakittesrcool"
  },
  "content": {
    "text": "*bat* *bat* *bat* *chew* *chew*"
  },
  "created_at": 1461116232227
},
{
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
},
{
  "user": {
    "name": "Sammich",
    "avatars": {
      "small":   "/images/user/sammich.png",
      "regular": "/images/user/sammich.png",
      "large":   "/images/user/sammich.png"
    },
    "handle": "@sammich"
  },
  "content": {
    "text": "meow meow meow"
  },
  "created_at": 1461116232227
}
];

function renderTweets(tweets) {
  for (tweet of tweets) {
    // createTweetElement(tweet);
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);

    // console.log($tweet);
  }

  // var $tweet = createTweetElement(tweetData);
};



function createTweetElement(data) {
  const userName = data.user.name;
  const userAvatarRegular = data.user.avatars.regular;
  const userHandle = data.user.handle;
  const contentText = data.content.text;
  const created_at = data.created_at;

  const articleElement = $("<article>").addClass("tweets");

  $("<header>").appendTo(articleElement)
    .append($("<img>").attr('src', userAvatarRegular).addClass("user"))
    .append($("<span>").addClass("name").text(userName))
    .append($("<span>").addClass("handle").text(userHandle));

  $("<section>").addClass("content").text(contentText).appendTo(articleElement);

  $("<footer>").text(created_at).appendTo(articleElement)
    .append($("<span>").addClass("icons"));


  return articleElement;


};

renderTweets(data);

// Test / driver code (temporary)
// var $tweet = createTweetElement(tweetData);
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

