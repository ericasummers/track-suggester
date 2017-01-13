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
    var designbuild = $("input:radio[name=designbuild]:checked").val();
    var interactive = $("input:radio[name=interactive]:checked").val();
    var schoolsubject = $("#school-subject").val();
    var additionInput = $("input#addition").val();
    var track = $("#track").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);

    if (designbuild === "design") {
      $('#cssresult').show();
    } else if (designbuild === "build"){
      $('#cssresult').hide();
    }
    if (interactive === "yes") {
      $('#rubyresult').show();
    } else if (interactive === "no") {
      $('#phpresult').show();
    }

  });
});
