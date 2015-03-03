function Game(){
  this.$track = $('#racetrack');
}

function Player(track, id){
  this.$track = track;
  this.$player = $('.player')[id - 1];
  this.x = 10;
}

Player.prototype.move = function(){
  $player = $(this.$player);
  x = this.x;

  if ( $player.attr('id') === "1" ) {

    Mousetrap.bind('p', function() {
      x += 10;
      $player.css('margin-left', x);
    });
  } else if ( $player.attr('id') === "2" ) {

    Mousetrap.bind('q', function() {
      x += 10;
      $player.css('margin-left', x);
    });
  }
};

Player.prototype.choosePlayer = function(id){
  $player = this.$player[id - 1];
  return $player;
};

// $(document).ready(function(){

// });