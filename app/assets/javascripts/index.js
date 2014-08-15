$(document).ready (function () {
  var view = new TicTacToe.View($(document), new TicTacToe.Game(), function(winner) {
    if (winner) {
      if (winner === "x") {
        var winner = "Orange Cat";
      } else {
        var winner = "Grey Cat";
      }

      $("#resultLabel").text("Winner: " + winner);
    } else {
      $("#resultLabel").text("Draw! Get a life!");
    }
  });
  $("ul").on("click", "li", view.onClick.bind(view));
  $("#reset").on("click", function() {
    $("li").removeClass();
    view.game = new TicTacToe.Game();
    $("#resultLabel").text(null);
  });
});