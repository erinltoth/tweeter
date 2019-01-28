/* eslint-disable func-names */
$(() => {
  const allTweets = $('#tweets-container');

  // Animation for slide-in of compose field on button press.
  $('#compose').click(() => {
    $('.new-tweet').slideToggle('slow', () => {
    });
    $('#tweetText').focus();
  });

  // Function to create the template for styling new twits/tweets and appending it in to the HTML.
  function createTweetElement(data) {
    const userName = data.user.name;
    const userAvatarRegular = data.user.avatars.regular;
    const userHandle = data.user.handle;
    const contentText = data.content.text;
    const created_at = timeSince(data.created_at);

    const articleElement = $('<article>').addClass('tweets');

    $('<header>').appendTo(articleElement)
      .append($('<img>').attr('src', userAvatarRegular).addClass('user'))
      .append($('<span>').addClass('name').text(userName))
      .append($('<span>').addClass('handle').text(userHandle));

    $('<section>').addClass('content').text(contentText).appendTo(articleElement);

    $('<footer>').text(created_at).appendTo(articleElement)
      .append($('<span>').addClass('icons').text('⚑ ↻ ❤'));

    return articleElement;
  }

  // Function responsible for rendering the twits/tweets and placing a new twit/tweet at the top.
  function renderTweets(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  }

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).done((tweets) => {
      allTweets.empty();

      renderTweets(tweets);
    });
  }

  // Function responsible for taking content input into the compose text area
  // Content is validated for length and an error message is animated in if it does not fit requirements.
  $('#new-tweet').on('submit', function (event) {
    event.preventDefault();
    const serialized = $(this).serialize();
    $('.error').text('').slideUp('slow', () => {
    });
    if ($('#tweetText').val().length <= 0) {
      $('.error').text('You have to twit something!').slideToggle('fast', () => {
      });
    } else if ($('#tweetText').val().length > 0 && $('#tweetText').val().length < 141) {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: serialized,
      }).done(() => {
        loadTweets();
        $('#tweetText').val('');
        $('span.counter').text('140');
      });
    } else if ($('#tweetText').val().length > 140) {
      $('.error').text('Twit a little less, please!').slideToggle('fast', () => {
      });
    }
  });

  // Function to change time from milliseconds to a more readable format adapted from 
  // Moses Koledoye's function found at https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
  const timeSince = function(createdTime) {
    let date = new Date(createdTime);
    let seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 5){
        return "just now";
    } else if (seconds < 60){
        return seconds + " seconds ago";
    } else if (seconds < 3600) {
        minutes = Math.floor(seconds/60)
        if(minutes > 1)
            return minutes + " minutes ago";
        else
            return "1 minute ago";
    } else if (seconds < 86400) {
        hours = Math.floor(seconds/3600)
        if(hours > 1)
            return hours + " hours ago";
        else
            return "1 hour ago";
    }
    else {
        days = Math.floor(seconds/86400)
        if(days > 1)
            return days + " days ago";
        else
            return "1 day ago";
    }
}


  loadTweets();
});
