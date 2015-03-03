function Game(){
  this.$track = $('#racetrack');
}

function Player(track){
  this.$track = track;
  this.$player = $('.player');
  this.x = 10;
}

Player.prototype.move = function(){
  $player = this.$player;
  Mousetrap.bind('p', function(){
    // debugger
  $player.css('background-color', 'red');
  });
};

// $(document).ready(function(){

// });