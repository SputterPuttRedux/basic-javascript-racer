function Game(){
  this.$track = $('#racetrack');
  this.finishLine = this.$track.width() - 90;
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

Player.prototype.stop = function(){
  this.position -= 20;
};

Player.prototype.updatePosition = function(){
  $player = $(this.player);
  $player.css('margin-left', this.position);
};

function checkWinner(player, game){
  $('.lead').html("Player " + player.player.id + " has won!" + "\n Play Again?");

  if( player.position > game.finishLine ){
    // var again = window.confirm("Player " + player.player.id + " has won!" + "\n Play Again?");
    player.stop();
    $('.hacky-workaround').click($('#myModal').foundation('reveal','open'));

    // if (again === true) {
    //   location.reload(document);
    // }
  }
}

function wikipediaRedirect(){
  window.location = "http://en.wikipedia.org/wiki/Special:Random";
  return false;
}

$(document).ready(function() {
    var game = new Game();
    var player1 = new Player(1, "./assets/img/nyanCat.gif");
    var player2 = new Player(2, "./assets/img/zombieCat.gif");
    var $modal_message =

    player1.updateImage();
    player2.updateImage();

    $(document).on('keyup', function(keyPress){

      if(keyPress.keyCode === 80) {
        player1.move();
        player1.updatePosition();
        checkWinner(player1, game);
      } else if (keyPress.keyCode === 81) {
        player2.move();
        player2.updatePosition();
        checkWinner(player2, game);
      }
    });

    // $('.no-button').click(function (){
    //   window.location.replace("http://en.wikipedia.org/wiki/Special:Random");
    //   return false;
    // });

    $('.no-button').click(function (){
      var timedRedirct = setInterval(wikipediaRedirect, 2500);
    });
  });