// named Function
function Message(){
    console.log("Message")

}


Message();

var ms= function()
{
    return "Message";
}

console.log(ms())

let sum=function(x:number,y:number):number{
    return x+y

}

console.log(sum(10,12))