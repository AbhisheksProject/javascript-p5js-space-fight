function Ship(){
    this.x = width/2;
    this.y = height-10;
    
    this.movDir = 0;
    
    this.show = function(){
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x,this.y,10,25);
    }
    
    this.setDir = function(dir){
        this.movDir = dir;    
    }
    
    this.move = function(){
        if(this.x > width-10)
            this.x = 10;
        if(this.x < 10)
            this.x = width-10;
        else
            this.x += this.movDir*2;
    }  
};