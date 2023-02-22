function product(pid:number, pname:string,quantity?:number){
    console.log("Product id is " + pid);
    console.log("Product Name is " + pname);
    if(quantity != undefined)
        console.log("Number of Products is " + quantity);
}

/* product(101,"IPhone 14 pro max");
product(101,"IPhone 14 pro max",12); */

function estimate_profit(cp:number,sp:number=1000){
    var profit = sp-cp;
    console.log(profit);
}

/* estimate_profit(600,800);
estimate_profit(300); */

function estimate_profit_1(sp:number=1000,cp:number,){
    var profit = sp-cp;
    console.log(profit);
}

/* estimate_profit_1(undefined,1000); */

/* REST PARAMETERS */
function addNumber(...nums:number[]){
    var result = 0
    var i:any;
    for(i=0;i<nums.length;i++){
        result += nums[i];
    }
    console.log(result);
}

/* addNumber(100,100);
addNumber(100,100,100); */

function addNumbers(...nums:number[]):number {
    var result = 0
    var i:any;
    for(i=0;i<nums.length;i++){
        result += nums[i];
    }
    return result;
}
/* console.log(addNumbers(100,100,100,25)); */

/* ARROW FUNCTIONS */

let sum2 = (x:number, y:number):number=>{
    return x+y;
}
console.log(sum2(100,100));

let dis = ()=>{
    return("Helllo World");
}

console.log(dis());