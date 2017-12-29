function Dumb(y){
    this.x = random(0,width);
    this.y = y;
    this.toDelete = false;
    this.show = function(){
        fill(255);
        ellipse(this.x,this.y,20,20);
        this.y += .2;
    }
    
    this.touch = function(bullets){
        d = sqrt(((this.x - bullets.x) * (this.x - bullets.x)) + ((this.y - bullets.y) * (this.y - bullets.y)));
        if(d < 15){
            return true;
        } else{
            return false;
        }
    }
    
    this.ground = function(){
        if(this.y > height){
            noLoop();
        }
    }
}