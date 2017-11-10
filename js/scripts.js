$(document).ready(function() {

  function hideAll() {
     $('#jolene').hide();
     $('#goodbye_in_her_eyes').hide();
     $('#colder_weather').hide();
     $('#loving_you_easy').hide();
   }
 hideAll();

 $('.covers').click(function() {
  hideAll();

// any cover that has class .raised, removeClass('.raised') and also put that one down +=15px

$(".covers").each(function() {
  if($(this).hasClass('.raised')) {
    $(this).removeClass('.raised');
    $(this).animate({ 'top': "+=15px" }, 'fast');
  }
});

  $(this).animate( { 'top': "-=15px" }, 'fast' ).addClass('.raised');

  switch ($(this).attr("id")) {
    case "The_Foundation":
      $('#jolene').show();
      break;
    case "Uncaged":
      $('#goodbye_in_her_eyes').show();
      break;
    case "You_Get_What_You_Give":
      $('#colder_weather').show();
      break;
    case "Jekyll_+_Hyde":
      $('#loving_you_easy').show();
      break;
  }

  $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
  });
});

/*
$("#jolene_name").hide();
$("#The_Foundation").click(function() {
  $("#jolene_name").slideToggle();
});

$("#goodbyeinhereyes_name").hide();
$("#Uncaged").click(function() {
  $("#goodbyeinhereyes_name").slideToggle();
});

$("#colderweather_name").hide();
$("#You_Get_What_You_Give").click(function() {
  $("#colderweather_name").slideToggle();
});

$("#lovingyoueasy_name").hide();
$("#Jekyll_+_Hyde").click(function() {
  $("#lovingyoueasy_name").slideToggle();
});


$(".covers").click (function() {
    if ( $(this).position().down > 100 ) {
        $(this).animate( { up: "-=100px" }, 'fast' );
    } else {
  $(this).animate( { down: "+=100px" }, 'fast' );
      }
});
*/

});
