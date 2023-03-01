class bike{
    color:string;

    constructor(color:string){
        this.color=color;
    }
}

class bikeModel extends bike{
    model:string;

    constructor(color:string,model:string){
        super(color)
        this.model=model
    }

    print():void{
        console.log("color: ",this.color)
        console.log("Model: ",this.model)
    }

}

class racingBike extends bikeModel{
    speed:number;
    constructor(color:string,model:string,speed:number){
        super(color,model)
        this.speed=speed
    }
    print(): void {
        console.log("raceBike Speed:", this.speed);
    }
}

var objs = new racingBike("Red","Kawasaki", 200)
objs.print()