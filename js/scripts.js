$(document).ready(function() {
  $(".rubyclick").click(function() {
    $(".rubyhidden").toggle();
  });
  $(".phpclick").click(function() {
    $(".phphidden").toggle();
  });
  $(".javaclick").click(function() {
    $(".javahidden").toggle();
  });
  $(".designclick").click(function() {
    $(".designhidden").toggle();
  });
  $(".cnetclick").click(function() {
    $(".cnethidden").toggle();
  });

  $("form#survey").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var designbuild = $("input.radio[name=design-build]:checked").val();
    var interactive = $("input.radio[name=interactive]:checked").val();
    var schoolsubject = $("#school-subject").val();
    var additionInput = $("input#addition").val();
    var trak = $("#track").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);

    $(".jumbotron").show();
  });
});
