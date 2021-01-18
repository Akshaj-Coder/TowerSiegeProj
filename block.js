class block{
    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        //fill(0,255,255);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}