function product(pid:number, pname:string,quantity?:number){
    console.log("Product id is " + pid);
    console.log("Product Name is " + pname);
    if(quantity != undefined)
        console.log("Number of Products is " + quantity);
}

product(101,"IPhone 14 pro max");
product(101,"IPhone 14 pro max",12);

function estimate_profit(cp:number,sp:number=1000){
    var profit = sp-cp;
    console.log(profit);
}

estimate_profit(600,800)
estimate_profit(300)

