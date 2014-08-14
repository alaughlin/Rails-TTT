(function () {
  if (typeof TicTacToe === "undefined") {
    window.TicTacToe = {};
  };

  var MoveError = TicTacToe.MoveError = function (msg) {
    this.msg = msg;
  };
})();