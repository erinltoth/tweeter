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
    const created_at = data.created_at;

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
    if ($('#tweetText').val().length <= 5) {
      $('.error').text('You have to twit something!').slideToggle('fast', () => {
      });
    } else if ($('#tweetText').val().length > 5 && $('#tweetText').val().length <= 140) {
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
      $('.error').text('Twit a little less, please!').slideUp('fast', () => {
      });
    }
  });


  loadTweets();
});
