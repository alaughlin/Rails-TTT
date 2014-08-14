(function () {
  if (typeof TicTacToe === "undefined") {
    window.TicTacToe = {};
  };

  var Board = TicTacToe.Board;
  var MoveError = TicTacToe.MoveError;

  var Game = TicTacToe.Game = function () {
    this.board = new TicTacToe.Board();
    this.currentPlayer = TicTacToe.Board.marks[0];
  }

  Game.prototype.isOver = function () {
    return this.board.isOver();
  };

  Game.prototype.playMove = function (pos) {
    var val = null;
    if (this.board.placeMark(pos, this.currentPlayer)) {
      val = this.currentPlayer;
    }
    this.swapTurn();
    return val;
  };

  Game.prototype.swapTurn = function () {
    if (this.currentPlayer === TicTacToe.Board.marks[0]) {
      this.currentPlayer = TicTacToe.Board.marks[1];
    } else {
      this.currentPlayer = TicTacToe.Board.marks[0];
    }
  };

  Game.prototype.winner = function () {
    return this.board.winner();
  };

})();
