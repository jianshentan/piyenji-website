var mobile;

// enable scroll from anywhere on page to scroll phone screen
(function() {
  $('body, #overlay').on('mousewheel DOMMouseScroll', function(event) {
    $('.screen.active').scrollTop($('.screen.active').scrollTop() - (event.originalEvent.wheelDelta || -event.originalEvent.detail*30));
  });
})();

$(document).ready(function() {
  /* hide mobile only or desktop only */
  if (window.mobilecheck()) {
    mobile = true;
    $(".mobile-only").show();
    $(".desktop-only").hide();
  } else {
    mobile = false;
    $(".mobile-only").hide();
    $(".desktop-only").show();
  }

  // set time
  var time = new Date();
  time = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
  $("#time, #video-time").html(time);
  
  if (!mobile) {
    // make iphone and screens float
    $("#iphone").addClass("float");  
    $("#master-screen").addClass("float");  
  }
  
  $(".artist-page-close").click(function(){
    $(".artist-page").animate({
      "top": "100%"
    }, 500, function() {
    });
  });
  
  $(".contact").each(function() {
    $(this).click(function() {
      if ($(this).hasClass("active")) {
        console.log("already on this tab!")  
      } else {
        
        // slide up all screens
        $(".artist-screen").each(function(){
          $(this).hide();
        });
        $(".screen").each(function() {
          $(this).removeClass("active");
        });
        
        // if home button 
        if ($(this).attr("id") == "home") {
          $("#convo-screen").addClass("active");
          $(".artist-screen").each(function() {
            $(this).hide()
          })  
        } 
        // if artist button
        else {
          var id = $(this).attr("id");
          $("#" + id + "-page").show().addClass("active");
        }
        
        $(".contact").each(function(){
          $(this).removeClass("active");
        });
        $(this).addClass("active");
      }
    });
  });
  
  // easter egg - video on desktop only
  var videoMode = false;
  $("#video-screen").hide();
  $("#video-mode, #video-record").click(function() {
    if (videoMode) {
      $("#menu-screen, #convo-screen").slideDown("fast"); 
      $("#video-screen").hide();
      videoMode = false;
    } else {
      $(".artist-screen, #menu-screen, #convo-screen").slideUp("fast");
      $(".artist-screen").each(function(){ $(this).slideUp("fast"); });
      $("#video-screen").show();
      videoMode = true;
    }
  });
  
  // video to full screen at all screen sizes:
  if ($("body").width() > 1.6 * $("body").height()) {
    $("#video").height($("body").height() * 1.6) 
  }
  
  
});
