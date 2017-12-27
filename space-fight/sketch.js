var ship;
var bullets = [];
var dumbs = [];
function setup() {
  // put setup code here
    createCanvas(400,400);
    ship = new Ship();
    for(i=0;i<20;i++){
        var dumb = new Dumb();
        dumbs.push(dumb);
    }
}

function draw() {
  // put drawing code here
    background(0);
    ship.show();
    ship.move();
    for(i=0;i<bullets.length;i++){
        bullets[i].show();
        bullets[i].move();
    }
    for(j=0;j<dumbs.length;j++){
        dumbs[j].show();
    }
    
    for(i=0;i<dumbs.length;i++){
        for(j=0;j<bullets.length;j++){
            if(dumbs[i].touch(bullets[j])){
                bullets.splice(j,1);
                dumbs.splice(i,1);
            }
        }
    }
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        ship.setDir(-1);
    }
    if(keyCode === RIGHT_ARROW){
        ship.setDir(1);
    }
    if(key === ' '){
        var bullet = new Bullets(ship.x);
        bullets.push(bullet); 
    }
}