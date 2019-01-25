$(() => {
  function eventHandler() {
    const count = 140;
    if ($(this).val().length <= 140) {
      return $($(this).siblings('span.counter')[0]).text(count - $(this).val().length).css('color', 'black');
    }
    return $($(this).siblings('span.counter')[0]).text(count - $(this).val().length).css('color', 'red');
  }


  const textArea = document.querySelector('#tweetText');


  textArea.addEventListener('input', eventHandler);
});
