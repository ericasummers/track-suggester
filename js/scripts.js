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

    if (designbuild === "design" || track === "css-design") {
      $('#cssresult').show();
      $('#phpresult', '#javaresult', '#rubyresult', '#cnetresult').hide();
    } else {
      $('#cssresult').hide();
    }
    if (interactive === "yes" || track === "ruby-rails") {
      $('#rubyresult').show();
      $('#cssresult', '#phpresult', '#javaresult', '#cnetresult').hide();
    } else {
      $('#rubyresult').hide();
    }
    if (interactive === "no" || track === "PHP") {
      $('#phpresult').show();
      $('#cssresult', '#rubyresult', '#javaresult', '#cnetresult').hide();
    } else {
      $('#phpresult').hide();
    }
    if (interactive === "yes" && track === "Java") {
      $('#javaresult').show();
      $('#cssresult', '#phpresult', '#rubyresult', '#cnetresult').hide();
    } else if (interactive === "yes" && schoolsubject === "math", "biochem") {
      $('#javaresult').show();
      $('#cssresult', '#phpresult', '#rubyresult', '#cnetresult').hide();
    } else {
      $('#javaresult').hide();
    }
    if (interactive === "no" && schoolsubject === "math", "biochem") {
      $('#cnetresult').show();
      $('#cssresult', '#phpresult', '#rubyresult', '#javaresult').hide();
    } else {
      $('#cnetresult').hide();
    }
    if (additionInput === 30) {
      $('#cnetresult').show();
      $('#cssresult', '#phpresult', '#rubyresult', '#javaresult').hide();
    } else {
      $('#cnetresult').hide();
    }

  });
});
