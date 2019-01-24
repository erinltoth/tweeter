$(() => {
  $('#compose').click(() => {
    $('.new-tweet').slideToggle('slow', () => {
    });
    $('#tweetText').focus();
  });

  function renderTweets(tweets) {
    for (tweet of tweets) {
    // createTweetElement(tweet);
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);

    // console.log($tweet);
    }

  // var $tweet = createTweetElement(tweetData);
  }


  function createTweetElement(data) {
    const userName = data.user.name;
    const userAvatarRegular = data.user.avatars.regular;
    const userHandle = data.user.handle;
    const contentText = data.content.text;
    const created_at = data.created_at;

    const articleElement = $('<article>').addClass('tweets');

    $('<header>').appendTo(articleElement)
      .append($('<img>').attr('src', userAvatarRegular).addClass('user'))
      .append($('<span>').addClass('name').text(userName))
      .append($('<span>').addClass('handle').text(userHandle));

    $('<section>').addClass('content').text(contentText).appendTo(articleElement);

    $('<footer>').text(created_at).appendTo(articleElement)
      .append($('<span>').addClass('icons'));


    return articleElement;
  }


  $('#new-tweet').on('submit', function (event) {
    event.preventDefault();
    const serialized = $(this).serialize();
    $('.error').text('').slideToggle('slow', () => {

    });
    console.log(serialized.length);
    if (serialized.length <= 5) {
      $('.error').text('You have to twit more!').slideToggle('fast', () => {

      });
    } else if (serialized.length > 5 && serialized.length <= 140) {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: serialized,
      }).done(() => {
        loadTweets();
      });
    } else if (serialized.length > 140) {
      $('.error').text('Twit less, please!').slideToggle('fast', () => {

      });
    }
  });

  const allTweets = $('#tweets-container');

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).done((tweets) => {
      allTweets.empty();

      renderTweets(tweets);
      // allTweets.prepend(element);
    });
  }


  loadTweets();

  // renderTweets(data);

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
