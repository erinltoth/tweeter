$(() => {
  const allTweets = $('#tweets-container');


  $('#compose').click(() => {
    $('.new-tweet').slideToggle('slow', () => {
    });
    $('#tweetText').focus();
  });


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

  $('#new-tweet').on('submit', function (event) {
    event.preventDefault();
    const serialized = $(this).serialize();
    $('.error').text('').slideToggle('slow', () => {
    });
    if (serialized.length <= 5) {
      $('.error').text('You have to twit something!').slideToggle('fast', () => {
      });
    } else if (serialized.length > 5 && serialized.length <= 140) {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: serialized,
      }).done(() => {
        loadTweets();
        $('#tweetText').val('');
        $('span.counter').text('140');
      });
    } else if (serialized.length > 140) {
      $('.error').text('Twit a little less, please!').slideToggle('fast', () => {
      });
    }
  });


  loadTweets();
});
