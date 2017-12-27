function Bullets(x){
    this.x = x;
    this.y = height;
    
    this.show = function(){
        fill(150,0,255, 200);
        ellipse(this.x,this.y,10,10); 
    }
    
    this.move = function(){
        this.y -= 10;
    }
    
}