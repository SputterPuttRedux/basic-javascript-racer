function Game(){
  this.$track = $('#racetrack');
  this.finishLine = this.$track.width() - 54;
}

function Player(id){
  this.player = $('.player')[id - 1];
  this.position = 10;
}

Player.prototype.move = function(){
  this.position += 20;
};

Player.prototype.updatePosition = function(){
  $player = $(this.player);
  $player.css('margin-left', this.position);
};

Player.prototype.checkWinner = function(){

};


$(document).ready(function() {
    var game = new Game();
    var player1 = new Player(1);
    var player2 = new Player(2);

    $(document).on('keyup', function(keyPress){
      if(keyPress.keyCode === 80) {
        player1.move();
        player1.updatePosition();
      } else if (keyPress.keyCode === 81) {
        player2.move();
        player2.updatePosition();
      }
    });
  });