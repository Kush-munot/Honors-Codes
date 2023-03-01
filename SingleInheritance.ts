class car{
    color:string;

    constructor(color:string){
        this.color=color;
    }
}

class model extends car{
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

var obj = new model("Red","BMW")
obj.print()