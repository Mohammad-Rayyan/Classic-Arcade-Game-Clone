// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.collision();
    this.x = this.x + this.speed*100*dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.collision = function() {
    if(this.y == player.y){
        if((this.x <= player.x) && ((this.x + 83) >= player.x)){
            player.reset();
        }
    }
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dx, dy) {
    var newX = this.x + dx;
    var newY = this.y + dy;
    if(newX < 0 || newX > 500) dx = 0;
    if(newY < -40 || newY > 383) dy = 0;
    this.x = this.x + dx;
    this.y = this.y + dy;
    if(this.y == -32){
        this.reset();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.reset = function() {
    this.x = 0;
    this.y = 300;
};
Player.prototype.handleInput = function(e) {
    var dx = 0;
    var dy = 0;
    if (e == 'left') {
        dx = -101;
    }else if (e == 'up') {
        dy = -83;
    }else if (e == 'down') {
        dy = 83;
    }else if (e == 'right'){
        dx = 101;
    }
    this.update(dx, dy);
};

var stone1 = 51;
var stone2 = 134;
var stone3 = 217;
var stones = [stone1, stone2, stone3];
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var createEnemey = function () {
    var stone = stones[Math.floor(Math.random() * stones.length)];
    var speed = Math.floor(Math.random() * 6);
    allEnemies.push(new Enemy(-101, stone, speed));
};

window.setInterval(function(){
  createEnemey();
}, 700);
var player = new Player(0,300);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
