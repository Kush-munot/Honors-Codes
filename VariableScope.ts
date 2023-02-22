var global_v=11

class VS
{
    va_var=200;

    static static_v=203;


    localNumber(): void{
        var local_v=44;
        console.log("Local Variable",local_v);
    }
}

console.log("Global Variable "+global_v)
var obj=new VS();
console.log("Class varible",obj.va_var);
console.log("Static Variable",VS.static_v)

obj.localNumber();



