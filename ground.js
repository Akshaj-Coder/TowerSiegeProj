class ground{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
    }

    display(){
        var pos = this.body.position;
        var pos = this.body.position;

        fill(255,0,0);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
      }
}