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
    var schoolsubject = $("#schoolsubject").val();
    var additionInput = parseInt($("input#addition").val());
    var track = $("#track").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);

    if (designbuild === "design") {
      $('#cssresult').show();
      $('#phpresult', '#javaresult', '#rubyresult', '#cnetresult').hide();
    } else {
      $('#cssresult').hide();
    }
    if (interactive === "yes" && designbuild === "build" && additionInput === 30) {
      $('#rubyresult').show();
      $('#cssresult', '#phpresult', '#javaresult', '#cnetresult').hide();
    } else {
      $('#rubyresult').hide();
    }
    if (interactive === "no" && designbuild === "build" && schoolsubject !== "math") {
      $('#phpresult').show();
      $('#cssresult', '#rubyresult', '#javaresult', '#cnetresult').hide();
    } else {
      $('#phpresult').hide();
    }
    if (additionInput === 30 && designbuild === "build" && interactive === "no" && schoolsubject === "math") {
      $('#cnetresult').show();
      $('#cssresult', '#phpresult', '#rubyresult', '#javaresult').hide();
    } else {
      $('#cnetresult').hide();
    }
    if (designbuild === "build" && interactive == "no" && schoolsubject === "math" & additionInput !== 30) {
      $('#javaresult').show();
      $('#cssresult', '#phpresult', '#rubyresult', '#cnetresult').hide();
    } else {
      $('#javaresult').hide();
    }

  });
});
