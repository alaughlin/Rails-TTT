$(document).ready (function () {
  var view = new TicTacToe.View($(document), new TicTacToe.Game(), function(winner) {
    if (winner) {
      $("#resultLabel").text("Winner: " + winner);
    } else {
      $("#resultLabel").text("Draw!");
    }
  });
  $("ul").on("click", "li", view.onClick.bind(view));
  $("#reset").on("click", function() {
    $("li").removeClass();
    view.game = new TicTacToe.Game();
    $("#resultLabel").text(null);
  });
});