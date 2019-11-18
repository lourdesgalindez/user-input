function groceryCalculator(monthlySalary) {
  var weeks = 4;
  var oneFourth = 0.25;
  var affordableGrocery = (monthlySalary / 4) * oneFourth;
  return Math.round(affordableGrocery);
}


$(document).ready(function() {
    $("#submit").click(function() {
      var money = $("#money").val();
      var result = groceryCalculator(money);
      var friendlyResult = "You should not spend more than $" + result + " on groceries each week";

      $(".place").text(friendlyResult);
    });
});
