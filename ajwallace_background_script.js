$(document).ready(function(){
    


//-------MUSIC BUTTON----------

//music botton hover
$(".music").on("mouseenter", function() {
  $("#backgroundPic").css(
    "background-image",
    "url(/images/tridentconsolefaders3.jpg)"
  );
  //change backgroundPic2 to empty so that backgroundPic shows
  $("#backgroundPic2").css("background-image", "");
  //background opacity lightens up revealing backgroundPic
  $(".background").css("background-color", "rgba(30, 32, 33, 0.7");
});

//mouse leaves music button
$(".music").on("mouseleave", function() {
  //define function that restores backgroundPic 2 image
  function musicPic() {
    $("#backgroundPic2").css(
      "background-image",
      "url(/images/web-develop-2.jpg)"
    );
  }
  //change background opacity back to full
  $(".background").css("background-color", "rgba(30, 32, 33, 1");
  //call function defined earlier, but with a 500ms delay so the image doesn't change before fading out
  setTimeout(musicPic, 400);
});

// testing

//end testing

//-------WEB BUTON--------

//web button hover
$(".web").on("mouseenter", function() {
  //load backgroundPic2 since the other backgroundPic loads with the initial web page
  $("#backgroundPic").css("background-image", "");

  $("#backgroundPic2").css(
    "background-image",
    "url(/images/web-develop-2.jpg)"
  );
  //change the backgroundPic to empty so that backgroundPic2 shows

  //change .background opacity to 0.7 so backgroundPic2 comes through
  $(".background").css("background-color", "rgba(30, 32, 33, 0.7)");
});

//when mouse leaves the web button
$(".web").on("mouseleave", function() {
  //define function to change backgroundPic from "" back to original pic
  function webPic() {
    $("#backgroundPic").css(
      "background-image",
      "url(/images/tridentconsolefaders3.jpg)"
    );
  }
  //change background opacity back to full
  $(".background").css("background-color", "rgba(30, 32, 33, 1)");
  //call webPic function, but delay it by 500ms so the pic doesn't change during fade
  setTimeout(webPic, 400);
});

    
    });