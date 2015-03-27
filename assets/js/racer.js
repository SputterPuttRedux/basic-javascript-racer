function Game(){
  this.$track = $('#racetrack');
  this.finishLine = this.$track.width() - 54;
}

function Player(id,img){
  this.player = $('.player')[id - 1];
  this.position = 10;
  this.img = img;
}

Player.prototype.updateImage = function(){
  $player = $(this.player);
  $player.css('background-image', 'url(' + this.img + ')');
};

Player.prototype.move = function(){
  this.position += 20;
};

Player.prototype.updatePosition = function(){
  $player = $(this.player);
  $player.css('margin-left', this.position);
};

function checkWinner(player, game){
  var $modal_message = $('.lead');

  if( player.position > game.finishLine ){
    // var again = window.confirm("Player " + player.player.id + " has won!" + "\n Play Again?");
    $('.hacky-workaround').click();
    $modal_message.html("Player " + player.player.id + " has won!" + "\n Play Again?");
    // if (again === true) {
    //   location.reload(document);
    // }
  }
}

function wikipediaRedirect(){
  window.location.replace("http://en.wikipedia.org/wiki/Special:Random");
  return false;
};

$(document).ready(function() {
    var game = new Game();
    var player1 = new Player(1, "./assets/img/nyanCat.gif");
    var player2 = new Player(2, "./assets/img/zombieCat.gif");

    player1.updateImage();
    player2.updateImage();

    $(document).on('keyup', function(keyPress){
      console.log("Finish line coordinates: " + game.finishLine);

      if(keyPress.keyCode === 80) {
        player1.move();
        player1.updatePosition();
        console.log("P1: " + player1.position);
        checkWinner(player1, game);
      } else if (keyPress.keyCode === 81) {
        player2.move();
        player2.updatePosition();
        console.log("P2: " + player2.position);
        checkWinner(player2, game);
      }
    });
  });