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

  $("form#survey").submit(function() {
    event.preventDefault();
    var name = $("input#name").val();
    var age = $("input#age").val();

    $(".name").text(nameInput);
    $(".age").text(nameInput);

    $(".jumbotron").show();
  });
});
