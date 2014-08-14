(function() {
  if (typeof TicTacToe === "undefined") {
    window.TicTacToe = {};
  }

  var View = TicTacToe.View = function(jElement, game, winCB) {
    this.doc = jElement;
    this.game = game;
    this.cb = winCB;
  };

  View.prototype.onClick = function(event) {
    if (this.game.isOver()) {
      return;
    }
    var id = parseInt(event.target.id);
    var pos = [id % 3, Math.floor(id / 3)];
    var val = this.game.playMove(pos);
    if (val) {
      $("#" + id).addClass(val);
      if (this.game.isOver()) {
        this.cb(this.game.winner());
      }
    }
  };


  View.prototype.reset = function(game) {
    this.game = game;
  }

})();