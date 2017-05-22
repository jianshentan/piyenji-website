(function() {
  $('body,#player').on('mousewheel DOMMouseScroll', function(event) {
    $('#phone-screen').scrollTop($('#phone-screen').scrollTop() - (event.originalEvent.wheelDelta || -event.originalEvent.detail*30));
  });
})();