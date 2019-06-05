$(document).ready(function() {
    $("#survey form").submit(function(event) {

      var food = $("#food").val();
      $(".food").text(food);

      var sport = $("input:radio[name=sport]:checked").val();
      $(".sport").text(sport);

      var color = $("#colorWheel").val();
      $(".color").text(color);

      var dob = $("#born").val();
      console.log(dob);
      $(".DOB").text(dob);


      var name = $("#name").val();
      $(".name").text(name);





    $("#results").show();

    event.preventDefault();
  });
});
