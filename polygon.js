class polygon {
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.image = loadImage("polygon.png");
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width,this.height); 
    }
} 